package ru.hackathon.server.user.mapper;

import lombok.experimental.UtilityClass;
import ru.hackathon.server.user.dto.UserDto;
import ru.hackathon.server.user.model.User;

@UtilityClass
public class UserMapper {

    public UserDto toUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getScore(),
                user.getMovesCount(),
                user.getCity()
        );
    }

    public User toUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getScore(),
                userDto.getMovesCount(),
                userDto.getCity()
        );
    }

}