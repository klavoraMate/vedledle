package vedledle.controller.dto;

/**
 * The {@code LoginResponse} class represents the response containing a token after a successful user login.
 * It is used to pass the token to the frontend.
 */
public record LoginResponse(String token) {
}
