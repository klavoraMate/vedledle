package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception thrown when an image is not found.
 * It is annotated with {@link ResponseStatus} to indicate an HTTP 404 status.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ImageNotFoundException extends RuntimeException {
    /**
     * The default error message for image not found exception.
     */
    private static final String ERROR_MASSAGE = "Image not found ";

    /**
     * Constructs a new {@code ImageNotFoundException} with the specified image name.
     *
     * @param imageName The name of the image that was not found.
     */
    public ImageNotFoundException(String imageName) {
        super(ERROR_MASSAGE + "[" + imageName + "]");
    }
}
