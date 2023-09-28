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


@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AuthenticationController {
    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    private final PasswordEncoder passwordEncoder;
    private final UserService service;
    private final UsernamePasswordAuthenticationProvider authenticationProvider;



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
                    .body("User created");
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
            Authentication authentication = authenticationProvider.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password()));
            String jwt = JWTGenerator.generate(authentication);
            return ResponseEntity.ok(new LoginResponse(jwt));
        } catch (Exception e) {
            throw new BadCredentialsException(e.getMessage());
        }
    }

}
