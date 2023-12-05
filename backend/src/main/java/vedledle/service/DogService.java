package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.DogRepository;
import vedledle.exception.DogAlreadyExistException;
import vedledle.exception.DogNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * The {@code DogService} class provides services related to dog operations in the application.
 * It interacts with the {@link DogRepository} to perform various tasks.
 */
@Service
@RequiredArgsConstructor
public class DogService {
    /**
     * The repository for accessing and managing dog data.
     */
    private final DogRepository repository;
    /**
     * The service for handling user-related operations.
     */
    private final UserService userService;

    /**
     * Retrieve all dogs from the database.
     *
     * @param name The name of the dog to retrieve.
     * @return The list of dogs with the specified name.
     * @throws DogNotFoundException If no dog is found with the given name.
     */
    public List<Dog> get(String name) {
        List<Dog> dogs = repository.findByName(name);
        if (!dogs.isEmpty()) {
            return dogs;
        } else
            throw new DogNotFoundException(name);
    }

    /**
     * Retrieves the list of dogs owned by a specific user.
     *
     * @param user The owner of the dogs.
     * @return The list of dogs owned by the user.
     */
    public List<Dog> getDogsOfUser(User user) {
        return repository.findByOwner(user);
    }

    /**
     * Retrieves the list of dogs owned by the user with the specified email.
     *
     * @param email The email of the user to retrieve dogs for.
     * @return The list of dogs owned by the user with the specified email.
     */
    public List<Dog> getDogsByEmail(String email) {
        User user = userService.findByEmail(email);
        return getDogsOfUser(user);
    }

    /**
     * Adds a new dog to the database for the specified user.
     * If the user already owns a dog with the same name, the dog will not be added.
     * Otherwise, the dog will be added to the database. There could be multiple dogs with the same name.
     *
     * @param email The email of the user adding the dog.
     * @param dog   The dog to be added.
     * @throws DogAlreadyExistException If a dog with the same name already exists for the user.
     */
    public void add(String email, Dog dog) {
        User user = userService.findByEmail(email);
        List<Dog> alreadyOwnedDogs = repository.findByOwner(user);
        if (alreadyOwnedDogs.stream().anyMatch(d -> d.getName().equals(dog.getName()))) {
            throw new DogAlreadyExistException(dog.getName());
        } else {
            dog.setOwner(user);
            repository.save(dog);
        }
    }
}
