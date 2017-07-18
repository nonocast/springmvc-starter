package cn.nonocast.admin;

import cn.nonocast.model.Document;
import cn.nonocast.model.Meeting;
import cn.nonocast.model.User;
import cn.nonocast.repository.DocumentRepository;
import cn.nonocast.repository.MeetingRepository;
import cn.nonocast.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
        userRepository.save(new User("jean", "jean@shgbit.com"));

        List<Document> documents = new ArrayList<Document>();
        documents.add(new Document("Document-001", "document-001.pdf", 1024l, "admin", new Date()));
        documents.add(new Document("Document-002", "document-002.pdf", 2048l, "admin", new Date()));

        Meeting meeting = new Meeting("Meeting-001", new Date(), "曹晖", "", "admin", new Date());

        for(Document d : documents) {
            d.setMeeting(meeting);
        }
        meeting.setDocuments(documents);

        meetingRepository.save(meeting);
        for(Document d : documents) {
            documentRepository.save(d);
        }
    }
}
