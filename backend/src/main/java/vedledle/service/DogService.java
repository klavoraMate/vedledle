package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.DogRepository;
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
     * Retrieves a list of dogs owned by a specific user.
     *
     * @param user The owner of the dogs.
     * @return The list of dogs owned by the user.
     */
    public List<Dog> findByOwner(User user) {
        return repository.findByOwner(user);
    }
}
