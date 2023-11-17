package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when a dog is not found.
 * It is annotated with {@link ResponseStatus} to indicate an HTTP 404 status.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class DogNotFoundException extends RuntimeException {
    /**
     * The default error message for dog not found exception.
     */
    private static final String ERROR_MASSAGE = "Dog not found ";

    /**
     * Constructs a new {@code DogNotFoundException} with the specified dog name.
     *
     * @param dogName The name of the dog that was not found.
     */
    public DogNotFoundException(String dogName) {
        super(ERROR_MASSAGE + "[" + dogName + "]");
    }

}
