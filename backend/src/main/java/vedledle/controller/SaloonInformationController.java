package vedledle.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.controller.dto.Breed;
import vedledle.controller.dto.Size;
import vedledle.controller.dto.mapper.DTOMapper;
import vedledle.dao.model.OpeningHours;
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
    public List<Size> getAllSizes() {
        return Arrays.stream(DogSize.values()).map(DTOMapper::toSize).toList();
    }

    /**
     * Retrieves all the dog breeds in a more readable format.
     *
     * @return a list of dog breeds.
     */
    @GetMapping("/breed/dog/all")
    public List<Breed> getAllBreeds() {
        return Arrays.stream(DogBreed.values()).map(DTOMapper::toBreed).toList();
    }

    /**
     * Retrieves all the opening hours in a more readable format.
     *
     * @return a list of opening hours.
     */
    @GetMapping("/openingHours")
    public List<String> getOpeningHours() {
        return Arrays.stream(OpeningHours.values()).map(OpeningHours::toString).toList();
    }
}
