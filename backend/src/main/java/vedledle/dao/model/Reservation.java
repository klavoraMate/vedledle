package vedledle.dao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * The {@code Reservation} class represents a reservation entity in the application.
 * It is annotated as an {@link Entity} and is used to store reservation information in the database.
 */
@Getter
@Entity
@Builder
@NoArgsConstructor(force = true)
@AllArgsConstructor
public class Reservation {
    /**
     * The unique identifier for the reservation.
     */
    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;

    /**
     * The start date of the reservation.
     */
    private LocalDate startDate;

    /**
     * The end date of the reservation.
     */
    private LocalDate endDate;

    /**
     * The user who made the reservation. It is mapped as a Many-to-One relationship with the {@link User} entity.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    @JsonIgnore
    private User user;

    /**
     * The dog for which the reservation was made. It is mapped as a Many-to-One relationship with the {@link Dog} entity.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dog_id")
    @JsonIgnore
    private Dog dog;
}
