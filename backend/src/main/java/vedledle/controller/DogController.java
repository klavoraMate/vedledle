package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Dog;
import vedledle.service.DogService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dog")
public class DogController {
    private final DogService service;
    @GetMapping("/{name}")
    public Dog get(@PathVariable String name){
        return service.get(name);
    }
}
