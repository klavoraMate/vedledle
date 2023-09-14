package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Client;
import vedledle.dao.repository.ClientRepository;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository repository;

    public Client get(Long id){
        return repository.getReferenceById(id);
    };
    public Optional<Client> findByEmail(String email){
        List<Client> client = repository.findByEmail(email);
        return client.get(0) != null ? Optional.of(client.get(0)) : Optional.empty();
    }

    public void save(Client client){
        repository.save(client);
    }
}
