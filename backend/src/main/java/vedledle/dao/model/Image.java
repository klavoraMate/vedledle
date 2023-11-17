package vedledle.dao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * The {@code Image} class represents an image entity in the application.
 * It is annotated as an {@link Entity} and is used to store image data in the database.
 */
@Entity
@Getter
@Setter
public class Image {
    /**
     * The unique identifier for the image.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    /**
     * The name of the image.
     */
    private String name;
    /**
     * The content type of the image, such as "image/png" or "image/jpeg".
     */
    private String contentType;
    /**
     * The binary data of the image stored as a BLOB (Binary Large Object).
     */
    private byte[] data;
}
