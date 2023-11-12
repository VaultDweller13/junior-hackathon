package ru.hackathon.server.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.hackathon.server.common.ServerIpAddress;
import ru.hackathon.server.user.dto.UserDto;
import ru.hackathon.server.user.model.User;
import ru.hackathon.server.user.service.UserServiceImpl;

import javax.validation.Valid;
import java.util.Collection;

@Slf4j
@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/users")
@CrossOrigin(origins = ServerIpAddress.SERVER_IP)
public class UserController {

    private final UserServiceImpl userService;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto addUser(@Valid @RequestBody UserDto userDto) {
        log.info("Добавление нового пользователя с именем " + userDto.getName()
                + " и количеством очков " + userDto.getScore());
        return userService.addUser(userDto);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User getUserById(@PathVariable Long id) {
        log.info("Получение пользователя по ID " + id);
        return userService.getUserById(id);
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Collection<UserDto> findAll() {
        log.info("Получение перечня всех пользователей");
        return userService.findAll();
    }

    @GetMapping("/leaderboard")
    @ResponseStatus(HttpStatus.OK)
    public Collection<UserDto> getLeaderboard() {
        log.info("Получение таблицы лидеров");
        return userService.findLeaderboard();
    }

}