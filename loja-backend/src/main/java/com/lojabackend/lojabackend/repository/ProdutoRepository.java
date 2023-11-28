package com.lojabackend.lojabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.lojabackend.lojabackend.models.ProdutoEntity;

public interface ProdutoRepository extends JpaRepository<ProdutoEntity,Long>, JpaSpecificationExecutor<ProdutoEntity> {
    
    
}
