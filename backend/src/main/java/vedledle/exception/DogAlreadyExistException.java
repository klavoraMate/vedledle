package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a dog is already added to the database.
 * It is annotated with {@link ResponseStatus} to indicate an HTTP 409 status.
 */
@ResponseStatus(HttpStatus.CONFLICT)
public class DogAlreadyExistException extends RuntimeException {
    /**
     * The default error message for dog already exist exception.
     */
    private static final String ERROR_MASSAGE = "There is a dog already added with this name ";

    /**
     * Constructs a new {@code DogAlreadyExistException} with the specified dog name.
     *
     * @param dogName The name of the dog that is already added.
     */
    public DogAlreadyExistException(String dogName) {
        super(ERROR_MASSAGE + "[" + dogName + "]");
    }
}
