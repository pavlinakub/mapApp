package cz.map.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="transmitter")
public class Transmitter {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		@Column(name="name_transmitter")
		private String name;
		
		@Column(name="souradnice_n")
		private double souradniceN;
		
		@Column(name="souradnice_s")
		private double souradniceS;
		
		@Column(name="image_path")
		private String imagePath;
		
		public Transmitter() {
			super();
		}

		public Transmitter(String name, double souradniceN, double souradniceS, String imagePath) {
			super();
			this.name = name;
			this.souradniceN = souradniceN;
			this.souradniceS = souradniceS;
			this.imagePath = imagePath;
		}

		public long getId() {
			return id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
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

		public String getImagePath() {
			return imagePath;
		}

		public void setImagePath(String imagePath) {
			this.imagePath = imagePath;
		}
		
		
}
