package vedledle.controller.dto.mapper;

import vedledle.controller.dto.Breed;
import vedledle.controller.dto.Size;
import vedledle.controller.dto.UserInformation;
import vedledle.dao.model.Dog;
import vedledle.dao.model.User;
import vedledle.dao.model.animalProperties.AnimalProperty;

/**
 * The {@code DTOMapper} class provides static methods for mapping domain objects to DTOs.
 */
public class DTOMapper {
    /**
     * Converts a {@link User} and a list of owned {@link Dog}s into a {@link UserInformation} DTO.
     *
     * @param user     The user object containing information such as name and email.
     * @return A {@link UserInformation} DTO representing user information and owned dogs.
     */
    public static UserInformation toUserInformation(User user) {
        return new UserInformation(user.getName(), user.getEmail());
    }

    /**
     * Converts a {@link AnimalProperty} into a {@link Breed} DTO.
     * @param breed The breed to convert.
     * @return A {@link Breed} DTO representing the breed.
     */
    public static Breed toBreed(AnimalProperty breed) {
        return new Breed(breed.toString(),breed.getGroomingTime());
    }

    /**
     * Converts a {@link AnimalProperty} into a {@link Size} DTO.
     * @param size The size to convert.
     * @return A {@link Size} DTO representing the size.
     */
    public static Size toSize(AnimalProperty size) {
        return new Size(size.toString(), size.getGroomingTime());
    }

}
