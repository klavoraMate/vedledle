package vedledle.client;

import org.springframework.stereotype.Service;
import vedledle.client.dto.ClientDTO;

import java.util.List;

@Service
public class ClientService {
    private final ClientDAO clientDAO;

    public ClientService(ClientDAO clientDAO) {
        this.clientDAO = clientDAO;
    }

    public List<ClientDTO> findAll() {
        return clientDAO.findAll().stream().map(ClientDTO::new).toList();
    }

    public ClientDTO find(Integer clientId) {
        return new ClientDTO(clientDAO.find(clientId));
    }
}
