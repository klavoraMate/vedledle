package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import vedledle.dao.model.animalProperties.DogSize;

import java.io.IOException;

/**
 * The {@code DogSizeDeserializer} class extends {@link StdDeserializer} and is responsible for deserializing
 * JSON representations of {@link DogSize} objects.
 */
public class DogSizeDeserializer extends StdDeserializer<DogSize> {
    /**
     * Constructs a new {@code DogSizeDeserializer} instance.
     */
    public DogSizeDeserializer() {
        super(DogSize.class);
    }

    /**
     * Deserializes a JSON node into a {@link DogSize} object.
     *
     * @param jsonParser              The JSON parser.
     * @param deserializationContext  The deserialization context.
     * @return                        The deserialized {@link DogSize} object.
     * @throws IOException            If an I/O error occurs during deserialization.
     * @throws JacksonException       If a Jackson-specific exception occurs during deserialization.
     */
    @Override
    public DogSize deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        String size = node.asText().toUpperCase();
        return DogSize.valueOf(size);
    }
}
