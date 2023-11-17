package vedledle.controller.dto;

/**
 * The {@code LoginRequest} class represents the request containing login credentials, including the user's email and password.
 */
public record LoginRequest(String email, String password) {
}
