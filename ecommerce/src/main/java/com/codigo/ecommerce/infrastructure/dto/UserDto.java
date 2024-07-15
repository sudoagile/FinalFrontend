package com.codigo.ecommerce.infrastructure.dto;

import com.codigo.ecommerce.domain.User;
import com.codigo.ecommerce.domain.UserType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDto {
    private String username;
    //@NotBlank (message = "Nombre es requerido")
    //private String firstName;
    //@NotBlank (message = "Apellido es requerido")
    //private String lastName;
    @Email(message = "Debe ingresar un email valido")
    private String email;
    @NotBlank (message = "Dirección es requerido")
    private String address;
    @NotBlank (message = "Celular es requerido")
    private String cellphone;
    @NotBlank (message = "Clave es requerido")
    private String password;
    @NotBlank (message = "dni requerido")
    private String dni;

    public User userDtoToUser(){
        return new User(null,this.getUsername(),this.getEmail(), this.getAddress(), this.getCellphone(), this.getPassword(), UserType.USER, LocalDateTime.now(), this.getDni());
    }
}
