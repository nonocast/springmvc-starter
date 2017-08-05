package cn.nonocast.admin;

import cn.nonocast.model.Document;
import cn.nonocast.model.Meeting;
import cn.nonocast.model.User;
import cn.nonocast.repository.DocumentRepository;
import cn.nonocast.repository.MeetingRepository;
import cn.nonocast.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

@Component
public class DatabaseLoader implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MeetingRepository meetingRepository;

    @Autowired
    private DocumentRepository documentRepository;


    @Override
    public void run(String... strings) throws Exception {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        userRepository.save(new User("admin", "admin@yahoo.com", encoder.encode("123456"), "ADMIN"));

        for(int i = 1; i <= 500; ++i) {
            userRepository.save(new User(String.format("测试用户-%03d", i), String.format("test-%03d@yahoo.com", i), "", "USER"));
        }

        int documentCount = 0;
        for(int i = 1; i <= 100; ++i) {
            Meeting meeting = new Meeting(String.format("会议-%03d", i), new Date(), "曹晖", "", "admin", new Date());
            meetingRepository.save(meeting);

            int p = ThreadLocalRandom.current().nextInt(1, 80);
            if(i == 1) p = 5;
            if(i == 2) p = 22;
            if(i == 3) p = 0;

            for(int j = 1; j <= p; ++j) {
                String title = String.format("文档-%03d", ++documentCount);
                Document document = new Document(title, title + ".pdf", 1024l, "admin", new Date());
                document.setMeeting(meeting);
                documentRepository.save(document);
            }
        }
    }
}
