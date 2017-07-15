package cn.nonocast.admin;

import cn.nonocast.model.User;
import cn.nonocast.repository.MeetingRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableJpaRepositories(basePackages="cn.nonocast.repository")
@EntityScan(basePackages="cn.nonocast.model")
@RestController
public class AdminApplication { @RequestMapping("/") public String home() {
		return "admin";
	}

	public static void main(String[] args) {
		SpringApplication.run(AdminApplication.class, args);
	}
}