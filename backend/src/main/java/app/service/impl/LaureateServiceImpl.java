package app.service.impl;

import app.model.Field;
import app.model.Laureate;
import app.repository.FieldRepository;
import app.repository.LaureateRepository;
import app.service.LaureateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaureateServiceImpl implements LaureateService {

    private LaureateRepository laureateRepository;

    private FieldRepository fieldRepository;

    @Autowired
    public LaureateServiceImpl(final LaureateRepository laureateRepository,
                               final FieldRepository fieldRepository) {
        this.laureateRepository = laureateRepository;
        this.fieldRepository = fieldRepository;
    }

    @Override
    public Laureate findById(Long id) {
        return laureateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Laureate with id " + id + " not found"));
    }

    @Override
    public List<Laureate> findAll() {
        return laureateRepository.findAll(Sort.by("year"));
    }

    @Override
    public List<Field> findAllFields() {
        return fieldRepository.findAll();
    }

    @Override
    public Laureate save(Laureate laureate) {
        return laureateRepository.save(laureate);
    }

    @Override
    public void delete(Laureate laureate) {
        laureateRepository.delete(laureate);
    }

}
