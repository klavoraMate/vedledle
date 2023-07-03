package vedledle.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vedledle.client.dto.ClientDTO;

import java.util.List;

@RestController
@RequestMapping("api/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("all")
    public List<ClientDTO> findAll(){
        return this.clientService.findAll();
    }

    @GetMapping("/{clientId}")
    public ClientDTO find(@PathVariable Integer clientId){
        return this.clientService.find(clientId);
    }
}
