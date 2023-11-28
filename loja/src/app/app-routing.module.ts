import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AddProdutoComponent } from './add-produto/add-produto.component';

const routes: Routes = [
  {path:'cesta-compras', component:CestaComprasComponent},
  {path:'detalhe-produto', component:DetalheProdutoComponent},
  {path:'login', component:LoginComponent},
  {path:'pesquisa', component:PesquisaComponent},
  {path:'reenvio-senha', component:ReenvioSenhaComponent},
  {path:'vitrine', component:VitrineComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'addProduto', component:AddProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
