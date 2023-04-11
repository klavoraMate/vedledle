package vedledle.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vedledle.reservation.dto.ReservationDTO;

import java.util.List;

@RestController
@RequestMapping("api/reservation")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    public List<ReservationDTO> findAll(){
        return reservationService.findAll();
    }
}
