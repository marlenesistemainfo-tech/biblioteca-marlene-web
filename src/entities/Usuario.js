"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, email, funcao, alunoCodigo = null) {
        this.id = id;
        this.email = email;
        this.funcao = funcao;
        this.alunoCodigo = alunoCodigo;
    }
    isAdministrador() {
        return this.funcao === 'administrador';
    }
}
exports.Usuario = Usuario;
