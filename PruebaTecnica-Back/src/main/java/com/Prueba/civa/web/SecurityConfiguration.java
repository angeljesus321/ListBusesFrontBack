package com.Prueba.civa.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Desactiva CSRF si solo usas API REST
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated() // Todas las rutas requieren autenticación
            )
            .httpBasic(Customizer.withDefaults()); // Autenticación básica

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager(
            User.withUsername("user")
                .password("{noop}user123") // `{noop}` permite una contraseña sin encriptar
                .roles("USER")
                .build()
        );
    }
}

