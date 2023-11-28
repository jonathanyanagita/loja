import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddProdutoComponent } from './add-produto/add-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    DetalheProdutoComponent,
    CestaComprasComponent,
    LoginComponent,
    PesquisaComponent,
    ReenvioSenhaComponent,
    CadastroComponent,
    AddProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }