package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;

import java.util.List;
import java.util.Optional;

/**
 * The {@code DogRepository} interface provides access to dog data in the database.
 * It extends {@link JpaRepository} to perform CRUD operations on the {@link Dog} entity.
 */
public interface DogRepository extends JpaRepository<Dog,Long> {
        /**
         * Retrieves a list of dogs owned by a specific user.
         *
         * @param owner The owner of the dogs.
         * @return The list of dogs owned by the user.If no owner found the list is empty.
         */
        List<Dog> findByOwner(User owner);

        /**
         * Finds a dog by its name.
         *
         * @param name The name of the dog to find.
         * @return An {@link Optional} containing the dog with the specified name, if found.
         */
        Optional<Dog> findByName(String name);
}
