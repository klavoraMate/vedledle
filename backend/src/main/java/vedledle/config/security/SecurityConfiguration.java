package vedledle.config.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import vedledle.config.security.filter.JWTValidatorFilter;

@Configuration
public class SecurityConfiguration {
    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .addFilterAfter(new JWTValidatorFilter(), BasicAuthenticationFilter.class)
                .authorizeHttpRequests()
                .requestMatchers("/",
                        "/_next/**",
                        "/*.html",
                        "/*.ico",
                        "/*.css",
                        "/*.png",
                        "/*.jpg",
                        "/login",
                        "/register",
                        "/profile",
                        "/upload",
                        "/api/login",
                        "/api/register",
                        "/api/image/search/**",
                        "/api/image/names").permitAll()
                .requestMatchers("/api/dog/search/**", "/api/user/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers("/api/image/upload").hasRole("ADMIN")
                .anyRequest().authenticated();
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
