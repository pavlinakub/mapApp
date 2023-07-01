package cz.map.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import cz.map.model.RouteColor;




@Repository
public interface RouteColorRepository extends JpaRepository<RouteColor,Long> {

}
