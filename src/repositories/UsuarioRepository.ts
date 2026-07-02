import { supabase } from '../supabaseClient';
import { Usuario } from '../entities/Usuario';

export class UsuarioRepository {
    public async buscarTodos(): Promise<Usuario[]> {
        const { data, error } = await supabase
            .from('usuarios')
            .select('*');

        if (error) {
            console.error("Erro ao buscar usuários do Supabase:", error.message);
            return [];
        }

        if (data) {
            return data.map(item => new Usuario(
                item.id, 
                item.email, 
                item.funcao, 
                item.alunoCodigo
            ));
        }

        return [];
    }
}