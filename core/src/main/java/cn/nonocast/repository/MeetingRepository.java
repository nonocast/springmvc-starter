package cn.nonocast.repository;

import cn.nonocast.model.Meeting;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {
=======
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

>>>>>>> 0b0a7aa40d6f64cbefeb4499a69f09c474310fbb

@RepositoryRestResource(collectionResourceRel = "meeting", path = "meeting")
public interface MeetingRepository extends PagingAndSortingRepository<Meeting, Long> {

}