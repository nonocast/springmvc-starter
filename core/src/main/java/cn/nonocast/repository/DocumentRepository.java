package cn.nonocast.repository;

import cn.nonocast.model.Document;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DocumentRepository extends PagingAndSortingRepository<Document, Long> {}

