package vedledle.dao.model.animalProperties;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class DogBreedDeserializer extends StdDeserializer<DogBreed> {
    public DogBreedDeserializer() {
        super(DogBreed.class);
    }

    @Override
    public DogBreed deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        String breedName = node.asText().toUpperCase().replace(" ", "_");
        return DogBreed.valueOf(breedName);
    }
}
