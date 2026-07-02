"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const supabaseClient_1 = require("../supabaseClient");
const Usuario_1 = require("../entities/Usuario");
class UsuarioRepository {
    async buscarTodos() {
        const { data, error } = await supabaseClient_1.supabase
            .from('usuarios')
            .select('*');
        if (error) {
            console.error("Erro ao buscar usuários do Supabase:", error.message);
            return [];
        }
        if (data) {
            return data.map(item => new Usuario_1.Usuario(item.id, item.email, item.funcao, item.alunoCodigo));
        }
        return [];
    }
}
exports.UsuarioRepository = UsuarioRepository;
