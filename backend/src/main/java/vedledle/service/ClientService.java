package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Client;
import vedledle.dao.model.Dog;
import vedledle.dao.repository.ClientRepository;
import vedledle.exception.UserNotFoundException;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository repository;
    private final DogService dogService;
    public Client findByEmail(String email){
        Optional<Client> client = repository.findByEmail(email);
        if (client.isPresent())
            return client.get();
        else
            throw new UserNotFoundException(email);
    }
    public void save(Client client){
        repository.save(client);
    }
    public List<Dog> getDogsOfClient(String email){
        return dogService.findByOwner(findByEmail(email));
    }

}
