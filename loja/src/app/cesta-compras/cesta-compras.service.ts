import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CestaCompras } from './cesta-compras.model';

@Injectable({
  providedIn: 'root'
})
export class CestaComprasService {

  constructor(private http: HttpClient) { }

  public listar(): Observable<CestaCompras[]>{
    return this.http.get<CestaCompras[]>("http://localhost:8081/api/cesta/lista");         
  }

  public limparCarrinho(obj: CestaCompras) {
    return this.http.delete<CestaCompras[]>("http://localhost:8081/api/cesta").subscribe();    
  }
}
