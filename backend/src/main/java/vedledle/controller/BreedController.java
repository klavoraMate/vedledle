package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.animalProperties.DogBreed;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/breed")
public class BreedController {

    @GetMapping("/dog/all")
    public List<String> getAll(){
        return Arrays.stream(DogBreed.values()).map(DogBreed::toString).toList();
    }
}
