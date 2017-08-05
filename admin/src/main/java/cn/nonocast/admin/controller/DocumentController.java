package cn.nonocast.admin.controller;

import cn.nonocast.admin.storage.StorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class DocumentController {
    private static final Logger logger = LoggerFactory.getLogger(DocumentController.class);

    @Autowired
    private StorageService storageService;

    @GetMapping("/test/upload")
    public String testUpload() {
        return "test/upload";
    }

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") List<MultipartFile> files, RedirectAttributes redirectAttributes) {
        for(MultipartFile each : files) {
            if(each.isEmpty()) continue;
            storageService.store(each, "1234/a/b/c/d");
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
