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

import com.lojabackend.lojabackend.models.PedidoEntity;
 
@RestController
@CrossOrigin("origin = *")
public class PedidoController {

    @PostMapping("/api/pedido")
    public ResponseEntity<String> inserir(@RequestBody PedidoEntity obj){
        String mensagem = "pedido adicionado com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/pedido")
    public ResponseEntity<String> alterar(@RequestBody PedidoEntity obj){
        String mensagem = "detalhes do pedido atualizados";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/pedido/{codigo}")
    public ResponseEntity<PedidoEntity> carregar(@PathVariable int codigo){
        PedidoEntity obj = new PedidoEntity();    
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/api/pedido/lista")
    public ResponseEntity<List<PedidoEntity>> lista(@PathVariable int cliente){
        List<PedidoEntity> lista = new ArrayList<PedidoEntity>();
        return ResponseEntity.ok(lista);
    }
    
    @DeleteMapping("/api/pedido/{codigo}")
    public ResponseEntity<String> remover(@PathVariable int codigo){
        String mensagem = "pedido excluido";
        return ResponseEntity.ok(mensagem);    
    }
 
}