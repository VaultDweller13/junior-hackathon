package ru.hackathon.server.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long id;
    @NotBlank
    @Size(min = 1, max = 50)
    private String name;
    @NotNull
    @Min(value = 0, message = "Счет должен быть положительным числом")
    private Long score;

}