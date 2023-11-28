package com.lojabackend.lojabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.lojabackend.lojabackend.models.CestaEntity;

public interface CestaRepository extends JpaRepository<CestaEntity,Long>, JpaSpecificationExecutor<CestaEntity> {
    
    
}
