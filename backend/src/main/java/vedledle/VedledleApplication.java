package vedledle;

import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

@SpringBootApplication
@ComponentScan("vedledle.reservation")
@ComponentScan("vedledle.config")
public class VedledleApplication {

    public static void main(String[] args) {
        SpringApplication.run(VedledleApplication.class, args);
    }

//    @Bean
//    public Jackson2ObjectMapperBuilder jacksonBuilder() {
//        Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();
//        builder.featuresToDisable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
//        return builder;
//    }

}
