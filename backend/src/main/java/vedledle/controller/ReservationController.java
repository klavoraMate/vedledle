package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vedledle.controller.dto.GroomingTimeSlot;
import vedledle.dao.model.Reservation;
import vedledle.service.ReservationService;

import java.util.List;

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
            "@securityService.canAccessDog(#dogName) and" +
            "@securityService.isReservable(#reservation)")
    public void add(@RequestParam String email, @RequestParam String dogName, @RequestBody Reservation reservation) {
        service.add(email, dogName, reservation);
    }

    @GetMapping("/timeslots")
    @PreAuthorize("@securityService.canAccessDog(#dogName)" + "and @securityService.sameAsAuthenticatedUserOrHasAdminRole(#email)")
    public List<GroomingTimeSlot> availableTimeSlots(@RequestParam String email,@RequestParam String dogName, @RequestParam boolean isShowerOnly){
        return service.getAvailableTimeSlots(email,dogName,isShowerOnly);
    }
}
