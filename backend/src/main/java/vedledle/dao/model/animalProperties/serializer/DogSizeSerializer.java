package vedledle.dao.model.animalProperties.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import vedledle.dao.model.animalProperties.DogSize;

import java.io.IOException;

public class DogSizeSerializer extends JsonSerializer<DogSize> {
    @Override
    public void serialize(DogSize dogSize, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeString(dogSize.toString());
    }
}
