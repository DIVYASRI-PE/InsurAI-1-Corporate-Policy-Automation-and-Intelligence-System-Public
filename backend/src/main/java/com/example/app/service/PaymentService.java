package com.insurai.service;

import com.insurai.entity.Payment;
import com.insurai.entity.User;
import com.insurai.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment makePayment(Payment payment) {
        payment.setPaymentDate(LocalDateTime.now());
        payment.setStatus(Payment.Status.PENDING);
        return paymentRepository.save(payment);
    }

    public List<Payment> getPaymentsByUser(User user) {
        return paymentRepository.findByUser(user);
    }

    public Payment updatePaymentStatus(Payment payment, Payment.Status status) {
        payment.setStatus(status);
        return paymentRepository.save(payment);
    }
}
