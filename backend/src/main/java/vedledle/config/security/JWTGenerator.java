package vedledle.config.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Collection;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JWTGenerator {
    public static String generate(Authentication authentication, String email){
        SecretKey key = Keys.hmacShaKeyFor(System.getenv("JWT_KEY").getBytes(StandardCharsets.UTF_8));
        return Jwts.builder()
                .setIssuer("Vedledle")
                .claim("username",authentication.getName())
                .claim("email",email)
                .claim("role",populateRole(authentication.getAuthorities()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + 30000000))
                .signWith(key).compact();
    }

    private static String populateRole(Collection<? extends GrantedAuthority> authorities){
        String role = "";
        for (GrantedAuthority authority: authorities) {
            role  = authority.getAuthority();
        }
        return role;
    }
}
