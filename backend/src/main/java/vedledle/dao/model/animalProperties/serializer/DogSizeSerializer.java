package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import vedledle.dao.model.animalProperties.DogSize;

import java.io.IOException;

/**
 * The {@code DogSizeSerializer} class extends {@link JsonSerializer} and is responsible for serializing
 * {@link DogSize} objects into JSON representations.
 */
public class DogSizeSerializer extends JsonSerializer<DogSize> {
    /**
     * Serializes a {@link DogSize} object into a JSON string.
     *
     * @param dogSize               The {@link DogSize} object to serialize.
     * @param jsonGenerator         The JSON generator.
     * @param serializerProvider    The serializer provider.
     * @throws IOException          If an I/O error occurs during serialization.
     */
    @Override
    public void serialize(DogSize dogSize, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeString(dogSize.toString());
    }
}
