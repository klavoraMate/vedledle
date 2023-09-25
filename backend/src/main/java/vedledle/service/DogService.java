package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.DogRepository;
import vedledle.exception.DogNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DogService {
    private final DogRepository repository;

    public Dog get(String name) {
        Optional<Dog> dog = repository.findByName(name);
        if (dog.isPresent()) {
            return dog.get();
        } else
            throw new DogNotFoundException(name);
    }

    public List<Dog> findByOwner(User user) {
        return repository.findByOwner(user);
    }
}
