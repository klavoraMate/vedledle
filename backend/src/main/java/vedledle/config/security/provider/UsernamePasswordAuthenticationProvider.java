package vedledle.config.security.provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import vedledle.dao.model.Client;
import vedledle.dao.repository.ClientRepository;

import java.util.Collections;
import java.util.List;

@Component
public class UsernamePasswordAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (!(authentication instanceof UsernamePasswordAuthenticationToken))
            return null;
        String username = authentication.getName();
        String pwd = authentication.getCredentials().toString();
        List<Client> client = clientRepository.findByEmail(username);
        if (client.size() > 0) {
            if (passwordEncoder.matches(pwd, client.get(0).getPassword())) {
                return new UsernamePasswordAuthenticationToken(username, pwd, Collections.singleton(extractRole(client.get(0))));
            } else {
                throw new BadCredentialsException("Invalid password!");
            }
        } else {
            throw new BadCredentialsException("No user registered with this details!");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }

    private SimpleGrantedAuthority extractRole(Client client) {
        return new SimpleGrantedAuthority("ROLE_" + client.getRole());
    }
}
