package com.insurai.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "claims")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Claim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "policy_id")
    private Policy policy;

    private Double claimAmount;
    private LocalDateTime claimDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToMany(mappedBy = "claim", cascade = CascadeType.ALL)
    private List<Document> documents;

    public enum Status {
        SUBMITTED, APPROVED, REJECTED, PAID
    }
}
