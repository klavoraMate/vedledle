package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vedledle.controller.dto.DogWithReservation;
import vedledle.controller.dto.mapper.DTOMapper;
import vedledle.dao.model.Dog;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;
import vedledle.service.DogService;
import vedledle.service.ReservationService;
import vedledle.service.UserService;

import java.util.ArrayList;
import java.util.LinkedList;
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
    private final DogService dogService;
    /**
     * The service responsible for handling reservation-related operations.
     */
    private final ReservationService reservationService;
    /**
     * The service responsible for handling user-related operations.
     */
    private final UserService userService;

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
        return dogService.getByName(name);
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
        return dogService.getDogsByEmail(email);
    }

    /**
     * Fetches all dogs associated with a specific user based on the user's email.
     * Unlike {@link #getAll(String)}, this method also fetches reservations for each dog.
     * The authenticated user must either be the same as the specified email or have an admin role.
     *
     * @param email The email of the user to retrieve dogs for.
     * @return A list of dogs owned by the user with the specified email.
     */
    @GetMapping("/all/withReservations")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public List<DogWithReservation> getAllWithReservations(@RequestParam String email){
        User user = userService.findByEmail(email);
        List<Dog> dogs = dogService.getDogsByEmail(email);
        List<DogWithReservation> dogsWithReservations = new LinkedList<>();
        for (Dog dog:  dogs){
            Reservation reservation = reservationService.getUpcomingReservation(dog,user);
            if (reservation != null){
                dogsWithReservations.add(DTOMapper.toDogWithReservation(dog,reservation));
            }
            else {
                dogsWithReservations.add(DTOMapper.toDogWithReservation(dog,null));
            }
        }
        return dogsWithReservations;
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
        dogService.add(email, newDog);
    }


    /**
     * Checks if a dog has an upcoming reservation. The authenticated user must either be the same as the
     * specified email or have an admin role to perform this operation.
     *
     * @param email  The email associated with the authenticated user.
     * @param dogName The name of the dog to check for reservations.
     * @return True if the dog has an upcoming reservation, false otherwise.
     */
    @GetMapping("/hasUpcomingReservation")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public boolean dogHasUpcomingReservation(@RequestParam String email, @RequestParam String dogName){
        User user = userService.findByEmail(email);
        Dog dog = dogService.getByNameAndOwner(dogName, user);
        return reservationService.hasUpcomingReservation(dog,user);
    }

}
