package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Dog;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;
import vedledle.exception.TimePeriodConflictException;
import vedledle.exception.UnauthorizedAccessException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * The {@code SecurityService} class provides methods for checking access permissions related to security operations.
 * It interacts with the Spring Security framework to retrieve authentication information.
 */
@Service
@RequiredArgsConstructor
public class SecurityService {
    /**
     * The service responsible for handling user-related operations.
     */
    private final UserService userService;
    /**
     * The service responsible for handling dog-related operations.
     */
    private final DogService dogService;

    /**
     * The service responsible for handling reservation-related operations.
     */
    private final ReservationService reservationService;

    /**
     * Checks whether the authenticated user has access to a dog with the specified name.
     *
     * @param dogName The name of the dog to check access for.
     * @return {@code true} if the authenticated user can access the dog, {@code false} otherwise.
     */
    public boolean canAccessDog(String dogName) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (isAdmin(authentication))
            return true;

        User user = userService.findByName(authentication.getName());
        List<Dog> dogs = dogService.getDogsOfUser(user);

        if (dogs.stream().anyMatch(dog -> dog.getName().equals(dogName)))
            return true;
        else
            throw new UnauthorizedAccessException("Access denied. You do not have permission to access this dog's resource.");

    }

    /**
     * Checks if the provided email matches the email of the authenticated user or if the authenticated user has an admin role.
     * If the authenticated user has an admin role, this method returns true.
     * If the authenticated user does not have an admin role, it retrieves the user based on the authentication name and compares
     * the user's email with the provided email.
     *
     * @param email The email to compare with the authenticated user's email.
     * @return {@code true} if the provided email matches the authenticated user's email or if the authenticated user has an admin role,
     * {@code false} otherwise.
     */
    public boolean sameAsAuthenticatedUserOrHasAdminRole(String email) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (isAdmin(authentication))
            return true;

        User user = userService.findByName(authentication.getName());
        if (user.getEmail().equals(email))
            return true;
        else
            throw new UnauthorizedAccessException("Access denied. You do not have permission to access this user's resource.");
    }

    /**
     * Checks if the provided reservation is reservable.
     *
     * @param desiredReservation The reservation to check.
     * @return {@code true} if the reservation is reservable, {@code false} otherwise.
     */
    public boolean isReservable(Reservation desiredReservation) {
        List<Reservation> reservations = reservationService.getAll();
        for (Reservation reservation : reservations) {
            if (dateIsConflicting(desiredReservation.getStartDate(), desiredReservation.getEndDate(), reservation.getStartDate(), reservation.getEndDate()))
                throw new TimePeriodConflictException();
        }
        return true;
    }

    private boolean isAdmin(Authentication authentication) {
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
    }

    private boolean dateIsBetween(LocalDateTime date, LocalDateTime startDate, LocalDateTime endDate) {
        return date.isAfter(startDate) && date.isBefore(endDate);
    }

    private boolean dateIsConflicting(LocalDateTime startDate, LocalDateTime endDate, LocalDateTime startDate2, LocalDateTime endDate2) {
        return dateIsBetween(startDate, startDate2, endDate2) ||
                dateIsBetween(endDate, startDate2, endDate2) ||
                startDate.equals(startDate2) ||
                endDate.equals(endDate2);
    }

}
