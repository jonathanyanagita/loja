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

import com.lojabackend.lojabackend.models.CadastroEntity;
 
@RestController
@CrossOrigin("origin = *")
public class CadastroController {

    @PostMapping("/api/cadastro")
    public ResponseEntity<String> inserir(@RequestBody CadastroEntity obj){
        String mensagem = "cadastro efetuado com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/cadastro")
    public ResponseEntity<String> alterar(@RequestBody CadastroEntity obj){
        String mensagem = "cadastro atualizado";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/cadastro/{codigo}")
    public ResponseEntity<CadastroEntity> carregar(@PathVariable int codigo){
        CadastroEntity obj = new CadastroEntity();    
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/api/cadastro/lista")
    public ResponseEntity<List<CadastroEntity>> lista(@PathVariable int cliente){
        List<CadastroEntity> lista = new ArrayList<CadastroEntity>();
        return ResponseEntity.ok(lista);
    }
    
    @DeleteMapping("/api/cadastro/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "cadastro excluido";
        return ResponseEntity.ok(mensagem);    
    }
 
}