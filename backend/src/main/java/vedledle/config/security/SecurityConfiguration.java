package vedledle.config.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import vedledle.config.security.filter.JWTValidatorFilter;


/**
 * The {@code SecurityConfiguration} class configures security settings for the application.
 */
@Configuration
public class SecurityConfiguration {
    /**
     * Configures the security filter chain for the application.
     *
     * @param http The {@link HttpSecurity} object to configure.
     * @return The configured {@link SecurityFilterChain}.
     * @throws Exception If an error occurs during configuration.
     */
    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .addFilterAfter(new JWTValidatorFilter(), BasicAuthenticationFilter.class)
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.GET,
                        "/",
                        "/_next/**",
                        "/*.html",
                        "/*.ico",
                        "/*.css",
                        "/*.png",
                        "/*.jpg",
                        "/login",
                        "/register",
                        "/dogs",
                        "/gallery",
                        "/reservation",
                        "/api/image/**",
                        "/api/saloon/**").permitAll()
                .requestMatchers(HttpMethod.POST,
                        "/api/login",
                        "/api/register").permitAll()
                .requestMatchers( "/api/user/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers( "/api/dog**").hasAnyRole("USER", "ADMIN")
                .requestMatchers( "/api/reservation**").hasAnyRole("USER", "ADMIN")
                .requestMatchers(HttpMethod.DELETE,"/api/image/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.POST,"/api/image/**").hasRole("ADMIN")
                .anyRequest().authenticated();
        return http.build();
    }

    /**
     * Provides a BCrypt password encoder bean for password hashing.
     *
     * @return The BCrypt password encoder bean.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
