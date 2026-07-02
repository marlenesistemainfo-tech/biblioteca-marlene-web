import { AuthService } from './services/AuthService';

async function testarLogin() {
    console.log("Iniciando tentativa de login...");
    
    const auth = new AuthService();
    
    // Substitua "SENHA_QUE_VOCE_CRIOU" pela senha real que você colocou lá no Supabase!
    const token = await auth.login('professormamute@gmail.com', 'Mutec4g8t!@#');
    
    if (token) {
        console.log("Sucesso! Login aprovado.");
        console.log("Aqui está o seu crachá de segurança (Token JWT):");
        // Imprimindo só os primeiros 40 caracteres para não poluir a tela inteira
        console.log(token.substring(0, 40) + "..."); 
    } else {
        console.log("Acesso Negado.");
    }
}

testarLogin();