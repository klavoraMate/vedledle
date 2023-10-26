package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import vedledle.dao.model.Image;
import vedledle.dao.repository.ImageRepository;
import vedledle.exception.ImageNotFoundException;

import java.util.List;
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

    public ResponseEntity<String> upload(@RequestParam("images") Image[] images) {
        try {
            for (Image image : images) {
                String contentType = image.getContentType();
                if (contentType == null || (!contentType.equals("image/png") && !contentType.equals("image/jpeg"))) {
                    return ResponseEntity.badRequest().body("Unsupported image format.");
                }
                repository.save(image);
            }
            return ResponseEntity.ok("Images uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
        }
    }
}
