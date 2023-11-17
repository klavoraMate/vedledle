package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vedledle.dao.model.User;

import java.util.Optional;

/**
 * The {@code UserRepository} interface provides access to user data in the database.
 * It extends {@link JpaRepository} to perform CRUD operations on the {@link User} entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    /**
     * Finds a user by their email address.
     *
     * @param email The email address of the user to find.
     * @return An {@link Optional} containing the user with the specified email address, if found.
     */
    Optional<User> findByEmail(String email);

    /**
     * Finds a user by their name.
     *
     * @param name The name of the user to find.
     * @return An {@link Optional} containing the user with the specified name, if found.
     */
    Optional<User> findByName(String name);
}
