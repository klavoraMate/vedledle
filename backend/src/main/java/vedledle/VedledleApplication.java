package vedledle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

/**
 * The {@code VedledleApplication} class is the entry point of the Vedledle application.
 * It uses Spring Boot and is annotated with {@link SpringBootApplication} for automatic configuration.
 * Additionally, it enables method-level security with the {@link EnableMethodSecurity} annotation.
 */
@EnableMethodSecurity
@SpringBootApplication
public class VedledleApplication {
    /**
     * The main method that starts the Vedledle application.
     *
     * @param args The command line arguments passed to the application.
     */
    public static void main(String[] args) {
        SpringApplication.run(VedledleApplication.class, args);
    }
}
