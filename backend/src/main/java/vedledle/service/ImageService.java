package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vedledle.controller.dto.ImageUploadRequest;
import vedledle.dao.model.Image;
import vedledle.dao.repository.ImageRepository;
import vedledle.exception.ImageNotFoundException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository repository;

    public ResponseEntity<byte[]> getByName(String name) {
        Optional<Image> image = repository.findByName(name);
        if (image.isPresent()) {
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(image.get().getContentType()))
                    .body(image.get().getData());
        } else {
            throw new ImageNotFoundException(name);
        }
    }

    public ResponseEntity<String> upload(ImageUploadRequest request) {
        try {
            MultipartFile imageFile = request.image();
            if (imageFile.isEmpty()) {
                return ResponseEntity.badRequest().body("Image file is empty");
            }
            String contentType = imageFile.getContentType();
            if (contentType == null || (!contentType.equals("image/png") && !contentType.equals("image/jpeg"))) {
                return ResponseEntity.badRequest().body("Unsupported image format.");
            }
            Image image = new Image();
            image.setName(request.name());
            image.setContentType(contentType);
            image.setData(imageFile.getBytes());
            repository.save(image);
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
        }
    }
}
