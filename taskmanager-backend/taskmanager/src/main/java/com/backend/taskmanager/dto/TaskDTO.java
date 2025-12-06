package com.backend.taskmanager.dto;

import com.backend.taskmanager.enums.TaskStatus;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class TaskDTO {
    private String title;
    private String description;
    private TaskStatus status;
    private LocalDateTime dueDate;
}