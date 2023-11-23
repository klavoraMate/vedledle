package vedledle.config;

import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vedledle.dao.model.animalProperties.DogBreed;
import vedledle.dao.model.animalProperties.DogSize;
import vedledle.dao.model.animalProperties.serializer.DogBreedDeserializer;
import vedledle.dao.model.animalProperties.serializer.DogBreedSerializer;
import vedledle.dao.model.animalProperties.serializer.DogSizeDeserializer;
import vedledle.dao.model.animalProperties.serializer.DogSizeSerializer;

/**
 * The {@code JacksonConfig} class is a configuration class for customizing the Jackson ObjectMapper
 * to handle serialization and deserialization of custom enum types related to animal properties.
 *
 * It defines a {@link SimpleModule} named {@code customEnumModule} containing serializers and deserializers
 * for the {@link DogBreed} and {@link DogSize} enums.
 *
 * The configuration is used to customize the behavior of Jackson when serializing and deserializing these enum types.
 */
@Configuration
public class JacksonConfig {
    /**
     * Creates and configures a {@link SimpleModule} named {@code customEnumModule}.
     *
     * This module includes custom serializers and deserializers for the {@link DogBreed} and {@link DogSize} enums.
     *
     * @return A configured {@link SimpleModule} for handling custom enum types during JSON serialization and deserialization.
     */
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
