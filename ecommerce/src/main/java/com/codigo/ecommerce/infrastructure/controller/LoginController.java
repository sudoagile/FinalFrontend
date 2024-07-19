package com.codigo.ecommerce.infrastructure.controller;

import com.codigo.ecommerce.application.service.LoginService;
import com.codigo.ecommerce.domain.User;
import com.codigo.ecommerce.infrastructure.dto.UserCredentials;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
@Slf4j
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> login(@RequestBody UserCredentials credentials, HttpSession session) {
        User user = loginService.getuser(credentials.getUsername());
        Map<String, String> response = new HashMap<>();
        if (user != null && user.getPassword().equals(credentials.getPassword())) {
            session.setAttribute("iduser", user.getId());
            response.put("message", "Login successful");
            response.put("userType", loginService.getUserType(user.getEmail()).name());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/access")
    public ResponseEntity<Map<String, String>> access(HttpSession session) {
        Map<String, String> response = new HashMap<>();
        if (session.getAttribute("iduser") != null) {
            int userId = Integer.parseInt(session.getAttribute("iduser").toString());
            User user = loginService.getUser(userId);
            response.put("id", session.getAttribute("iduser").toString());
            if (loginService.existUser(user.getEmail())) {
                if (loginService.getUserType(user.getEmail()).name().equals("ADMIN")) {
                    response.put("redirect", "/admin");
                } else {
                    response.put("redirect", "/home");
                }
                return ResponseEntity.ok(response);
            }
        }
        response.put("redirect", "/home");
        return ResponseEntity.ok(response);
    }
}
