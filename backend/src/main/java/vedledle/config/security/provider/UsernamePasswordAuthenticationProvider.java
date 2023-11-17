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

/**
 * The {@code UsernamePasswordAuthenticationProvider} class implements the Spring Security {@link AuthenticationProvider} interface.
 * It provides custom authentication logic based on username and password.
 */
@Component
@RequiredArgsConstructor
public class UsernamePasswordAuthenticationProvider implements AuthenticationProvider {
    /**
     * The password encoder for encoding and validating passwords.
     */
    private final PasswordEncoder passwordEncoder;
    /**
     * The user service for retrieving user information.
     */
    private final UserService service;

    /**
     * Authenticates the user based on the provided username and password.
     *
     * @param authentication The authentication request object.
     * @return An authenticated {@link Authentication} object if successful.
     * @throws AuthenticationException If authentication fails.
     */
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (!(authentication instanceof UsernamePasswordAuthenticationToken))
            return null;
        String email = authentication.getName();
        String pwd = authentication.getCredentials().toString();
        User user = service.findByEmail(email);
        if (passwordEncoder.matches(pwd, user.getPassword())) {
           return new UsernamePasswordAuthenticationToken(user.getName(), pwd, Collections.singleton(extractRole(user)));
        } else {
            throw new BadCredentialsException("Invalid password!");
        }
    }

    /**
     * Indicates whether this {@code AuthenticationProvider} implementation supports the provided authentication class.
     *
     * @param authentication The class to check for support.
     * @return {@code true} if the implementation can process the specified class, otherwise {@code false}.
     */
    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }

    /**
     * Extracts the user's role and converts it to a {@link SimpleGrantedAuthority}.
     *
     * @param user The user whose role needs to be extracted.
     * @return A {@link SimpleGrantedAuthority} representing the user's role.
     */
    private SimpleGrantedAuthority extractRole(User user) {
        return new SimpleGrantedAuthority("ROLE_" + user.getRole());
    }
}
