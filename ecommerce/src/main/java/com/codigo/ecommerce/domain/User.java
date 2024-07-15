package com.codigo.ecommerce.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private String cellphone;
    private String password;
    private UserType userType;
    private LocalDateTime dateCreated;
    private String dni;


    public User(Integer id, String username, String email, String address, String cellphone, String password, UserType userType, LocalDateTime dateCreated, String dni) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.address = address;
        this.cellphone = cellphone;
        this.password = password;
        this.userType = userType;
        this.dateCreated = dateCreated;
        this.dni = dni;
    }
}
