package cz.map.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="circle_data")
public class CircleData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name="souradnice_n")
	private double souradniceN;
	
	@Column(name="souradnice_s")
	private double souradniceS;
	
	@Column(name="rsrp")
	private int rsrp;

	public CircleData() {
		super();
	}

	public CircleData(double souradniceN, double souradniceS, int rsrp) {
		super();
		this.souradniceN = souradniceN;
		this.souradniceS = souradniceS;
		this.rsrp = rsrp;
	}

	public long getId() {
		return id;
	}

	

	public double getSouradniceN() {
		return souradniceN;
	}

	public void setSouradniceN(double souradniceN) {
		this.souradniceN = souradniceN;
	}

	public double getSouradniceS() {
		return souradniceS;
	}

	public void setSouradniceS(double souradniceS) {
		this.souradniceS = souradniceS;
	}

	public int getRsrp() {
		return rsrp;
	}

	public void setRsrp(int rsrp) {
		this.rsrp = rsrp;
	}
	
	
	
}
