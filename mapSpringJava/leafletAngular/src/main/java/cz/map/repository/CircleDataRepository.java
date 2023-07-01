package cz.map.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cz.map.model.CircleData;




@Repository
public interface CircleDataRepository extends JpaRepository<CircleData,Long> {

}
