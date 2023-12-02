import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vitrine } from './vitrine.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VitrineService {

  constructor(private http: HttpClient) { }

   public listar(): Observable<Vitrine[]>{
     return this.http.get<Vitrine[]>("http://localhost:8081/api/produto/lista");         
   }

  public gravar(obj : Vitrine){          
    this.http.post<String>("http://localhost:8081/api/cliente", obj).subscribe();        
  }

}
