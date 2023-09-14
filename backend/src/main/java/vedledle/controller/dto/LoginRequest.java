package vedledle.controller.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(@Email String username, @NotBlank @Size(min = 3,max = 255) String password) {
}
