package vedledle.client;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClientDAOJdbc implements ClientDAO {
    private final JdbcTemplate jdbcTemplate;

    public ClientDAOJdbc(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Override
    public List<Client> findAll() {
        String sql = "SELECT id,name,dog_id from client";
        return jdbcTemplate.query(sql,new ClientRowMapper());
    }
}
