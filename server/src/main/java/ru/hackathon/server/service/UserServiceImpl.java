package ru.hackathon.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.hackathon.server.dto.UserDto;
import ru.hackathon.server.mapper.UserMapper;
import ru.hackathon.server.model.User;
import ru.hackathon.server.repository.UserRepository;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class UserServiceImpl {

    private final UserRepository userRepository;

    @Transactional
    public UserDto addUser(UserDto userDto) {
        User user = UserMapper.toUser(userDto);
        return UserMapper.toUserDto(userRepository.save(user));
    }

}