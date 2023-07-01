package cz.map.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import cz.map.model.CircleData;
import cz.map.repository.CircleDataRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class CirleDataController {

	@Autowired
	private CircleDataRepository circleDataRepository;
	
	//get all data from CircleData
	@GetMapping("/circledata")
	public List<CircleData> getAllLogs(){
		return circleDataRepository.findAll();
		
	}	
	
	
}
