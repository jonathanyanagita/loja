import { Component } from '@angular/core';
import { CestaCompras } from './cesta-compras.model';
import { CestaComprasService } from './cesta-compras.service';

@Component({
  selector: 'app-cesta-compras',
  templateUrl: './cesta-compras.component.html',
  styleUrls: ['./cesta-compras.component.css']
})
export class CestaComprasComponent {

  lista :  CestaCompras[] = [];
  mensagem : String = "";
  obj: CestaCompras = new CestaCompras();

  constructor(private cestaCompras : CestaComprasService){}

  public listar(){
    try{
      this.cestaCompras.listar().subscribe(
        (retorno: CestaCompras[]) => {            
          this.lista = retorno;
          this.mensagem = "";
        });
    } catch {
      this.mensagem = "não foi encontrado nenhum registro !";
    }
  }

  public limparCarrinho(){
    try{
      this.cestaCompras.limparCarrinho(this.obj);
      this.mensagem = "registro removido com sucesso!";
    } 
    catch{
      this.mensagem = "Ocorreu um erro durante o processo!";
    }     
  }

}
