package vedledle.config;

import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vedledle.dao.model.animalProperties.DogBreed;
import vedledle.dao.model.animalProperties.DogBreedDeserializer;
import vedledle.dao.model.animalProperties.serializer.DogBreedSerializer;
import vedledle.dao.model.animalProperties.DogSize;
import vedledle.dao.model.animalProperties.serializer.DogSizeDeserializer;
import vedledle.dao.model.animalProperties.serializer.DogSizeSerializer;

@Configuration
public class JacksonConfig {
    @Bean
    public SimpleModule customEnumModule() {
        SimpleModule module = new SimpleModule();
        module.addSerializer(DogBreed.class, new DogBreedSerializer());
        module.addDeserializer(DogBreed.class, new DogBreedDeserializer());
        module.addSerializer(DogSize.class,new DogSizeSerializer());
        module.addDeserializer(DogSize.class,new DogSizeDeserializer());
        return module;
    }
}
