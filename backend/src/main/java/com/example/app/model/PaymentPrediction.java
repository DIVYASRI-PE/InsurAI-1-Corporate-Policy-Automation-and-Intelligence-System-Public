package com.insurai.model;

import lombok.Data;

@Data
public class PaymentPrediction {
    private String policyName;
    private double predictedAmount;
    private String predictionDate;
}
