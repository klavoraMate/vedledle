package vedledle.dog;

import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;

public class DogRowMapper implements RowMapper<Dog> {
    @Override
    public Dog mapRow(ResultSet rs, int rowNum) throws SQLException {
        int id = rs.getInt("id");
        String name = rs.getString("name");
        String breed = rs.getString("breed");
        int age = rs.getInt("age");
        return new Dog(id,name,breed,age);
    }
}
