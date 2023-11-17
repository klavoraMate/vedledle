package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import vedledle.dao.model.Image;
import vedledle.dao.repository.ImageRepository;
import vedledle.exception.ImageNotFoundException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * The {@code ImageService} class provides services related to image operations in the application.
 * It interacts with the {@link ImageRepository} to perform various tasks.
 */
@Service
@RequiredArgsConstructor
public class ImageService {
    /**
     * The repository for accessing and managing image data.
     */
    private final ImageRepository repository;

    /**
     * Retrieves the names of all stored images.
     *
     * @return The list of image names.
     */
    public List<String> getAllImageNames() {
        return repository.findNameBy();
    }

    /**
     * Retrieves an image by its name and returns it as a byte array.
     *
     * @param name The name of the image to retrieve.
     * @return The {@link ResponseEntity} containing the image data and content type.
     * @throws ImageNotFoundException If no image is found with the given name.
     */
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

    /**
     * Uploads one or more images to the server.
     *
     * @param images The array of {@link MultipartFile} representing the images to upload.
     * @return The {@link ResponseEntity} indicating the success or failure of the upload.
     */
    public ResponseEntity<String> upload(@RequestParam("images") MultipartFile[] images) {

        try {
            for (MultipartFile image : images) {
                String contentType = image.getContentType();
                if (contentType == null || (!contentType.equals("image/png") && !contentType.equals("image/jpeg"))) {
                    return ResponseEntity.badRequest().body("Unsupported image format.");
                }
                Image imageEntity = new Image();
                imageEntity.setContentType(contentType);
                imageEntity.setName(Objects.requireNonNull(image.getOriginalFilename()).split("\\.")[0]);
                imageEntity.setData(image.getBytes());
                repository.save(imageEntity);
            }
            return ResponseEntity.ok("Images uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Image upload failed: " + e.getMessage());
        }
    }

    /**
     * Deletes an image by its name.
     *
     * @param name The name of the image to delete.
     * @return The {@link ResponseEntity} indicating the success or failure of the deletion.
     */
    public ResponseEntity<String> delete(String name) {
        try {
            Optional<Image> image = repository.findByName(name);
            if (image.isPresent()) {
                repository.delete(image.get());
                return ResponseEntity.ok("Image " + name + " deleted successfully");
            } else {
                throw new ImageNotFoundException(name);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Image deletion failed: " + e.getMessage());
        }
    }
}
