package cn.nonocast.repository;

import cn.nonocast.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}
