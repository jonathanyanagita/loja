import { Component } from '@angular/core';
import { AddProduto } from './add-produto.model';
import { DetalheProdutoService } from '../detalhe-produto/detalhe-produto.service';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {
  mensagem : string = "";
  obj: DetalheProduto = new DetalheProduto();

  constructor(private detalheProduto: DetalheProdutoService) {}

  public addProduto(){
    try{
      if(this.obj.codigo==0){
        this.detalheProduto.gravar(this.obj);
        this.mensagem = "Produto adicionado com sucesso!";
      }  else {
        this.detalheProduto.alterar(this.obj);
        this.mensagem = "Produto alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }


  public delProduto(){
    try{
      this.detalheProduto.remover(this.obj.codigo);
      this.mensagem = "registro removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }


}
