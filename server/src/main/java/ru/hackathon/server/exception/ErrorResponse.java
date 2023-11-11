package ru.hackathon.server.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.hackathon.server.common.DateAndTimeFormatter;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public final class ErrorResponse {

    private String status;
    @JsonFormat(pattern = DateAndTimeFormatter.DATE_TIME_PATTERN)
    private LocalDateTime timestamp;
    private String path;
    private String error;

}