package com.lojabackend.lojabackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.lojabackend.lojabackend.models.CadastroEntity;

public interface CadastroRepository extends JpaRepository<CadastroEntity,Long>, JpaSpecificationExecutor<CadastroEntity> {    
    
    @Query(value = "select * from cliente where email=?1 and senha=?2 ",nativeQuery = true)
   Optional<CadastroEntity> fazerLogin(String email, String senha);

}
