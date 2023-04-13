package vedledle.dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Repository
public class DogDAOJdbc implements DogDAO {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DogDAOJdbc(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Dog> findAll() {
        String sql = "SELECT id,name,breed,age FROM dog";
        return this.jdbcTemplate.query(sql,new DogRowMapper());
    }

    @Override
    public Dog find(Integer dogId) {
        String sql = "SELECT id,name,breed,age FROM dog WHERE id = ?";
        Optional<Dog> dog = this.jdbcTemplate.query(sql, new DogRowMapper(),dogId).stream().findFirst();
        if (dog.isPresent()){
            return dog.get();
        }
        //TODO: create costume Exception
        else throw new NoSuchElementException();
    }
}
