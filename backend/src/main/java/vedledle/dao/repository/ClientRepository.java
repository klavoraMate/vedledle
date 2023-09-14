package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vedledle.dao.model.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {
    List<Client> findByEmail(String email);
}
