export class Login {

    codigo: number = 0;
    email: string = "";
    senha: string = "";
    
    constructor(obj?:Login){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.email = obj.email;
            this.senha = obj.senha;            
        }
    }

}
