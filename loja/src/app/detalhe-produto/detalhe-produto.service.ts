import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalheProduto } from './detalhe-produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalheProdutoService {

  constructor(private http : HttpClient) {}

  public gravar(obj : DetalheProduto){          
    this.http.post<String>("http://localhost:8081/api/produto", obj).subscribe();        
  }
  
  public alterar(obj : DetalheProduto){          
    this.http.put<String>("http://localhost:8081/api/produto", obj).subscribe();        
  }

  public carregar(codigo: number): Observable<DetalheProduto>{
    return this.http.get<DetalheProduto>("http://localhost:8081/api/produto/"+codigo);         
  }

  public listar(): Observable<DetalheProduto[]>{
    return this.http.get<DetalheProduto[]>("http://localhost:8081/api/produto/lista");         
  }

  public remover(codigo: number) {
    return this.http.delete<String>("http://localhost:8081/api/produto/"+codigo).subscribe();    
  }

  public addCarrinho(obj : DetalheProduto){          
    this.http.post<String>("http://localhost:8081/api/cesta", obj).subscribe();        
  }

}