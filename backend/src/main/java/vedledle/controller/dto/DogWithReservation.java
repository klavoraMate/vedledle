package vedledle.controller.dto;

import vedledle.dao.model.Dog;

import java.time.LocalDateTime;

/**
 * The {@code DogWithReservation} class represents a dog with a reservation.
 * It contains the dog and the start and end date of the reservation.
 * This start and end date is null if the dog does not have an upcoming reservation.
 */
public record DogWithReservation(Dog dog, LocalDateTime start, LocalDateTime end) {
}
