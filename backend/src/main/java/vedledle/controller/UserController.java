package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dao.model.User;
import vedledle.dao.model.Dog;
import vedledle.service.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService service;

    @GetMapping("/info/{email}")
    public User info(@PathVariable String email) {
        return service.findByEmail(email);
    }

    @GetMapping("/dogs/{email}")
    public List<Dog> dogs(@PathVariable String email){
        return service.getDogsOfClient(email);
    }
}
