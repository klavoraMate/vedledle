package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import vedledle.dao.model.animalProperties.DogBreed;

import java.io.IOException;

public class DogBreedSerializer extends JsonSerializer<DogBreed> {
    @Override
    public void serialize(DogBreed dogBreed, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeString(dogBreed.toString());
    }
}
