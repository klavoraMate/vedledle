package vedledle.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vedledle.reservation.dto.ReservationDTO;

import java.util.List;

@Service
public class ReservationService {
    private final ReservationDAO reservationDAO;

    @Autowired
    public ReservationService(ReservationDAO reservationDAO) {
        this.reservationDAO = reservationDAO;
    }

    public List<ReservationDTO> findAll() {
        return reservationDAO.findAll().stream().map(ReservationDTO::new).toList();
    }
}
