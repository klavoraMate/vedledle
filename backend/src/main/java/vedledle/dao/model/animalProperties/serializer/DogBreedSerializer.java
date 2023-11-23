package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import vedledle.dao.model.animalProperties.DogBreed;

import java.io.IOException;

/**
 * The {@code DogBreedSerializer} class extends {@link JsonSerializer} and is responsible for serializing
 * {@link DogBreed} objects into JSON representations.
 */
public class DogBreedSerializer extends JsonSerializer<DogBreed> {

    /**
     * Serializes a {@link DogBreed} object into a JSON string.
     *
     * @param dogBreed              The {@link DogBreed} object to serialize.
     * @param jsonGenerator         The JSON generator.
     * @param serializerProvider    The serializer provider.
     * @throws IOException          If an I/O error occurs during serialization.
     */
    @Override
    public void serialize(DogBreed dogBreed, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeString(dogBreed.toString());
    }
}
