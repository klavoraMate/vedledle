package vedledle.reservation;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import org.springframework.jdbc.core.RowMapper;

public class ReservationRowMapper implements RowMapper<Reservation> {

    @Override
    public Reservation mapRow(ResultSet rs, int rowNum) throws SQLException {
        int id = rs.getInt("id");
        LocalDate start = rs.getDate("start_date").toLocalDate();
        LocalDate end = rs.getDate("end_date").toLocalDate();
        int clientId = rs.getInt("client_id");
        return new Reservation(id, start, end, clientId);
    }

}
