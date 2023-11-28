import { Component } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  mensagem : string = "";
  obj: Cadastro = new Cadastro();
  lista: Cadastro[] = [];
  
  constructor(private cadastroService: CadastroService) {}

  public mostrar(){
    this.mensagem = "Registro gravado com sucesso!";
    let cadastroAux : Cadastro = new Cadastro(this.obj);    
    this.lista.push(cadastroAux);
    window.localStorage.setItem('listaCliente', JSON.stringify(this.lista));
  }

  public gravar(){
    try{
      if(this.obj.codigo==0){
        this.cadastroService.gravar(this.obj);
        this.mensagem = "Cliente gravado com sucesso!";
      }  else {
        this.cadastroService.alterar(this.obj);
        this.mensagem = "Cliente alterado com sucesso!";
      }      
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public pesquisar(){
    this.mensagem = "";
    try{      
      this.cadastroService.carregar(this.obj.codigo).subscribe(
        (retorno: Cadastro) => {            
          this.obj.email = retorno.email;
          this.obj.nome = retorno.nome;
          this.obj.senha = retorno.senha;
          this.obj.telefone = retorno.telefone;
          if(retorno.nome==null)  this.mensagem = "Registro não encontrado!";          
        });
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

}