package cn.nonocast.admin;

import cn.nonocast.admin.storage.StorageProperties;
import cn.nonocast.admin.storage.StorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableJpaRepositories(basePackages="cn.nonocast.repository")
@EntityScan(basePackages="cn.nonocast.model")
@EnableConfigurationProperties(StorageProperties.class)
@Controller
public class AdminApplication {
	private static final Logger logger = LoggerFactory.getLogger(AdminApplication.class);

	@RequestMapping("/")
	public String home() {
		return "index";
	}

	public static void main(String[] args) {
		SpringApplication.run(AdminApplication.class, args);
	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			// storageService.deleteAll();
			 storageService.init();
			logger.info("storage: " + storageService.getLocation().toString());

		};
	}
}