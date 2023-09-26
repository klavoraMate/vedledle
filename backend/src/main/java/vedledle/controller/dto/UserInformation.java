package vedledle.controller.dto;

import vedledle.dao.model.Dog;

import java.util.List;

public record UserInformation(String name, String email, List<Dog> dogs) {
}
