package cn.nonocast.repository;

import cn.nonocast.model.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface DocumentRepository extends PagingAndSortingRepository<Document, Long> {}

