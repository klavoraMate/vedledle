package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.Client;
import vedledle.service.ClientService;


@RestController
@RequiredArgsConstructor
public class AuthenticationController {
    private final ClientService service;
    @GetMapping("/")
    public String root(){
        return service.get(1L).getName();
    }

}
