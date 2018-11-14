package app.controller;

import app.model.Field;
import app.model.Laureate;
import app.service.LaureateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laureate")
public class LaureateController {

    private LaureateService laureateService;

    @Autowired
    public LaureateController(final LaureateService laureateService) {
        this.laureateService = laureateService;
    }

    @GetMapping(value = "/getFields")
    public List<Field> getFields() {
        return laureateService.findAllFields();
    }

    @GetMapping(value = "/getLaureates")
    public List<Laureate> getLaureates() {
        return laureateService.findAll();
    }

    @GetMapping(value = "/getLaureate/{id}")
    public Laureate getLaurate(@PathVariable final Long id) {
        return laureateService.findById(id);
    }

    @PostMapping(value = "/save",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Laureate>> save(final @RequestBody Laureate laureate) {
        laureateService.save(laureate);
        return ResponseEntity.ok(getLaureates());
    }

    @PostMapping(value = "/delete",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Laureate>> delete(final @RequestBody Laureate laureate) {
        laureateService.delete(laureate);
        return ResponseEntity.ok(getLaureates());
    }

}
