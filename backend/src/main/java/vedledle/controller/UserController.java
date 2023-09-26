package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.controller.dto.UserInformation;
import vedledle.controller.dto.mapper.DTOMapper;
import vedledle.dao.model.User;
import vedledle.service.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService service;

    @GetMapping("/info/{email}")
    public UserInformation info(@PathVariable String email) {
        User user = service.findByEmail(email);
        return DTOMapper.toUserInformation(user, service.getDogsOfUser(user));
    }
}
