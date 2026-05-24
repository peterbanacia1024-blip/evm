package backend.user;

import backend.user.dto.RegisterUserRequest;
import backend.user.dto.UserResponse;
import backend.user.dto.LoginUserRequest;

public interface UserService{
    UserResponse register(RegisterUserRequest request);
    UserResponse login(LoginUserRequest request);
}
