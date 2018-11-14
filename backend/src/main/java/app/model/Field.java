package app.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Field {

    @Id
    private Long id;

    private String name;
}
