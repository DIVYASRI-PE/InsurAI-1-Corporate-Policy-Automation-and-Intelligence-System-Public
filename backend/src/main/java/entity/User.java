package com.insurai.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role; // EMPLOYEE, MANAGER, ADMIN

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public enum Role {
        EMPLOYEE, MANAGER, ADMIN
    }
}
