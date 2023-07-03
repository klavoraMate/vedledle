package vedledle.reservation;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import vedledle.exception.NotFoundException;

import java.util.List;
import java.util.Optional;


@Repository
public class ReservationDAOJdbc implements ReservationDAO {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ReservationDAOJdbc(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Reservation> findAll() {
        String sql = "SELECT id, start_date, end_date, client_id FROM reservation";
        return jdbcTemplate.query(sql, new ReservationRowMapper());
    }

    @Override
    public Reservation find(Integer reservationId) {
        String sql = "SELECT id, start_date, end_date, client_id FROM reservation WHERE id = ?";
        Optional<Reservation> reservation = jdbcTemplate.query(sql,new ReservationRowMapper(),reservationId).stream().findAny();
        if (reservation.isPresent())
            return reservation.get();
        else
            throw new NotFoundException("There is no reservation found with the given id");
    }
}
