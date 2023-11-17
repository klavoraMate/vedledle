package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Dog;
import vedledle.service.DogService;

/**
 * The {@code DogController} class handles HTTP requests related to dog operations.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dog")
public class DogController {
    /**
     * The service responsible for handling dog-related operations.
     */
    private final DogService service;

    /**
     * Retrieves a dog by its name.
     *
     * @param name The name of the dog to retrieve.
     * @return The dog with the specified name.
     */
    @GetMapping("/")
    public Dog get(@RequestParam String name){
        return service.get(name);
    }
}
