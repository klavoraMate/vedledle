package vedledle.controller.dto.mapper;

import vedledle.controller.dto.UserInformation;
import vedledle.dao.model.Dog;
import vedledle.dao.model.User;

import java.util.List;

public class DTOMapper {
    public static UserInformation toUserInformation(User user, List<Dog> ownedDogs) {
        return new UserInformation(user.getName(), user.getEmail(), ownedDogs);
    }
}
