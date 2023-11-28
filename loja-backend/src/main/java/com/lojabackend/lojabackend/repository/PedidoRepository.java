package com.lojabackend.lojabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.lojabackend.lojabackend.models.PedidoEntity;


public interface PedidoRepository extends JpaRepository<PedidoEntity,Long>, JpaSpecificationExecutor<PedidoEntity> {
    
    
}
