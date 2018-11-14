package app.repository;

import app.model.Laureate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaureateRepository extends JpaRepository<Laureate, Long> {
}
