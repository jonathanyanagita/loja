import { Component } from '@angular/core';
import { DetalheProduto } from './detalhe-produto.model';
import { DetalheProdutoService } from './detalhe-produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {

  mensagem: string = "";
  obj: DetalheProduto = new DetalheProduto();

  constructor(private detalheProduto: DetalheProdutoService,
    private rotas: ActivatedRoute) { }

  public gravar() {
    try {
      if (this.obj.codigo == 0) {
        this.detalheProduto.gravar(this.obj);
        this.mensagem = "Produto adicionado com sucesso!";
      } else {
        this.detalheProduto.alterar(this.obj);
        this.mensagem = "Produto alterado com sucesso!";
      }
    }
    catch {
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public addCarrinho() {
    try {
      this.detalheProduto.addCarrinho(this.obj);
      this.mensagem = "Produto adicionado ao carrinho de compras!";
    }
    catch {
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

}
