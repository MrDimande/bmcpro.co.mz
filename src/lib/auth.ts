/**
 * Authentication Service
 * JWT-based authentication for admin area
 */

import bcrypt from 'bcryptjs';
import jwt, { type SignOptions } from 'jsonwebtoken';
import supabase from './supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || '7d') as SignOptions['expiresIn'];

export interface JWTPayload {
	userId: string;
	email: string;
	role: string;
}

export interface AuthResult {
	success: boolean;
	token?: string;
	user?: {
		id: string;
		email: string;
		name: string;
		role: string;
	};
	error?: string;
}

/**
 * Hash password
 */
export async function hashPassword(password: string): Promise<string> {
	return bcrypt.hash(password, 12);
}

/**
 * Compare password with hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
	return bcrypt.compare(password, hash);
}

/**
 * Generate JWT token
 */
export function generateToken(payload: JWTPayload): string {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/**
 * Verify JWT token
 */
export function verifyToken(token: string): JWTPayload | null {
	try {
		return jwt.verify(token, JWT_SECRET) as JWTPayload;
	} catch {
		return null;
	}
}

/**
 * Login user
 */
export async function login(email: string, password: string): Promise<AuthResult> {
	try {
		const { data: user, error } = await supabase
			.from('users')
			.select('*')
			.eq('email', email.toLowerCase())
			.single();

		if (error || !user) {
			return { success: false, error: 'Credenciais inválidas' };
		}

		if (!user.is_active) {
			return { success: false, error: 'Conta desactivada' };
		}

		const isValid = await comparePassword(password, user.password);
		if (!isValid) {
			return { success: false, error: 'Credenciais inválidas' };
		}

		// Update last login
		await supabase
			.from('users')
			.update({ last_login: new Date().toISOString() })
			.eq('id', user.id);

		const token = generateToken({
			userId: user.id,
			email: user.email,
			role: user.role
		});

		return {
			success: true,
			token,
			user: {
				id: user.id,
				email: user.email,
				name: user.name,
				role: user.role
			}
		};
	} catch (error) {
		console.error('Login error:', error);
		return { success: false, error: 'Erro interno do servidor' };
	}
}

/**
 * Verify request authentication
 */
export async function verifyAuth(request: Request): Promise<JWTPayload | null> {
	const authHeader = request.headers.get('Authorization');
	
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return null;
	}

	const token = authHeader.substring(7);
	return verifyToken(token);
}

/**
 * Create admin user (for seeding)
 */
export async function createAdminUser(email: string, password: string, name: string): Promise<boolean> {
	try {
		const { data: existingUser } = await supabase
			.from('users')
			.select('id')
			.eq('email', email.toLowerCase())
			.single();

		if (existingUser) {
			console.log('Admin user already exists');
			return false;
		}

		const hashedPassword = await hashPassword(password);

		const { error } = await supabase
			.from('users')
			.insert({
				email: email.toLowerCase(),
				password: hashedPassword,
				name,
				role: 'SUPER_ADMIN',
				is_active: true
			});

		if (error) {
			throw error;
		}

		console.log('✅ Admin user created:', email);
		return true;
	} catch (error) {
		console.error('Error creating admin user:', error);
		return false;
	}
}
