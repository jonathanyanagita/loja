package com.lojabackend.lojabackend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.lojabackend.lojabackend.repository.ProdutoRepository;
 
@RestController
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    ProdutoRepository repository;

    @PostMapping("/api/produto")
    public ResponseEntity<String> inserir(@RequestBody ProdutoEntity obj){
        repository.save(obj);
        String mensagem = "produto adicionado com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/produto")
    public ResponseEntity<String> alterar(@RequestBody ProdutoEntity obj){
        repository.save(obj);
        String mensagem = "detalhes do produto atualizados";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/produto/{codigo}")
    public ResponseEntity<ProdutoEntity> carregar(@PathVariable long codigo){
        Optional<ProdutoEntity> obj = repository.findById(codigo);
        if(obj.isPresent())    
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.ok(new ProdutoEntity()); 
    }

    // @GetMapping("/api/produto/lista")
    // public ResponseEntity<List<ProdutoEntity>> lista(@PathVariable long produto){
    //     List<ProdutoEntity> lista = repository.findAll();
    //     return ResponseEntity.ok(lista);
    // }

    @GetMapping("/api/produto/lista")
    public ResponseEntity<List<ProdutoEntity>> lista (){
        return ResponseEntity.ok(repository.findAll());
    }
    
    @DeleteMapping("/api/produto/{codigo}")
    public ResponseEntity<String> remover(@PathVariable long codigo){
        repository.deleteById(codigo);
        String mensagem = "produto excluido";
        return ResponseEntity.ok(mensagem);    
    }
 
}