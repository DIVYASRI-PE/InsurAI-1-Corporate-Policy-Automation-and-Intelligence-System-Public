package com.insurai.service;

import com.insurai.entity.Claim;
import com.insurai.entity.User;
import com.insurai.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ClaimService {

    @Autowired
    private ClaimRepository claimRepository;

    public Claim submitClaim(Claim claim) {
        claim.setClaimDate(LocalDateTime.now());
        claim.setStatus(Claim.Status.SUBMITTED);
        return claimRepository.save(claim);
    }

    public List<Claim> getClaimsByUser(User user) {
        return claimRepository.findByUser(user);
    }

    public Claim updateClaimStatus(Claim claim, Claim.Status status) {
        claim.setStatus(status);
        return claimRepository.save(claim);
    }
}
