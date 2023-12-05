package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vedledle.service.ImageService;

import java.util.List;

/**
 * The {@code ImageController} class handles HTTP requests related to image operations.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {
    /**
     * The service responsible for handling image-related operations.
     */
    private final ImageService service;

    /**
     * Retrieves the names of all stored images.
     *
     * @return The list of image names.
     */
    @GetMapping("/names")
    public List<String> getAllImageNames() {
        return service.getAllImageNames();
    }

    /**
     * Retrieves an image by its name.
     *
     * @param name The name of the image to retrieve.
     * @return The image data and content type wrapped in a {@link ResponseEntity}.
     */
    @GetMapping("")
    public ResponseEntity<byte[]> getImageByName(@RequestParam String name) {
        return service.getByName(name);
    }

    /**
     * Uploads one or more images to the server.
     *
     * @param images The array of {@link MultipartFile} representing the images to upload.
     * @return The result of the image upload operation wrapped in a {@link ResponseEntity}.
     */
    @PostMapping("")
    public ResponseEntity<String> upload(@RequestParam("images") MultipartFile[] images) {
        return service.add(images);
    }

    /**
     * Deletes an image by its name.
     *
     * @param name The name of the image to delete.
     * @return The result of the image deletion operation wrapped in a {@link ResponseEntity}.
     */
    @DeleteMapping("")
    public ResponseEntity<String> delete(@RequestParam String name) {
        return service.delete(name);
    }

}
