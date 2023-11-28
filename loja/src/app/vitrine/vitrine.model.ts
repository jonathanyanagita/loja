export class Vitrine {

    codigo: number = 0;
    titulo: string = "";
    img: string = "";
    preco: number = 0;
    
    constructor(obj?:Vitrine){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.titulo = obj.titulo;
            this.img = obj.img;
            this.preco = obj.preco;        
        }

    }
}
