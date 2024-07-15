package com.codigo.ecommerce.infrastructure.controller;

import com.codigo.ecommerce.infrastructure.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @GetMapping("/token")
    public ResponseEntity<String> generateToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();

        String token;
        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            token = jwtTokenProvider.generateToken(userDetails);
        } else if (principal instanceof String) {
            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                    (String) principal, "", new ArrayList<>()
            );
            token = jwtTokenProvider.generateToken(userDetails);
        } else {
            return ResponseEntity.status(500).body("Unexpected principal type: " + principal.getClass().getName());
        }

        return ResponseEntity.ok(token);
    }

    @GetMapping("/secured")
    public ResponseEntity<String> securedEndpoint() {
        // Aquí puedes agregar lógica para acceder al recurso protegido
        return ResponseEntity.ok("Acceso permitido al recurso protegido.");
    }

    @GetMapping("/generateAnonymousToken")
    public ResponseEntity<String> generateAnonymousToken() {
        // Generar un token para un usuario anónimo
        String anonymousUsername = "anonymousUser";
        UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                anonymousUsername, "", new ArrayList<>()
        );
        String token = jwtTokenProvider.generateToken(userDetails);
        return ResponseEntity.ok(token);
    }
}
