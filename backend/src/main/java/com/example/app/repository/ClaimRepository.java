package com.insurai.repository;

import com.insurai.entity.Claim;
import com.insurai.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClaimRepository extends JpaRepository<Claim, Long> {
    List<Claim> findByUser(User user);
}
