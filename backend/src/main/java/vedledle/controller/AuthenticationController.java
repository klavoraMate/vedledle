package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.Client;
import vedledle.service.ClientService;


@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final ClientService service;

    @PreAuthorize("hasAuthority('SCOPE_user.read')")
    @GetMapping("/")
    public String root(){
        var jwt = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return jwt.getIssuer() + service.get(1L).getName();
    }

}
