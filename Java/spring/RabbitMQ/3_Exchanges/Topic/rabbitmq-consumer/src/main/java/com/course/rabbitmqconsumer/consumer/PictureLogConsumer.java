package com.course.rabbitmqconsumer.consumer;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import com.course.rabbitmqconsumer.entity.Picture;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class PictureLogConsumer {

	private ObjectMapper objectMapper = new ObjectMapper();
	
	private static final Logger log = LoggerFactory.getLogger(PictureLogConsumer.class);
	
	@RabbitListener(queues = "q.picture.log")
	public void listen(String message) throws JsonParseException, JsonMappingException, IOException {
		var p = objectMapper.readValue(message, Picture.class);
		log.info("On log : {}", p.toString());
	}
	
}
