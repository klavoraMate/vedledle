package vedledle.reservation;

import java.time.LocalDate;

public record Reservation(int id, LocalDate start,LocalDate end,int clientId) {
}
