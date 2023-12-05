package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
