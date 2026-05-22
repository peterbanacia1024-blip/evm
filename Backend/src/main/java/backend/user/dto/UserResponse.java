package backend.user.dto;

import backend.user.Role;

public class UserResponse{
    private Long id;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String email;
    private Role role;

    public UserResponse(Long id, String firstName, String lastName, String contactNumber, String email, Role role){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.role = role;
    }



    public Long getId(){
        return id;
    }

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

    public Role getRole(){
        return role;
    }

}