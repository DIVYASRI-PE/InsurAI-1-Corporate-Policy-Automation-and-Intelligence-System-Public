package com.example.insurance.model;

import jakarta.persistence.*;

@Entity
public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private double premium;

    public Policy() {}
    public Policy(String name, String type, double premium) {
        this.name = name; this.type = type; this.premium = premium;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getType() { return type; }
    public double getPremium() { return premium; }
    public void setName(String name) { this.name = name; }
    public void setType(String type) { this.type = type; }
    public void setPremium(double premium) { this.premium = premium; }
}
