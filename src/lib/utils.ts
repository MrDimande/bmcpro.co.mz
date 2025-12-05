/**
 * Utility functions for the backend
 */

export interface ContactData {
	name: string;
	email: string;
	phone?: string | null;
	message: string;
	timestamp: string;
	ip?: string;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Sanitize string input
 */
export function sanitizeInput(input: string): string {
	return input.trim().replace(/[<>]/g, '');
}

/**
 * Validate phone number (Mozambique format)
 */
export function isValidPhone(phone: string): boolean {
	// Mozambique phone format: +258 XX XXX XXXX or 8X XXX XXXX
	const phoneRegex = /^(\+258\s?)?8[2-7]\s?\d{3}\s?\d{4}$/;
	return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Rate limiting check (simple in-memory version)
 * In production, use Redis or similar
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
	const now = Date.now();
	const record = rateLimitMap.get(ip);

	if (!record || now > record.resetTime) {
		rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
		return true;
	}

	if (record.count >= maxRequests) {
		return false;
	}

	record.count++;
	return true;
}

