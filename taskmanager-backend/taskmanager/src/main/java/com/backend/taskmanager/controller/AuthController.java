package com.backend.taskmanager.controller;

import com.backend.taskmanager.dto.RegisterRequest;
import com.backend.taskmanager.dto.LoginRequest;
import com.backend.taskmanager.entity.User;
import com.backend.taskmanager.security.JwtUtil;
import com.backend.taskmanager.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            // Verifica se já existe antes de tentar salvar
            try {
                userService.findByEmail(request.getEmail());
                return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", "E-mail já cadastrado!"));
            } catch (Exception e) {
                // Se não achou, pode prosseguir
            }

            User user = new User();
            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setPassword(request.getPassword());

            userService.register(user);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "Erro ao criar conta: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            // 1. Tenta autenticar (valida email e senha)
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            // 2. Se passou, busca os dados e gera o token
            User user = userService.findByEmail(request.getEmail());
            String token = jwtUtil.generateToken(request.getEmail());

            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("name", user.getName());

            return ResponseEntity.ok(response);

        } catch (BadCredentialsException e) {
            // 3. Se a senha ou email estiverem errados, cai aqui
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Usuário ou senha inválidos"));
        } catch (Exception e) {
            // 4. Qualquer outro erro
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("message", "Erro interno: " + e.getMessage()));
        }
    }
}