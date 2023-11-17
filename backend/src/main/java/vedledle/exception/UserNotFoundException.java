package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a user is not found.
 * It is annotated with {@link ResponseStatus} to indicate an HTTP 404 status.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException  extends RuntimeException{
    /**
     * The default error message for user not found exception.
     */
    private static final String ERROR_MASSAGE = "User not found ";

    /**
     * Constructs a new {@code UserNotFoundException} with the specified username.
     *
     * @param userName The username that was not found.
     */
    public UserNotFoundException(String userName){
        super(ERROR_MASSAGE+"["+userName+"]");
    }
}
