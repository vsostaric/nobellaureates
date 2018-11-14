package app.service;

import app.model.Field;
import app.model.Laureate;

import java.util.List;

public interface LaureateService {

    Laureate findById(Long id);

    List<Laureate> findAll();

    List<Field> findAllFields();

    Laureate save(Laureate laureate);

    void delete(Laureate laureate);

}
