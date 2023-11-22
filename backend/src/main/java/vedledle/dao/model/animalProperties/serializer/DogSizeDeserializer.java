package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import vedledle.dao.model.animalProperties.DogSize;

import java.io.IOException;

public class DogSizeDeserializer extends StdDeserializer<DogSize> {
    public DogSizeDeserializer() {
        super(DogSize.class);
    }

    @Override
    public DogSize deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JacksonException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        String size = node.asText().toUpperCase();
        return DogSize.valueOf(size);
    }
}
