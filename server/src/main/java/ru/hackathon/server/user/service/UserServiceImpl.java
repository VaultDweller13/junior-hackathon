package ru.hackathon.server.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.hackathon.server.exception.ConflictException;
import ru.hackathon.server.exception.NotFoundException;
import ru.hackathon.server.user.dto.UserDto;
import ru.hackathon.server.user.mapper.UserMapper;
import ru.hackathon.server.user.model.User;
import ru.hackathon.server.user.repository.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class UserServiceImpl {

    private final UserRepository userRepository;

    @Transactional
    public UserDto addUser(UserDto userDto) {
        Optional<User> existingUser = userRepository.findByName(userDto.getName());
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            if (userDto.getScore() > user.getScore()) {
                user.setScore(userDto.getScore());
                userRepository.save(user);
                return UserMapper.toUserDto(user);
            } else {
                throw new ConflictException("Пользователь с именем " + userDto.getName() +
                        " уже существует и его счет равен или больше введенного");
            }
        } else {
            User user = UserMapper.toUser(userDto);
            return UserMapper.toUserDto(userRepository.save(user));
        }
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new NotFoundException("Пользователь не найден " + id));
    }

    public List<UserDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(UserMapper::toUserDto)
                .collect(Collectors.toUnmodifiableList());
    }

    public List<UserDto> findLeaderboard() {
        return userRepository.findAllByOrderByMovesCountAsc()
                .stream()
                .map(UserMapper::toUserDto)
                .collect(Collectors.toUnmodifiableList());
    }

}