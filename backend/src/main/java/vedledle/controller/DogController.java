package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import vedledle.dao.model.Dog;
import vedledle.exception.DogAlreadyExistException;
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
    @GetMapping("")
    @PreAuthorize("@securityService.canAccessDog(#name)")
    public Dog get(@RequestParam String name){
        return service.get(name);
    }


    @PostMapping("")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public void addDog(@RequestParam String email,@RequestBody Dog newDog){
            service.addDog(email,newDog);
    }

}
