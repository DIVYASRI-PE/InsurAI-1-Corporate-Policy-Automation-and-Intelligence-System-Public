package com.insurai.model;

import lombok.Data;

@Data
public class PolicyComparisonResult {
    private String policyName1;
    private String policyName2;
    private double premiumDifference;
    private String coverageDifference;
}
