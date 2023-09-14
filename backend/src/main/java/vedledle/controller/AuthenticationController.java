package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import vedledle.dao.model.Client;
import vedledle.service.ClientService;

import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {
    private final PasswordEncoder passwordEncoder;
    private final ClientService service;

    @RequestMapping("/user")
    public Client getUserDetailsAfterLogin(Authentication authentication) {
        Optional<Client> client = service.findByEmail(authentication.getName());
        return client.orElse(null);

    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Client clientRequest) {
        ResponseEntity<String> response;
        try {
            Client newClient = Client.builder()
                    .email(clientRequest.getEmail())
                    .name(clientRequest.getName())
                    .password(passwordEncoder.encode(clientRequest.getPassword()))
                    .role("USER")
                    .build();
            service.save(newClient);
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("Client created");
        } catch (Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred due to " + e.getMessage());
        }
        return response;
    }

}
