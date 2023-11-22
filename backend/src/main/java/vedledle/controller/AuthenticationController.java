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
import vedledle.dao.model.User;
import vedledle.service.UserService;


/**
 * The {@code AuthenticationController} class handles HTTP requests related to user authentication.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {
    /**
     * The encoder for encoding passwords.
     */
    private final PasswordEncoder passwordEncoder;
    /**
     * The service responsible for handling user-related operations.
     */
    private final UserService service;
    /**
     * The authentication provider for validating username and password.
     */
    private final UsernamePasswordAuthenticationProvider authenticationProvider;

    /**
     * Registers a new user.
     *
     * @param userRequest The request body containing user information.
     * @return The response indicating the success or failure of user registration.
     */
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User userRequest) {
        ResponseEntity<String> response;
        try {
            User newUser = User.builder()
                    .email(userRequest.getEmail())
                    .name(userRequest.getName())
                    .password(passwordEncoder.encode(userRequest.getPassword()))
                    .role("USER")
                    .build();
            service.save(newUser);
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("User " + userRequest.getName() + " created");
        } catch (Exception e) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred due to " + e.getMessage());
        }
        return response;
    }

    /**
     * Handles user login and generates a JWT token upon successful authentication.
     *
     * @param loginRequest The request body containing login credentials.
     * @return The response containing the JWT token upon successful authentication.
     */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationProvider.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password()));
            User user = service.findByName(authentication.getName());
            String jwt = JWTGenerator.generate(authentication, user.getEmail());
            return ResponseEntity.ok(new LoginResponse(jwt));
        } catch (Exception e) {
            throw new BadCredentialsException(e.getMessage());
        }
    }

}
