package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import vedledle.dao.model.animalProperties.DogBreed;

import java.io.IOException;

/**
 * The {@code DogBreedDeserializer} class extends {@link StdDeserializer} and is responsible for deserializing
 * JSON representations of {@link DogBreed} objects.
 */
public class DogBreedDeserializer extends StdDeserializer<DogBreed> {
    /**
     * Constructs a new {@code DogBreedDeserializer} instance.
     */
    public DogBreedDeserializer() {
        super(DogBreed.class);
    }

    /**
     * Deserializes a JSON node into a {@link DogBreed} object.
     *
     * @param jsonParser              The JSON parser.
     * @param deserializationContext  The deserialization context.
     * @return                        The deserialized {@link DogBreed} object.
     * @throws IOException            If an I/O error occurs during deserialization.
     */
    @Override
    public DogBreed deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        String breedName = node.asText().toUpperCase().replace(" ", "_");
        return DogBreed.valueOf(breedName);
    }
}
