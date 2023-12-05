package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

}
