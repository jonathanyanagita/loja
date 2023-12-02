import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { CadastroService } from '../cadastro/cadastro.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensagem: String = "";
  obj : Cadastro = new Cadastro();
  nomeUsuario: String = "";
  lista :  Cadastro[] = [];

  constructor(private service: CadastroService){ }

  ngOnInit(){
    this.listar();
    let nome = localStorage.getItem("nomeCliente");
    if(nome!=null) this.nomeUsuario = "Ola, "+ nome ;
  }

  public listar(){
    try{
      this.service.listar().subscribe(
        (retorno: Cadastro[]) => {            
          this.lista = retorno;
          this.mensagem = "";
        });
    } catch {
      this.mensagem = "não foi encontrado nenhum registro !";
    }
  }
  

  fazerLogin(){
    try{
        this.service.login(this.obj).subscribe(
          (retorno: Cadastro) => {      
              if(retorno.nome==null){
                this.mensagem = "email ou senha invalidos!!!";  
              }  else {
                localStorage.setItem("nomeUsuario", retorno.nome);  
                localStorage.setItem("cadastro", JSON.stringify(retorno));
                window.location.href = "./lista";
              }   
          });
    }
    catch{
      this.mensagem = "Ocorreu um erro volte mais tarde!";
    }
  }

  fazerLogoff(){
    localStorage.clear();  
    this.nomeUsuario="";
    window.location.href="./login";
  }

}
