package app.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Laureate {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_seq")
    @SequenceGenerator(name = "id_seq", sequenceName = "laureate_seq_id", allocationSize = 1)
    private Long id;

        private String name;

    private String alias;

    @ManyToOne(optional = false)
    @JoinColumn(name = "field_id")
    private Field field;

    private Integer year;

    @Column(name = "short_biography")
    private String biography;

}
