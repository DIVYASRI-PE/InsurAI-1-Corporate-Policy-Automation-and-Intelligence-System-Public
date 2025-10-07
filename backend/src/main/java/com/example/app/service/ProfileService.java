package com.insurai.service;

import com.insurai.entity.EmployeeProfile;
import com.insurai.entity.User;
import com.insurai.repository.EmployeeProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private EmployeeProfileRepository profileRepository;

    public EmployeeProfile getProfile(User user) {
        return profileRepository.findByUser(user).orElse(null);
    }

    public EmployeeProfile updateProfile(EmployeeProfile profile) {
        return profileRepository.save(profile);
    }
}
