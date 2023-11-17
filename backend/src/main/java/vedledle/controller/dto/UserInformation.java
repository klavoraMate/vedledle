package vedledle.controller.dto;

import vedledle.dao.model.Dog;

import java.util.List;

/**
 * The {@code UserInformation} class represents information about a user, including their name, email, and a list of dogs.
 * It is used to pass these date to the frontend.
 */
public record UserInformation(String name, String email, List<Dog> dogs) {
}
