package com.example.insurance.model;

import jakarta.persistence.*;

@Entity
public class Claim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private Long policyId;
    private String status;

    public Claim() {}
    public Claim(Long userId, Long policyId, String status) {
        this.userId = userId; this.policyId = policyId; this.status = status;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public Long getPolicyId() { return policyId; }
    public String getStatus() { return status; }
    public void setUserId(Long userId) { this.userId = userId; }
    public void setPolicyId(Long policyId) { this.policyId = policyId; }
    public void setStatus(String status) { this.status = status; }
}
