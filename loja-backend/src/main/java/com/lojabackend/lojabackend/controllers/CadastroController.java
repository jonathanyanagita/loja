package com.lojabackend.lojabackend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lojabackend.lojabackend.models.CadastroEntity;
import com.lojabackend.lojabackend.repository.CadastroRepository;
 
@RestController
@CrossOrigin("*")
public class CadastroController {

    @Autowired
    CadastroRepository repository;

    @Autowired 
    JavaMailSender mailSender;

    @PostMapping("/api/cadastro")
    public ResponseEntity<String> inserir(@RequestBody CadastroEntity obj){
        repository.save(obj);
        String mensagem = "cadastro adicionado com sucesso";
        return ResponseEntity.ok(mensagem);        
    }

    @PutMapping("/api/cadastro")
    public ResponseEntity<String> alterar(@RequestBody CadastroEntity obj){
        repository.save(obj);
        String mensagem = "cadastro atualizados";
        return ResponseEntity.ok(mensagem);        
    }    

    @GetMapping("/api/cadastro/{codigo}")
    public ResponseEntity<CadastroEntity> carregar(@PathVariable long codigo){
        Optional<CadastroEntity> obj = repository.findById(codigo);
        if(obj.isPresent())    
            return ResponseEntity.ok(obj.get());
        else
            return ResponseEntity.ok(new CadastroEntity()); 
    }

    // @GetMapping("/api/produto/lista")
    // public ResponseEntity<List<ProdutoEntity>> lista(@PathVariable long produto){
    //     List<ProdutoEntity> lista = repository.findAll();
    //     return ResponseEntity.ok(lista);
    // }

    @GetMapping("/api/cadastro/lista")
    public ResponseEntity<List<CadastroEntity>> lista (){
        return ResponseEntity.ok(repository.findAll());
    }
    
    @DeleteMapping("/api/cadastro/{codigo}")
    public ResponseEntity<String> remover(@PathVariable long codigo){
        repository.deleteById(codigo);
        String mensagem = "cadastro excluido";
        return ResponseEntity.ok(mensagem);    
    }

    @PostMapping("/api/cadastro/login")
    public ResponseEntity<CadastroEntity> fazerLogin(@RequestBody CadastroEntity obj){
        Optional<CadastroEntity> retorno = 
            repository.fazerLogin(obj.getEmail(),obj.getSenha());                
        if(retorno.isPresent()){
            return ResponseEntity.ok(retorno.get());
        } else {
            return ResponseEntity.ok(new CadastroEntity());
        }         
    }

    // @PostMapping("/api/cadastro/faleConosco")
    // public ResponseEntity<String> faleConosco(@RequestBody ModeloEmail obj){
        
    //     String retorno = "";
    //     SimpleMailMessage novoEmail = new SimpleMailMessage();
        
    //     novoEmail.setSubject(obj.getAssunto());
    //     novoEmail.setText(obj.getMensagem());
    //     novoEmail.setFrom("fatecipiranga2023@outlook.com");
    //     novoEmail.setTo(obj.getPara());
    //     novoEmail.setCc("fatecipiranga2023@outlook.com");
    //     try{
    //         mailSender.send(novoEmail);
    //         retorno = "email enviado com sucesso";
    //     }
    //     catch(Exception err){
    //         retorno = "Ocorreu um erro no envio do email "+err.getMessage();
    //     } finally{
    //         return ResponseEntity.ok(retorno);
    //     }
 
}