package cn.nonocast.repository;

import cn.nonocast.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@Repository
@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {

}
