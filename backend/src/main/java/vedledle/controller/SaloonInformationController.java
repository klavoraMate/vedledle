package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.animalProperties.DogBreed;
import vedledle.dao.model.animalProperties.DogSize;

import java.util.Arrays;
import java.util.List;

/**
 * The {@code SaloonInformationController} class handles HTTP requests related to information about the saloon.
 * Such as available dog sizes, breeds, opening and closing hours, etc.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequestMapping("/api/saloon")
public class SaloonInformationController {
    /**
     * Retrieves all the dog sizes in a more readable format.
     *
     * @return a list of dog sizes.
     */
    @GetMapping("/size/dog/all")
    public List<String> getAllSizes(){
        return Arrays.stream(DogSize.values()).map(DogSize::toString).toList();
    }

    /**
     * Retrieves all the dog breeds in a more readable format.
     *
     * @return a list of dog breeds.
     */
    @GetMapping("/breed/dog/all")
    public List<String> getAllBreeds() {
        return Arrays.stream(DogBreed.values()).map(DogBreed::toString).toList();
    }
}
