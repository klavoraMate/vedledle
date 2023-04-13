package vedledle.dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vedledle.dog.dto.DogDTO;

import java.util.List;

@Service
public class DogService {

    private final DogDAO dogDAO;

    @Autowired
    public DogService(DogDAO dogDAO) {
        this.dogDAO = dogDAO;
    }

    public List<DogDTO> findAll() {
        return dogDAO.findAll().stream().map(DogDTO::new).toList();
    }
}
