package cn.nonocast.repository;

import cn.nonocast.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RepositoryRestResource
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    List<User> findByEmail(@Param("name") String name);
}
