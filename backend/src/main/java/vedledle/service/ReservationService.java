package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import vedledle.controller.dto.GroomingTimeSlot;
import vedledle.dao.model.Dog;
import vedledle.dao.model.OpeningHours;
import vedledle.dao.model.Reservation;
import vedledle.dao.model.User;
import vedledle.dao.repository.ReservationRepository;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * The {@code ReservationService} class provides services related to reservation operations in the application.
 * It interacts with the {@link ReservationRepository} to perform various tasks.
 */
@Service
@RequiredArgsConstructor
public class ReservationService {
    /**
     * The repository for accessing and managing reservation data.
     */
    private final ReservationRepository repository;
    /**
     * The service for handling user-related operations.
     */
    private final UserService userService;
    /**
     * The service for handling dog-related operations.
     */
    private final DogService dogService;

    /**
     * Adds a new reservation based on the users email,
     * the dogs name and non JsonIgnore properties of the reservation.
     *
     * @param email       email of the user
     * @param dogName     name of the dog
     * @param reservation reservation object that contains the non JsonIgnore properties
     */
    public void add(String email, String dogName, Reservation reservation) {
        User user = userService.findByEmail(email);
        Dog dog = dogService.getByNameAndOwner(dogName, user);
        reservation.setDog(dog);
        reservation.setUser(user);
        repository.save(reservation);
    }

    /**
     * Retrieves all reservations from the database.
     *
     * @return The list of reservations.
     */
    public List<Reservation> getAll() {
        return repository.findAll();
    }

    public List<Reservation> getReservationsBetweenDates(LocalDateTime startDate, LocalDateTime endDate) {
        return repository.findAllByStartDateBetween(startDate, endDate, Sort.by("startDate"));
    }

    public List<GroomingTimeSlot> getAvailableTimeSlots(String email, String dogName, boolean isShowerOnly) {
        User user = userService.findByEmail(email);
        Dog dog = dogService.getByNameAndOwner(dogName, user);
        int duration = calculateDuration(dog, isShowerOnly);
        List<Reservation> reservations = getReservationsBetweenDates(LocalDateTime.now(), LocalDateTime.now().plusDays(8));
        DayOfWeek dayOfWeek = LocalDateTime.now().getDayOfWeek();
        List<GroomingTimeSlot> availableTimeSlots = new LinkedList<>();

        for (int i = 0; i < 7; i++) {
            OpeningHours openingHours = OpeningHours.valueOf(dayOfWeek.toString());
            if (openingHours.getOpenHour() != -1) {
                LocalDateTime start = LocalDateTime.now().withHour(openingHours.getOpenHour()).withMinute(openingHours.getOpenMinute()).plusDays(i);
                LocalDateTime end = LocalDateTime.now().withHour(openingHours.getCloseHour()).withMinute(openingHours.getCloseMinute()).plusDays(i);
                while (start.isBefore(end)) {
                    LocalDateTime tempEnd = start.plusMinutes(duration);
                    for (Reservation reservation : reservations) {
                        if ((reservation.getStartDate().isBefore(tempEnd) && reservation.getEndDate().isAfter(start)) ||
                                (reservation.getStartDate().isEqual(tempEnd) || reservation.getEndDate().isEqual(start))) {
                            start = reservation.getEndDate();
                        }
                        else {
                            availableTimeSlots.add(new GroomingTimeSlot(start, tempEnd));
                            start = tempEnd;
                        }
                        tempEnd = start.plusMinutes(duration);
                    }

                }
            }
            dayOfWeek = dayOfWeek.plus(1);
        }

        return availableTimeSlots;
    }

    private int calculateDuration(Dog dog, boolean isShowerOnly) {
        return dog.groomingTime() + (isShowerOnly ? 30 : 60);
    }
}
