package com.backend.taskmanager;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskmanagerApplication implements CommandLineRunner {
    @Value("${server.port:8080}")
    private String serverPort;

    public static void main(String[] args) {
        SpringApplication.run(TaskmanagerApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("\n----------------------------------------------------------");
        System.out.println("✅ acesso ao banco de dados ok");
        System.out.println("🚀 rodando porta: " + serverPort);
        System.out.println("----------------------------------------------------------\n");
    }
}
