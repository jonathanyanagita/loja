import { Component } from '@angular/core';
import { VitrineService } from './vitrine.service';
import { Vitrine } from './vitrine.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  
  lista :  Vitrine[] = [];
  mensagem : String = "";
  obj: Vitrine = new Vitrine();
  newdata: any;

  constructor(private vitrine : VitrineService){}

  ngOnInit(){
    this.vitrine.listar().subscribe();         
  }   

  public addCesta(){
    try{
        this.vitrine.gravar(this.obj);
        this.mensagem = "Produto adicionado com sucesso!";           
    }
    catch{
      this.mensagem = "Ocorreu um erro, verifique!";
    }
  }

  public listar(){
    try{
      this.vitrine.listar().subscribe(
        (retorno: Vitrine[]) => {            
          this.lista = retorno;
          this.mensagem = "";
        });
    } catch {
      this.mensagem = "não foi encontrado nenhum registro !";
    }
  }

}