package vedledle.dao.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
}
