package vedledle.client;

import java.util.List;

public interface ClientDAO {
    List<Client> findAll();

    Client find(Integer clientId);
}
