package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vedledle.dao.model.Image;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image> findByName(String name);
}
