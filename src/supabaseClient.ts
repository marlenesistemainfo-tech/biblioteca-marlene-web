import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Isso abre o "cofre" (.env) e carrega as senhas para o sistema
dotenv.config();

// Pegamos as chaves de forma segura através do process.env
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

// Se as chaves não forem encontradas, o sistema avisa na hora
if (!supabaseUrl || !supabaseKey) {
    throw new Error("ATENÇÃO: As chaves do Supabase não foram encontradas no arquivo .env!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);