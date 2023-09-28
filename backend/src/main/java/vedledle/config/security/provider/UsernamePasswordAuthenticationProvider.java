package vedledle.config.security.provider;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import vedledle.dao.model.User;
import vedledle.service.UserService;

import java.util.Collections;

@Component
@RequiredArgsConstructor
public class UsernamePasswordAuthenticationProvider implements AuthenticationProvider {
    private final PasswordEncoder passwordEncoder;
    private final UserService service;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (!(authentication instanceof UsernamePasswordAuthenticationToken))
            return null;
        String username = authentication.getName();
        String pwd = authentication.getCredentials().toString();
        System.out.println("username: "+username+" pwd: "+pwd);
        User user = service.findByEmail(username);
        if (passwordEncoder.matches(pwd, user.getPassword())) {
            System.out.println("User email fetched from database"+ user.getEmail());
            return new UsernamePasswordAuthenticationToken(username, pwd, Collections.singleton(extractRole(user)));
        } else {
            throw new BadCredentialsException("Invalid password!");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }

    private SimpleGrantedAuthority extractRole(User user) {
        return new SimpleGrantedAuthority("ROLE_" + user.getRole());
    }
}
