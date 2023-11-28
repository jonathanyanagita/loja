import { Component } from '@angular/core';
import { Cadastro } from '../cadastro/cadastro.model';
import { CadastroService } from '../cadastro/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensagem: String = "";
  obj : Cadastro = new Cadastro();

  constructor(private service:CadastroService ){ }

  fazerLogin(){
    try{
        this.service.login(this.obj).subscribe(
          (retorno: Cadastro) => {      
              if(retorno.nome==null){
                this.mensagem = "email ou senha invalidos!!!";  
              }  else {
                localStorage.setItem("nomeCadastro", retorno.nome);  
                localStorage.setItem("cadastro", JSON.stringify(retorno));
                window.location.href = "./lista";
              }   
          });
    }
    catch{
      this.mensagem = "Ocorreu um erro volte mais tarde!";
    }
  }

}
