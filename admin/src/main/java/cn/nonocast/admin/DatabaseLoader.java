package cn.nonocast.admin;

import cn.nonocast.model.User;
import cn.nonocast.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private UserRepository userRepository;

    @Autowired
    public DatabaseLoader(UserRepository repository) {
        this.userRepository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        userRepository.save(new User("jean", "jean@shgbit.com"));
    }
}
