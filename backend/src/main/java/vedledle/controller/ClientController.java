package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.Client;
import vedledle.dao.model.Dog;
import vedledle.exception.UserNotFoundException;
import vedledle.service.ClientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/client")
public class ClientController {
    private final ClientService service;

    @GetMapping("/info/{email}")
    public Client info(@PathVariable String email) {
        return service.findByEmail(email);
    }

    @GetMapping("/dogs/{email}")
    public List<Dog> dogs(@PathVariable String email){
        return service.getDogsOfClient(email);
    }
}
