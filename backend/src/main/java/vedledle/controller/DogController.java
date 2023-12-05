package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Dog;
import vedledle.service.DogService;
import java.util.List;

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
    public List<Dog> get(@RequestParam String name) {
        return service.get(name);
    }

    /**
     * Fetches all dogs associated with a specific user based on the user's email.
     * The authenticated user must either be the same as the specified email or have an admin role.
     *
     * @param email The email of the user to retrieve dogs for.
     * @return A list of dogs owned by the user with the specified email.
     */
    @GetMapping("/all")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public List<Dog> getAll(@RequestParam String email){
        return service.getDogsByEmail(email);
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
        service.add(email, newDog);
    }

}
