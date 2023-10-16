package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Image;
import vedledle.service.ImageService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService service;

    @GetMapping("/{name}")
    public Image getImageByName(@PathVariable String name){
        return service.getByName(name);
    }
}
