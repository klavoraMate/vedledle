package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vedledle.dao.model.Image;
import vedledle.service.ImageService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService service;

    @GetMapping("/names")
    public List<String> getAllImageNames() {
        return service.getAllImageNames();
    }

    @GetMapping("")
    public ResponseEntity<byte[]> getImageByName(@RequestParam String name) {
        return service.getByName(name);
    }

    @PostMapping("")
    public ResponseEntity<String> upload(MultipartFile[] images) {
        return service.upload(images);
    }

    @DeleteMapping("")
    public ResponseEntity<String> delete(@RequestParam String name) {
        return service.delete(name);
    }

}
