package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.animalProperties.DogSize;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/size/")
public class SizeController {
    @GetMapping("/dog/all")
    public List<String> getAll(){
        return Arrays.stream(DogSize.values()).map(DogSize::toString).toList();
    }
}
