package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Client;
import vedledle.dao.repository.ClientRepository;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository repository;

    public Client get(Long id){
        return repository.getReferenceById(id);
    };
}
