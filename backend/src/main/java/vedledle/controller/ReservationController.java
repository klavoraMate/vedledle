package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Reservation;
import vedledle.service.ReservationService;

/**
 * The {@code ReservationController} class handles HTTP requests related to reservation operations.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reservation")
public class ReservationController {
    /**
     * The service responsible for handling reservation-related operations.
     */
    private final ReservationService service;

    @PostMapping("")
    @PreAuthorize("@securityService.sameAsAuthenticatedUserOrHasAdminRole(#email) and " +
            "@securityService.canAccessDog(#dogName)")
    public void add(@RequestParam String email, @RequestParam String dogName, @RequestBody Reservation reservation) {
        service.add(email, dogName, reservation);
    }
}
