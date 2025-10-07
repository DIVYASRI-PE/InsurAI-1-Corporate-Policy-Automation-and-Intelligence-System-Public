package com.insurai.model;

import lombok.Data;

@Data
public class ClaimValidationResult {
    private boolean isValid;
    private String reason;
}
