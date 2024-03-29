package vedledle.dao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import vedledle.dao.model.animalProperties.DogBreed;
import vedledle.dao.model.animalProperties.DogSize;

/**
 * The {@code Dog} class represents a dog entity in the application.
 * It is annotated as an {@link Entity} and is used to map to the corresponding database table.
 */
@Getter
@Setter
@Entity
public class Dog {
    /**
     * The unique identifier for the dog.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    /**
     * The name of the dog.
     */
    private String name;
    /**
     * The breed of the dog.
     */
    @Enumerated(EnumType.STRING)
    private DogBreed breed;
    /**
     * The size of the dog.
     */
    @Enumerated(EnumType.STRING)
    private DogSize size;
    /**
     * The age of the dog.
     */
    private int age;

    /**
     * The owner of the dog. It is mapped as a Many-to-One relationship with the {@link User} entity.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    @JsonIgnore
    private User owner;

    public int groomingTime() {
        return breed.getGroomingTime() + size.getGroomingTime();
    }
}
