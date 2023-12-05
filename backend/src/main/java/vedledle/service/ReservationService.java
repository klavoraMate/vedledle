package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Dog;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;
import vedledle.dao.repository.ReservationRepository;

import java.util.List;
import java.util.Optional;

/**
 * The {@code ReservationService} class provides services related to reservation operations in the application.
 * It interacts with the {@link ReservationRepository} to perform various tasks.
 */
@Service
@RequiredArgsConstructor
public class ReservationService {
    /**
     * The repository for accessing and managing reservation data.
     */
    private final ReservationRepository repository;
    /**
     * The service for handling user-related operations.
     */
    private final UserService userService;
    /**
     * The service for handling dog-related operations.
     */
    private final DogService dogService;

    /**
     * Adds a new reservation based on the users email,
     * the dogs name and non JsonIgnore properties of the reservation.
     *
     * @param email       email of the user
     * @param dogName     name of the dog
     * @param reservation reservation object that contains the non JsonIgnore properties
     */
    public void add(String email, String dogName, Reservation reservation) {
        User user = userService.findByEmail(email);
        Dog dog = dogService.getByNameAndOwner(dogName, user);
        reservation.setDog(dog);
        reservation.setUser(user);
        repository.save(reservation);
    }

    /**
     * Retrieves all reservations from the database.
     *
     * @return The list of reservations.
     */
    public List<Reservation> getAll() {
        return repository.findAll();
    }

}
