package vedledle.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vedledle.dao.repository.ReservationRepository;

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

}
