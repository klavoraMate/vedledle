package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.animalProperties.DogSize;

import java.util.Arrays;
import java.util.List;

/**
 * The {@code SizeController} class handles HTTP requests related to size operations.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequestMapping("/api/size/")
public class SizeController {
    /**
     * Retrieves all the dog sizes in a more readable format.
     *
     * @return a list of dog sizes.
     */
    @GetMapping("/dog/all")
    public List<String> getAll(){
        return Arrays.stream(DogSize.values()).map(DogSize::toString).toList();
    }
}
