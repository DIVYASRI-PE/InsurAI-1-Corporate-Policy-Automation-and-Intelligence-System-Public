package com.insurai.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "policies")
public class Policy {
    @Id private String id;
    private String name;
    private String type;
    private int duration;
    private double premium;
    private Double maturityAmount;
}
