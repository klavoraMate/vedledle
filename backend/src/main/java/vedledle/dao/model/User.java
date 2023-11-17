package vedledle.dao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

/**
 * The {@code User} class represents a user entity in the application.
 * It is annotated as an {@link Entity} and is used to store user information in the database.
 */
@Getter
@Entity
@Builder
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Table(name = "client")
public class User {
    /**
     * The unique identifier for the user.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    /**
     * The name of the user.
     */
    private String name;
    /**
     * The email address of the user.
     */
    private String email;
    /**
     * The role of the user. This field is marked as read-only during serialization.
     */
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String role;
    /**
     * The password of the user. This field is marked as write-only during deserialization.
     */
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

}
