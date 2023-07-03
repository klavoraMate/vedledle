package vedledle.dog;

import java.util.List;

public interface DogDAO {
    List<Dog> findAll();
    Dog find(Integer dogId);
}
