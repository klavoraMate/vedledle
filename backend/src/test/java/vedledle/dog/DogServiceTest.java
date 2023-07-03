package vedledle.dog;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import vedledle.dog.dto.DogDTO;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@SuppressWarnings("deprecation")
class DogServiceTest {
    @Mock
    private DogDAO dogDAO;

    private DogService dogService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        this.dogService = new DogService(dogDAO);
    }
    @Test
    void find() {
        int id = 1;
        Dog dog = new Dog(id, "Liza", "German Shepherd", 6);
        when(dogDAO.find(anyInt())).thenReturn(dog);

        DogDTO dogDTO = dogService.find(id);

        assertEquals(new DogDTO(dog), dogDTO);
    }
    @Test
    void findAll() {
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog(1, "Liza", "German Shepherd", 6));
        dogs.add(new Dog(2, "Vadóc", "German Shepherd", 8));
        when(dogDAO.findAll()).thenReturn(dogs);

        List<DogDTO> dogDTOs = dogService.findAll();

        assertEquals(dogs.size(), dogDTOs.size());
        assertEquals(new DogDTO(dogs.get(0)), dogDTOs.get(0));
        assertEquals(new DogDTO(dogs.get(1)), dogDTOs.get(1));
    }

}
