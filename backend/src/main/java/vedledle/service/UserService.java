package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.UserRepository;
import vedledle.exception.UserNotFoundException;

import java.util.List;
import java.util.Optional;

/**
 * The {@code UserService} class provides services related to user operations in the application.
 * It interacts with the {@link UserRepository} and {@link DogService} to perform various tasks.
 */
@RequiredArgsConstructor
@Service
public class UserService {
    /**
     * The repository for accessing and managing user data.
     */
    private final UserRepository repository;
    /**
     * The service for handling dog-related operations.
     */
    private final DogService dogService;

    /**
     * Finds a user by their email address.
     *
     * @param email The email address of the user to find.
     * @return The user with the specified email address.
     * @throws UserNotFoundException If no user is found with the given email address.
     */
    public User findByEmail(String email){
        Optional<User> user = repository.findByEmail(email);
        if (user.isPresent())
            return user.get();
        else
            throw new UserNotFoundException(email);
    }

    /**
     * Finds a user by their name.
     *
     * @param name The name of the user to find.
     * @return The user with the specified name.
     * @throws UserNotFoundException If no user is found with the given name.
     */
    public User findByName(String name){
        Optional<User> user = repository.findByName(name);
        if (user.isPresent())
            return user.get();
        else
            throw new UserNotFoundException(name);
    }

    /**
     * Saves a user to the database.
     *
     * @param user The user to be saved.
     */
    public void save(User user){
        repository.save(user);
    }

    /**
     * Retrieves the list of dogs owned by a specific user.
     *
     * @param user The owner of the dogs.
     * @return The list of dogs owned by the user.
     */
    public List<Dog> getDogsOfUser(User user){
        return dogService.findByOwner(user);
    }

}
