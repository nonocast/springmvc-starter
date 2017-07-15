package cn.nonocast.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@EnableJpaRepositories(basePackages="cn.nonocast.repository")
@EntityScan(basePackages="cn.nonocast.model")
@Controller
public class AdminApplication {
	@RequestMapping("/")
	public String home() {
		return "index";
	}

	public static void main(String[] args) {
		SpringApplication.run(AdminApplication.class, args);
	}
}