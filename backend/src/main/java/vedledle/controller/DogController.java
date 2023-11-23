package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
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
     * Fetches information about a dog based on its name. To execute this operation,
     * the authenticated user needs to either own the requested dog or have an admin role.
     *
     * @param name The name of the dog to retrieve.
     * @return The dog with the specified name.
     */
    @GetMapping("")
    @PreAuthorize("@securityService.canAccessDog(#name)")
    public Dog get(@RequestParam String name) {
        return service.get(name);
    }


    /**
     * Adds a new dog. The authenticated user must either be the same as the
     * specified email or have an admin role to perform this operation.
     *
     * @param email  The email associated with the authenticated user.
     * @param newDog The {@link Dog} object representing the new dog to be added.
     */
    @PostMapping("")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public void addDog(@RequestParam String email, @RequestBody Dog newDog) {
        service.addDog(email, newDog);
    }

}
