package ru.hackathon.server;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ru.hackathon.server.common.ServerIpAddress;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(ServerIpAddress.SERVER_IP)
                .allowedMethods("POST", "GET", "PUT", "DELETE")
                .allowedHeaders("*");
    }

}