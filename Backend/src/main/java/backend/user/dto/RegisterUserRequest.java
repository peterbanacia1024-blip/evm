package backend.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterUserRequest(){
    
    @NotBlank
    private String username;

    @Email
    @NotBlank
    private String email;

    @Size(min = 6)
    @NotBlank
    private String password;

    public String getUsername(){
        return username;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password
    }
}