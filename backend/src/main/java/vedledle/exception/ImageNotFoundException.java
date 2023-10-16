package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ImageNotFoundException extends RuntimeException {

    private static final String ERROR_MASSAGE = "Image not found ";

    public ImageNotFoundException(String imageName) {
        super(ERROR_MASSAGE + "[" + imageName + "]");
    }
}
