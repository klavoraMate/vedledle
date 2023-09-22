package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException  extends RuntimeException{
    private static final String ERROR_MASSAGE = "User not found ";

    public UserNotFoundException(String userName){
        super(ERROR_MASSAGE+"["+userName+"]");
    }
}
