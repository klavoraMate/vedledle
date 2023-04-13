package vedledle.dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vedledle.dog.dto.DogDTO;

import java.util.List;

@RestController
@RequestMapping("api/dog")
public class DogController {
    private final DogService dogService;

    @Autowired
    public DogController(DogService dogService) {
        this.dogService = dogService;
    }

    @GetMapping("/all")
    public List<DogDTO> findAll() {
        return dogService.findAll();
    }
}
