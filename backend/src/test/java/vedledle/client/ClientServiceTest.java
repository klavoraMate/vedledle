package vedledle.client;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import vedledle.client.dto.ClientDTO;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

class ClientServiceTest {
    @Mock
    private ClientDAO clientDAO;

    private ClientService clientService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.clientService = new ClientService(clientDAO);
    }

    @Test
    void findAll() {
        List<Client> clients = new ArrayList<>();
        clients.add(new Client(1, "Máté", 1));
        clients.add(new Client(1, "Csenge", 1));
        when(clientDAO.findAll()).thenReturn(clients);

        List<ClientDTO> clientDTOs = this.clientService.findAll();

        assertEquals(clients.size(), clientDTOs.size());
        assertEquals(new ClientDTO(clients.get(0)), clientDTOs.get(0));
        assertEquals(new ClientDTO(clients.get(1)), clientDTOs.get(1));
    }

    @Test
    void find() {
        int id = 1;
        Client client = new Client(id, "Máté", 1);
        when(clientDAO.find(anyInt())).thenReturn(client);

        ClientDTO clientDTO = clientService.find(id);

        assertEquals(new ClientDTO(client), clientDTO);
    }
}
