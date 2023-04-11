package vedledle.reservation;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;


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
}
