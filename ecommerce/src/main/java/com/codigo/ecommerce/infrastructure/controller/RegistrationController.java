package com.codigo.ecommerce.infrastructure.controller;

import com.codigo.ecommerce.application.service.RegistrationService;
import com.codigo.ecommerce.infrastructure.dto.UserDto;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/register")
@Slf4j
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> registerUser(@Valid @RequestBody UserDto userDto) {
        registrationService.register(userDto.userDtoToUser());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);
    }
}

