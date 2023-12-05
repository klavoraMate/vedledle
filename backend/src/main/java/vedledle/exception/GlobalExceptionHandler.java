package vedledle.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * The {@code GlobalExceptionHandler} class serves as a global exception handler for handling specific exceptions
 * and providing consistent error responses across the application.
 *
 * This class extends {@link ResponseEntityExceptionHandler} to leverage its built-in exception handling features.
 *
 * It is annotated with {@link ControllerAdvice}, indicating that it provides advice to all controllers in the application.
 */
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * Handles the {@link DogAlreadyExistException} by returning a custom error response.
     *
     * @param ex The {@link DogAlreadyExistException} instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    @ExceptionHandler(DogAlreadyExistException.class)
    protected ResponseEntity<Object> handleDogAlreadyExistException(DogAlreadyExistException ex ) {
       return defaultErrorResponse(ex);
    }

    /**
     * Handles the {@link DogNotFoundException} by returning a custom error response.
     *
     * @param ex The {@link DogNotFoundException} instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    @ExceptionHandler(DogNotFoundException.class)
    protected ResponseEntity<Object> handleDogNotFoundException(DogNotFoundException ex){
        return defaultErrorResponse(ex);
    }

    /**
     * Handles the {@link ImageNotFoundException} by returning a custom error response.
     *
     * @param ex The {@link ImageNotFoundException} instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    @ExceptionHandler(ImageNotFoundException.class)
    protected ResponseEntity<Object> handleImageNotFoundException(ImageNotFoundException ex){
        return defaultErrorResponse(ex);
    }

    /**
     * Handles the {@link UserNotFoundException} by returning a custom error response.
     *
     * @param ex The {@link UserNotFoundException} instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    @ExceptionHandler(UserNotFoundException.class)
    protected ResponseEntity<Object> handleUserNotFoundException(UserNotFoundException ex){
        return defaultErrorResponse(ex);
    }

    /**
     * Handles the {@link TimePeriodConflictException} by returning a custom error response.
     *
     * @param ex The {@link TimePeriodConflictException} instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    @ExceptionHandler(TimePeriodConflictException.class)
    protected ResponseEntity<Object> handleTimePeriodConflictException(TimePeriodConflictException ex){
        return defaultErrorResponse(ex);
    }

    /**
     * Creates a default error response with timestamp and error message.
     *
     * @param ex The exception instance.
     * @return A {@link ResponseEntity} containing a custom error response.
     */
    private ResponseEntity<Object> defaultErrorResponse(Exception ex){
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());
        HttpStatus status = getHttpStatusFromException(ex);
        return new ResponseEntity<>(body,status);
    }

    /**
     * Retrieves the HTTP status code from the exception's {@link ResponseStatus} annotation,
     * or defaults to {@link HttpStatus#INTERNAL_SERVER_ERROR} if not present.
     *
     * @param ex The exception instance.
     * @return The HTTP status code.
     */
    private HttpStatus getHttpStatusFromException(Exception ex) {
        ResponseStatus annotation = ex.getClass().getAnnotation(ResponseStatus.class);
        if (annotation != null) {
            return annotation.value();
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
