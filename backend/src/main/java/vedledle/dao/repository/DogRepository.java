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
public interface DogRepository extends JpaRepository<Dog, Long> {
    /**
     * Retrieves a list of dogs owned by a specific user.
     *
     * @param owner The owner of the dogs.
     * @return The list of dogs owned by the user.If no owner found the list is empty.
     */
    List<Dog> findByOwner(User owner);

    /**
     * Retrieves all dogs with the specified name.
     *
     * @param name The name of the dog to retrieve.
     * @return The list of dogs with the specified name.
     */
    List<Dog> findByName(String name);

    /**
     * Retrieves a dog with the specified name and owner.
     *
     * @param name The name of the dog to retrieve.
     * @param owner The owner of the dog.
     * @return The dog with the specified name and owner.
     */
    Optional<Dog> findByNameAndOwner(String name, User owner);
}
