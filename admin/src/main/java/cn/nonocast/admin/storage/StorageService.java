package cn.nonocast.admin.storage;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

public interface StorageService {

    Path getLocation();

    void init();

    void store(MultipartFile file);

    void store(MultipartFile file, String prefix);

    void store(List<MultipartFile> file, String prefix);

    Stream<Path> loadAll();

    Path load(String filename);

    Resource loadAsResource(String filename);

    void deleteAll();

}
