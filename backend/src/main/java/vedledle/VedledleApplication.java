package vedledle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("vedledle.reservation")
public class VedledleApplication {

    public static void main(String[] args) {
        SpringApplication.run(VedledleApplication.class, args);
    }
}
