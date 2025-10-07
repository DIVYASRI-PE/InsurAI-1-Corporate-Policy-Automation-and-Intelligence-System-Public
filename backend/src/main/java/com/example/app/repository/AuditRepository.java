package com.insurai.repository;

import com.insurai.entity.AuditTrail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuditRepository extends JpaRepository<AuditTrail, Long> {
}
