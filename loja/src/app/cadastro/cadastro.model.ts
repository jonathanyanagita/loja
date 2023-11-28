export class Cadastro {

    codigo: number = 0;
    nome: string = "";
    email: string = "";
    cpf: string = "";
    telefone: string = "";
    senha: string = "";
    
    constructor(obj?:Cadastro){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.nome = obj.nome;
            this.email = obj.email;
            this.cpf = obj.cpf;
            this.telefone = obj.telefone;
            this.senha = obj.senha;
            
        }
    }
}