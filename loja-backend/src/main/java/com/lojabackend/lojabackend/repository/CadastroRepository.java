package com.lojabackend.lojabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.lojabackend.lojabackend.models.CadastroEntity;

public interface CadastroRepository extends JpaRepository<CadastroEntity,Long>, JpaSpecificationExecutor<CadastroEntity> {
    
    
}
