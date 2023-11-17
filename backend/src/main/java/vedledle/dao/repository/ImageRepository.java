package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vedledle.dao.model.Image;

import java.util.List;
import java.util.Optional;

/**
 * The {@code ImageRepository} interface provides access to image data in the database.
 * It extends {@link JpaRepository} to perform CRUD operations on the {@link Image} entity.
 */
public interface ImageRepository extends JpaRepository<Image,Long> {
    /**
     * Finds an image by its name.
     *
     * @param name The name of the image to find.
     * @return An {@link Optional} containing the image with the specified name, if found.
     */
    Optional<Image> findByName(String name);

    /**
     * Retrieves the names of all stored images.
     *
     * @return The list of image names. If no image found the list is empty.
     */
    @Query("SELECT name FROM Image")
    List<String> findNameBy();
}
