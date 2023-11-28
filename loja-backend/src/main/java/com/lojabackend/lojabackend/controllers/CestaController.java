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

import com.lojabackend.lojabackend.models.CestaEntity;
 
@RestController
@CrossOrigin("origin = *")
public class CestaController {

    @PostMapping("/api/cesta")
    public ResponseEntity<String> inserir(@RequestBody CestaEntity obj){
        String mensagem = "cesta criada com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/cesta")
    public ResponseEntity<String> alterar(@RequestBody CestaEntity obj){
        String mensagem = "cesta atualizada";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/cesta/{codigo}")
    public ResponseEntity<CestaEntity> carregar(@PathVariable int codigo){
        CestaEntity obj = new CestaEntity();    
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/api/cesta/lista")
    public ResponseEntity<List<CestaEntity>> lista(@PathVariable int cliente){
        List<CestaEntity> lista = new ArrayList<CestaEntity>();
        return ResponseEntity.ok(lista);
    }
    
    @DeleteMapping("/api/cesta/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "cesta excluida";
        return ResponseEntity.ok(mensagem);    
    }
    
}
