package com.backend.taskmanager.controller;

import com.backend.taskmanager.dto.TaskDTO;
import com.backend.taskmanager.entity.Task;
import com.backend.taskmanager.entity.User;
import com.backend.taskmanager.service.TaskService;
import com.backend.taskmanager.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;
    private final UserService userService;

    @GetMapping
    public List<Task> listAll() {
        return taskService.findAll();
    }

    @PostMapping
    public Task create(@RequestBody TaskDTO dto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userService.findByEmail(email);

        return taskService.create(dto, user.getId());
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody TaskDTO dto) {
        return taskService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        taskService.delete(id);
    }
}