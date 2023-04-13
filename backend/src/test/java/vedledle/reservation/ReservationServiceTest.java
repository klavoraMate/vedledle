package vedledle.reservation;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import vedledle.reservation.dto.ReservationDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

public class ReservationServiceTest {

    @Mock
    private ReservationDAO reservationDAO;

    private ReservationService reservationService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        reservationService = new ReservationService(reservationDAO);
    }

    @Test
    void testFindAll() {
        List<Reservation> reservations = new ArrayList<>();
        reservations.add(new Reservation(1, LocalDate.now(), LocalDate.now(),1));
        reservations.add(new Reservation(2, LocalDate.now(), LocalDate.now(),1));
        when(reservationDAO.findAll()).thenReturn(reservations);

        List<ReservationDTO> reservationDTOs = reservationService.findAll();

        assertEquals(reservations.size(), reservationDTOs.size());
        assertEquals(new ReservationDTO(reservations.get(0)), reservationDTOs.get(0));
        assertEquals(new ReservationDTO(reservations.get(1)), reservationDTOs.get(1));
    }

    @Test
    void testFind() {
        Reservation reservation = new Reservation(1, LocalDate.now(), LocalDate.now(),1);
        when(reservationDAO.find(anyInt())).thenReturn(reservation);

        ReservationDTO reservationDTO = reservationService.find(1);

        assertEquals(new ReservationDTO(reservation), reservationDTO);
    }
}
