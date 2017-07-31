package cn.nonocast.repository;

import cn.nonocast.model.Meeting;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface MeetingRepository extends PagingAndSortingRepository<Meeting, Long> {}