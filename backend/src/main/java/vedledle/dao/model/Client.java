package vedledle.dao.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Client {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int dogId;
}
