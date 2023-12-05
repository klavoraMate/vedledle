package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when unauthorized access is attempted.
 * It is annotated with {@link ResponseStatus} to indicate an HTTP 403 status.
 */
@ResponseStatus(HttpStatus.FORBIDDEN)
public class UnauthorizedAccessException extends RuntimeException {
    /**
     * Constructs a new {@code UnauthorizedAccessException} with the specified error message.
     * @param message
     */
    public UnauthorizedAccessException(String message) {
        super(message);
    }
}
