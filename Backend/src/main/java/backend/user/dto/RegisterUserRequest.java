package backend.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterUserRequest {
    
    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String contactNumber;

    @Email
    @NotBlank
    private String email;

    @Size(min = 6)
    @NotBlank
    private String password;

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getContactNumber(){
        return contactNumber;
    }

    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }
}