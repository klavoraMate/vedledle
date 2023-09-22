package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DogNotFoundException extends RuntimeException {
    private static final String ERROR_MASSAGE = "Dog not found ";

    public DogNotFoundException(String dogName) {
        super(ERROR_MASSAGE + "[" + dogName + "]");
    }

}
