package vedledle.controller.dto.mapper;

import vedledle.controller.dto.UserInformation;
import vedledle.dao.model.Dog;
import vedledle.dao.model.User;

import java.util.List;
/**
 * The {@code DTOMapper} class provides static methods for mapping domain objects to DTOs.
 */
public class DTOMapper {
    /**
     * Converts a {@link User} and a list of owned {@link Dog}s into a {@link UserInformation} DTO.
     *
     * @param user     The user object containing information such as name and email.
     * @param ownedDogs The list of dogs owned by the user.
     * @return A {@link UserInformation} DTO representing user information and owned dogs.
     */
    public static UserInformation toUserInformation(User user, List<Dog> ownedDogs) {
        return new UserInformation(user.getName(), user.getEmail(), ownedDogs);
    }
}
