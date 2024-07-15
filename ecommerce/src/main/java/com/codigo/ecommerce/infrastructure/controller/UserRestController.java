package com.codigo.ecommerce.infrastructure.controller;

import com.codigo.ecommerce.application.service.LoginService;
import com.codigo.ecommerce.domain.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

    private final LoginService loginService;

    @Autowired
    private HttpSession httpSession;

    public UserRestController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<UserDetails> getUser(@PathVariable String username) {
        try {
            UserDetails userDetails = loadUserByUsername(username);
            return ResponseEntity.ok(userDetails);
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        // Autenticación del usuario
        try {
            User user = loginService.getuser(username);
            if (user.getPassword().equals(password)) {
                httpSession.setAttribute("iduser", user.getId());
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(401).body("Invalid credentials");
            }
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    private UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Integer idUser = loginService.getUserId(username);
        if (idUser != null && idUser > 0) {
            User user = loginService.getuser(username);
            httpSession.setAttribute("iduser", user.getId());
            return org.springframework.security.core.userdetails.User.builder()
                    .username(user.getUsername())
                    .password(user.getPassword())
                    .roles(user.getUserType().name())
                    .build();
        } else {
            throw new UsernameNotFoundException("Usuario no encontrado");
        }
    }
}

