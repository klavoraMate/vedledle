package vedledle.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vedledle.dao.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {

}
