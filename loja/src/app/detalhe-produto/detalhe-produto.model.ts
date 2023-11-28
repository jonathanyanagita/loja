export class DetalheProduto {

    codigo: number = 0;
    titulo: string = "";
    artista: string = "";
    img: string = "";
    preco: number = 0;
    quantidade: number = 0;
    detalhe: string = "";
    sobre: string = "";
    palavraChave: string = "";
    
    constructor(obj?:DetalheProduto){
        if(obj!=undefined){
            this.codigo = obj.codigo;
            this.titulo = obj.titulo;
            this.artista = obj.artista;
            this.img = obj.img;
            this.preco = obj.preco;
            this.quantidade = obj.quantidade;
            this.detalhe = obj.detalhe;
            this.sobre = obj.sobre;
            this.palavraChave = obj.palavraChave;            
        }

    }

}
