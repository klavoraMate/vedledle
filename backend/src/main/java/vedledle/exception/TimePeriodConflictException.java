package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class TimePeriodConflictException extends RuntimeException {
    /**
     * The default error message for time period conflict exception.
     */
    private static final String ERROR_MASSAGE = "Time period conflict ";

    /**
     * Constructs a new {@code TimePeriodConflictException}
     */
    public TimePeriodConflictException() {
        super(ERROR_MASSAGE);
    }
}
