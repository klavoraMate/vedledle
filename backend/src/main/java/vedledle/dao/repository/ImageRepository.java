package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vedledle.dao.model.Image;

import java.util.List;
import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image> findByName(String name);
    @Query("SELECT name FROM Image")
    List<String> findNameBy();
}
