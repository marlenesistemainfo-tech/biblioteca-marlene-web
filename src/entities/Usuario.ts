export class Usuario {
    public id: string;
    public email: string;
    public funcao: string;
    public alunoCodigo: number | null;

    constructor(id: string, email: string, funcao: string, alunoCodigo: number | null = null) {
        this.id = id;
        this.email = email;
        this.funcao = funcao;
        this.alunoCodigo = alunoCodigo;
    }

    public isAdministrador(): boolean {
        return this.funcao === 'administrador';
    }
}