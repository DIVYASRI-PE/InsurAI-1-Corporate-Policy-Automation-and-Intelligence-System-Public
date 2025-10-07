package com.insurai.service;

import com.insurai.entity.Document;
import com.insurai.entity.User;
import com.insurai.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    public Document uploadDocument(Document document) {
        document.setUploadedAt(LocalDateTime.now());
        return documentRepository.save(document);
    }

    public List<Document> getDocumentsByUser(User user) {
        return documentRepository.findByUser(user);
    }
}
