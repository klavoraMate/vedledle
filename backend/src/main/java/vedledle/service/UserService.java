package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.UserRepository;
import vedledle.exception.UserNotFoundException;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository repository;
    private final DogService dogService;
    public User findByEmail(String email){
        Optional<User> user = repository.findByEmail(email);
        if (user.isPresent())
            return user.get();
        else
            throw new UserNotFoundException(email);
    }
    public void save(User user){
        repository.save(user);
    }
    public List<Dog> getDogsOfClient(String email){
        return dogService.findByOwner(findByEmail(email));
    }

}
