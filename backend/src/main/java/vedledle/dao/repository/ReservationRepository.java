package vedledle.dao.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.Dog;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * The {@code ReservationRepository} interface provides access to reservation data in the database.
 * It extends {@link JpaRepository} to perform CRUD operations on the {@link Reservation} entity.
 */
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findAllByStartDateBetween(LocalDateTime startDate, LocalDateTime endDate, Sort sort);
    List<Reservation> findAllByDogAndUser(Dog dog, User user);
}
