package cz.map.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


import cz.map.model.RouteColor;
import cz.map.repository.RouteColorRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class RouteColorController {

	@Autowired
	private RouteColorRepository routeColorRepository;
	
	//get all data from RouteColor
	@GetMapping("/routecolor")
	public List<RouteColor> getAllLogs(){
		return routeColorRepository.findAll();
		
	}	
	
	
}

