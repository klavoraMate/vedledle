package vedledle.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vedledle.controller.dto.UserInformation;
import vedledle.controller.dto.mapper.DTOMapper;
import vedledle.dao.model.User;
import vedledle.service.UserService;

/**
 * The {@code UserController} class handles HTTP requests related to user information.
 * It is annotated with {@link RestController} to indicate that it provides RESTful services.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    /**
     * The service responsible for handling user-related operations.
     */
    private final UserService service;

    /**
     * Retrieves user information based on the provided email address.
     *
     * @param email The email address of the user.
     * @return The user information, including details about the user and their dogs.
     */
    @GetMapping("/info")
    @PreAuthorize("@securityService.canAccessInfo(#email)")
    public UserInformation info(@RequestParam String email) {
        User user = service.findByEmail(email);
        return DTOMapper.toUserInformation(user, service.getDogsOfUser(user));
    }
}
