package ru.hackathon.server.mapper;

import lombok.experimental.UtilityClass;
import ru.hackathon.server.dto.UserDto;
import ru.hackathon.server.model.User;

@UtilityClass
public class UserMapper {

    public UserDto toUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getScore());
    }

    public User toUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getScore()
        );
    }

}