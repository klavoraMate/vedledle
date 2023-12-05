package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Dog;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;

import java.time.LocalDate;
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

        return dogs.stream().anyMatch(dog -> dog.getName().equals(dogName));

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
        return user.getEmail().equals(email);
    }

    /**
     * Checks if the provided reservation is reservable.
     * @param desiredReservation The reservation to check.
     * @return {@code true} if the reservation is reservable, {@code false} otherwise.
     */
    public boolean isReservable(Reservation desiredReservation) {
        return reservationService.getAll().stream()
                .noneMatch(reservation -> dateIsConflicting(
                        desiredReservation.getStartDate(),
                        desiredReservation.getEndDate(),
                        reservation.getStartDate(),
                        reservation.getEndDate()));
    }

    private boolean isAdmin(Authentication authentication) {
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
    }

    private boolean dateIsBetween(LocalDate date, LocalDate startDate, LocalDate endDate) {
        return date.isAfter(startDate) && date.isBefore(endDate);
    }

    private boolean dateIsConflicting(LocalDate startDate, LocalDate endDate, LocalDate startDate2, LocalDate endDate2) {
        return dateIsBetween(startDate, startDate2, endDate2) ||
                dateIsBetween(endDate, startDate2, endDate2) ||
                startDate.equals(startDate2) ||
                endDate.equals(endDate2);
    }

}
