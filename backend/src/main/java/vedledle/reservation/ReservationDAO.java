package vedledle.reservation;

import java.util.List;

public interface ReservationDAO {
    List<Reservation> findAll();

    Reservation find(Integer reservationId);
}
