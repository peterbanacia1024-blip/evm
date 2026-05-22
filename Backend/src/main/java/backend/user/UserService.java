package backend.user;

import backend.user.dto.RegisterUserRequest;
import backend.user.dto.UserResponse;

public interface UserService{
    UserResponse register(RegisterUserRequest request);
}