package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class DogAlreadyHasReservationException extends RuntimeException{
    /**
     * The default error message for dog already exist exception.
     */
    private static final String ERROR_MASSAGE = "Dog already has an upcoming reservation";
    /**
     * Constructs a new {@code DogAlreadyExistException} with the specified dog name.
     */
    public DogAlreadyHasReservationException(String dogName) {
        super(ERROR_MASSAGE + "[" + dogName + "]");
    }

}
