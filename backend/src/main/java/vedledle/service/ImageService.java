package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.model.Image;
import vedledle.dao.repository.ImageRepository;
import vedledle.exception.ImageNotFoundException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository repository;
    public Image getByName(String name){
        Optional<Image> image = repository.findByName(name);
        if (image.isPresent()){
            return image.get();
        } else {
            throw new ImageNotFoundException(name);
        }
    }


}
