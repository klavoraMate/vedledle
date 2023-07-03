package vedledle.client;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import vedledle.exception.NotFoundException;

import java.util.List;
import java.util.Optional;

@Repository
public class ClientDAOJdbc implements ClientDAO {
    private final JdbcTemplate jdbcTemplate;

    public ClientDAOJdbc(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Client> findAll() {
        String sql = "SELECT id,name,dog_id from client";
        return jdbcTemplate.query(sql, new ClientRowMapper());
    }

    @Override
    public Client find(Integer clientId) {
        String sql = "SELECT id,name,dog_id from client WHERE id = ?";
        Optional<Client> client = jdbcTemplate.query(sql, new ClientRowMapper(), clientId).stream().findAny();
        if (client.isPresent())
            return client.get();
        else
            throw new NotFoundException("There is no client found with the given id");
    }
}
