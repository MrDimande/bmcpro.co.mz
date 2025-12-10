import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { s as supabase } from './supabase_raZd2PF0.mjs';

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-change-in-production";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
async function comparePassword(password, hash) {
  return bcrypt.compare(password, hash);
}
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
async function login(email, password) {
  try {
    const { data: user, error } = await supabase.from("users").select("*").eq("email", email.toLowerCase()).single();
    if (error || !user) {
      return { success: false, error: "Credenciais inválidas" };
    }
    if (!user.is_active) {
      return { success: false, error: "Conta desactivada" };
    }
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return { success: false, error: "Credenciais inválidas" };
    }
    await supabase.from("users").update({ last_login: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", user.id);
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
    console.error("Login error:", error);
    return { success: false, error: "Erro interno do servidor" };
  }
}
async function verifyAuth(request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7);
  return verifyToken(token);
}

export { comparePassword, generateToken, login, verifyAuth, verifyToken };
