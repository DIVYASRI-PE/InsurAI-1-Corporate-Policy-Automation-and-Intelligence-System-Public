package com.insurai.util;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Component
public class FileStorageUtil {

    private final String uploadDir = "uploads/";

    public String storeFile(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Files.createDirectories(Paths.get(uploadDir));
        file.transferTo(new File(uploadDir + fileName));
        return fileName;
    }

    public byte[] getFile(String fileName) throws IOException {
        return Files.readAllBytes(Paths.get(uploadDir + fileName));
    }
}
