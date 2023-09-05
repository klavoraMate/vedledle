package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.Client;
import vedledle.service.ClientService;

import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final ClientService service;

    @RequestMapping("/user")
    public Client getUserDetailsAfterLogin(Authentication authentication) {
        Optional<Client> client = service.findByEmail(authentication.getName());
        return client.orElse(null);

    }

}
