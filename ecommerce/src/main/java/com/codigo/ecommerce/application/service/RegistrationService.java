package com.codigo.ecommerce.application.service;

import com.codigo.ecommerce.client.ReniecClient;
import com.codigo.ecommerce.domain.User;
import com.codigo.ecommerce.infrastructure.dto.ReniecDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;

public class RegistrationService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private ReniecClient reniecClient;
    @Value("${token.reniec}")
    private String token;

    public RegistrationService(UserService userService, PasswordEncoder passwordEncoder, ReniecClient reniecClient) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.reniecClient = reniecClient;
    }

    public void register(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        ReniecDto reniecDto = reniecClient.getInfoReniec(user.getDni(), token);
        if(reniecDto!=null)
        {
            user.setFirstName(reniecDto.getNombres());
            user.setLastName(reniecDto.getApellidoPaterno());
            userService.createUser(user);
        }
        return;
    }
}
