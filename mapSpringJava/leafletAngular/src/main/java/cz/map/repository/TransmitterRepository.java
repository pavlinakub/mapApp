package cz.map.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import cz.map.model.Transmitter;




@Repository
public interface TransmitterRepository extends JpaRepository<Transmitter,Long> {

}
