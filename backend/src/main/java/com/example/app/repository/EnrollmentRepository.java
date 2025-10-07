package com.insurai.repository;

import com.insurai.entity.Enrollment;
import com.insurai.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    List<Enrollment> findByUser(User user);
}
