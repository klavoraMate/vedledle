package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vedledle.controller.dto.ImageUploadRequest;
import vedledle.dao.model.Image;
import vedledle.service.ImageService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService service;

    @GetMapping("/search/{name}")
    public ResponseEntity<byte[]> getImageByName(@PathVariable String name){
        return service.getByName(name);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload(ImageUploadRequest request){
        return service.upload(request);
    }
}
