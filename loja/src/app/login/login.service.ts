import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { Cadastro } from '../cadastro/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public login(obj: Login): Observable<Login>{
    return this.http.post<Login> ("http://localhost:8081/api/cadastro/login", obj);         
  }

  public listar(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>("http://localhost:8081/api/cliente/lista");         
  }
}
