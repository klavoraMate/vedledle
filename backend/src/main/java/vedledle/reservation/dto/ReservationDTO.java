package vedledle.reservation.dto;

import vedledle.reservation.Reservation;

import java.time.LocalDate;
import java.util.Objects;

public final class ReservationDTO {
    private final LocalDate start;
    private final LocalDate end;
    private final int clientId;

    public ReservationDTO(Reservation reservation) {
        this.start = reservation.start();
        this.end = reservation.end();
        this.clientId = reservation.clientId();
    }


    public LocalDate getStart() {
        return start;
    }

    public LocalDate getEnd() {
        return end;
    }

    public int getClientId() {
        return clientId;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (ReservationDTO) obj;
        return Objects.equals(this.start, that.start) &&
                Objects.equals(this.end, that.end) &&
                this.clientId == that.clientId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(start, end, clientId);
    }

    @Override
    public String toString() {
        return "ReservationDTO[" +
                "start=" + start + ", " +
                "end=" + end + ", " +
                "clientId=" + clientId + ']';
    }

}
