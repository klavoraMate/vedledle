package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.Client;
import vedledle.dao.model.Dog;

import java.util.List;
import java.util.Optional;

public interface DogRepository extends JpaRepository<Dog,Long> {
        List<Dog> findByOwner(Client owner);
        Optional<Dog> findByName(String name);
}
