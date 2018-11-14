package app.repository;

import app.model.Field;
import app.model.Laureate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.PostConstruct;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class LaureateRepositoryTest {

    private LaureateRepository laureateRepository;

    private List<Laureate> laureates;

    @Before
    public void before() {
        laureates = laureateRepository.findAll();
    }

    @Test
    public void testCreate() {

        assertThat(laureates).isNotEmpty();

        final Laureate laureate = new Laureate();
        laureate.setAlias("");
        laureate.setName("Ivo Andrić");
        laureate.setYear(1961);
        laureate.setField(getField("Literature"));

        Laureate persisted = laureateRepository.save(laureate);
        assertThat(persisted.getId()).isNotNull();

        final Long id = persisted.getId();
        persisted = laureateRepository.findById(id).orElse(null);
        assertThat(persisted).isNotNull();

        laureateRepository.deleteById(id);

    }

    @Test
    public void testReadAll() {
        assertThat(laureates).isNotEmpty();
    }

    @Test
    public void testUpdate() {

        Laureate laureate = laureates.get(0);

        final Long id = laureate.getId();
        final String name = laureate.getName();

        final String newUpdatedName = "Meta WorldPeace";
        laureate.setName(newUpdatedName);

        laureateRepository.save(laureate);

        laureate = laureateRepository.findById(id).orElse(null);

        assertThat(laureate).isNotNull();
        assertThat(laureate.getName()).isEqualTo(newUpdatedName);

    }

    @Test
    public void testDelete() {

        Laureate laureate = laureates.get(0);

        final Long id = laureate.getId();

        assertThat(laureateRepository.findById(id).orElse(null)).isNotNull();
        laureateRepository.deleteById(id);
        assertThat(laureateRepository.findById(id).orElse(null)).isNull();

    }

    private Field getField(final String fieldName) {
        return laureates
                .stream()
                .filter(laureate -> fieldName.equals(laureate.getField().getName()))
                .map(laureate -> laureate.getField())
                .findFirst()
                .get();
    }

    @Autowired
    public void setLaureateRepository(LaureateRepository laureateRepository) {
        this.laureateRepository = laureateRepository;
    }

}
