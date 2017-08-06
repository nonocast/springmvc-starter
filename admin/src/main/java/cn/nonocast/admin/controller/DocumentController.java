package cn.nonocast.admin.controller;

import cn.nonocast.admin.storage.StorageService;
import cn.nonocast.model.Document;
import cn.nonocast.model.Meeting;
import cn.nonocast.repository.DocumentRepository;
import cn.nonocast.repository.MeetingRepository;
import com.google.common.io.Files;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class DocumentController {
    private static final Logger logger = LoggerFactory.getLogger(DocumentController.class);

    @Autowired
    private MeetingRepository meetingRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private StorageService storageService;

    @GetMapping("/rest/test-upload")
    public String testUpload() {
        return "test/upload";
    }

    @PostMapping("rest/meetings/{id}/documents")
    public @ResponseBody String handleMeetingDocumentUpload(@PathVariable Long id, @RequestParam("file[]") List<MultipartFile> files, RedirectAttributes redirectAttributes) {
        Meeting meeting = meetingRepository.findOne(id);

        for(MultipartFile each : files) {
            if(each.isEmpty()) continue;
            storageService.store(each, meeting.getId().toString());
            Document document = new Document(
                    Files.getNameWithoutExtension(each.getOriginalFilename()),
                    each.getOriginalFilename(),
                    each.getSize(),
                    "admin",
                    new Date());
            document.setMeeting(meeting);
            documentRepository.save(document);
        }

        logger.info("Upload OK");
        return "OK";
    }

    @PostMapping("rest/upload")
    public String handleFileUpload(@RequestParam("file") List<MultipartFile> files, RedirectAttributes redirectAttributes) {
        for(MultipartFile each : files) {
            if(each.isEmpty()) continue;
            storageService.store(each);
        }

        String filenames = files.stream()
                .map(MultipartFile::getOriginalFilename)
                .collect(Collectors.joining(", "));

        String message = "You successfully uploaded " + filenames + "!";
        redirectAttributes.addFlashAttribute("message", message);
        logger.info(message);

        return "redirect:/";
    }
}
