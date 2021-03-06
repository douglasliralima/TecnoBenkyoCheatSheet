package com.course.rabbitmqproducer;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.course.rabbitmqproducer.entity.Employee;
import com.course.rabbitmqproducer.producer.EmployeeJsonProducer;

@SpringBootApplication
// @EnableScheduling
public class RabbitmqProducerApplication implements CommandLineRunner {

	@Autowired
	private EmployeeJsonProducer employeeJsonProducer;

	public static void main(String[] args) {
		SpringApplication.run(RabbitmqProducerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		for (int i = 0; i < 5; i++) {
			var e = new Employee("" + i, "Employee " + i, LocalDate.now());
			employeeJsonProducer.sendMessage(e);
		}
	}

}
