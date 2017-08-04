package cn.nonocast.admin.security;

import cn.nonocast.model.User;
import cn.nonocast.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User result = userRepository.findByEmail(username);
        if(result == null) throw new UsernameNotFoundException("user not found");

        String role = "ROLE_" + result.getRole().toUpperCase();
        return new org.springframework.security.core.userdetails.User(result.getName(), result.getPassword(),
                AuthorityUtils.createAuthorityList(role));
    }
}
