"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const supabaseClient_1 = require("../supabaseClient");
class AuthService {
    // Método que tenta fazer o login e retorna o Token se der certo
    async login(email, senha) {
        // Manda o Supabase conferir o e-mail e a senha
        const { data, error } = await supabaseClient_1.supabase.auth.signInWithPassword({
            email: email,
            password: senha,
        });
        // Se a senha estiver errada ou o usuário não existir
        if (error) {
            console.error("Erro na autenticação:", error.message);
            return null;
        }
        // Se deu tudo certo, o Supabase nos devolve uma Sessão com o Token
        if (data.session) {
            return data.session.access_token;
        }
        return null;
    }
}
exports.AuthService = AuthService;
