package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.animalProperties.DogBreed;

import java.util.Arrays;
import java.util.List;

/**
 * The {@code BreedController} class handles HTTP requests related to breed operations.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequestMapping("/api/breed")
public class BreedController {

    /**
     * Retrieves all the dog breeds in a more readable format.
     *
     * @return a list of dog breeds.
     */
    @GetMapping("/dog/all")
    public List<String> getAll() {
        return Arrays.stream(DogBreed.values()).map(DogBreed::toString).toList();
    }
}
