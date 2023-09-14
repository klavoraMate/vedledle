package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import vedledle.config.security.JWTGenerator;
import vedledle.config.security.provider.UsernamePasswordAuthenticationProvider;
import vedledle.controller.dto.LoginRequest;
import vedledle.controller.dto.LoginResponse;
import vedledle.dao.model.Client;
import vedledle.service.ClientService;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {
    private final PasswordEncoder passwordEncoder;
    private final ClientService service;
    private final UsernamePasswordAuthenticationProvider authenticationProvider;

assd
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

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationProvider.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password()));
            String jwt = JWTGenerator.generate(authentication);
            return ResponseEntity.ok(new LoginResponse(jwt));
        } catch (Exception e) {
            throw new BadCredentialsException(e.getMessage());
        }
    }

}
