package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.Reservation;

/**
 * The {@code ReservationRepository} interface provides access to reservation data in the database.
 * It extends {@link JpaRepository} to perform CRUD operations on the {@link Reservation} entity.
 */
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
