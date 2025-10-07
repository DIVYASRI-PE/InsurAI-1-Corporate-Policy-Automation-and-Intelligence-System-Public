package com.insurai.service;

import org.springframework.stereotype.Service;

@Service
public class ComplianceService {

    public String getComplianceReports() {
        return "Compliance reports fetched";
    }

    public String logComplianceAction(String action) {
        return "Logged compliance action: " + action;
    }
}
