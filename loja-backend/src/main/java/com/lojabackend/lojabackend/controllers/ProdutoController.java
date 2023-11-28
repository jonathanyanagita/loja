package com.lojabackend.lojabackend.controllers;

import java.util.ArrayList;
import java.util.List;
 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lojabackend.lojabackend.models.ProdutoEntity;
 
@RestController
@CrossOrigin("origin = *")
public class ProdutoController {

    @PostMapping("/api/produto")
    public ResponseEntity<String> inserir(@RequestBody ProdutoEntity obj){
        String mensagem = "produto adicionado com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/produto")
    public ResponseEntity<String> alterar(@RequestBody ProdutoEntity obj){
        String mensagem = "detalhes do produto atualizados";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/produto/{codigo}")
    public ResponseEntity<ProdutoEntity> carregar(@PathVariable int codigo){
        ProdutoEntity obj = new ProdutoEntity();    
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/api/produto/lista")
    public ResponseEntity<List<ProdutoEntity>> lista(@PathVariable int cliente){
        List<ProdutoEntity> lista = new ArrayList<ProdutoEntity>();
        return ResponseEntity.ok(lista);
    }
    
    @DeleteMapping("/api/produto/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "produto excluido";
        return ResponseEntity.ok(mensagem);    
    }
 
}