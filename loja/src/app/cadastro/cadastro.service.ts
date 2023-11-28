import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http : HttpClient) {}

  public gravar(obj : Cadastro){          
    this.http.post<String>("http://localhost:8081/api/cadastro", obj).subscribe();        
  }
  
  public alterar(obj : Cadastro){          
    this.http.put<String>("http://localhost:8081/api/cadatro", obj).subscribe();        
  }

  public carregar(codigo: number): Observable<Cadastro>{
    return this.http.get<Cadastro>("http://localhost:8081/api/cliente/"+codigo);         
  }

  public listar(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>("http://localhost:8081/api/cliente/lista");         
  }

  public login(obj: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>("http://localhost:8081/api/cliente/login", obj);         
  }

}
