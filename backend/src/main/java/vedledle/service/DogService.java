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
     * Retrieves a dog by its name.
     *
     * @param name The name of the dog to retrieve.
     * @return The dog with the specified name.
     * @throws DogNotFoundException If no dog is found with the given name.
     */
    public Dog get(String name) {
        Optional<Dog> dog = repository.findByName(name);
        if (dog.isPresent()) {
            return dog.get();
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
     * Adds a new dog to the database for the specified user.
     * If a dog with the same name already exists, a {@link DogAlreadyExistException} is thrown.
     *
     * @param email The email of the user adding the dog.
     * @param dog   The dog to be added.
     * @throws DogAlreadyExistException If a dog with the same name already exists in the database.
     */
    public void addDog(String email, Dog dog) {
        User user = userService.findByEmail(email);
        Optional<Dog> savedDog = repository.findByName(dog.getName());
        if (savedDog.isPresent()) {
            throw new DogAlreadyExistException(dog.getName());
        } else {
            dog.setOwner(user);
            repository.save(dog);
        }
    }
}
