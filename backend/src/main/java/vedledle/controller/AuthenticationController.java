package vedledle.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @GetMapping("/")
    public ResponseEntity<String> root(){
        return ResponseEntity.ok("ok");
    }
}