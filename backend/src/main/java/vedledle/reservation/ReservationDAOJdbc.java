package vedledle.reservation;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;


@Repository
public class ReservationDAOJdbc implements ReservationDAO {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ReservationDAOJdbc(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
}
