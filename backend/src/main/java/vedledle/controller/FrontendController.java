package vedledle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping("/")
    public String index(){
        return "index.html";
    }
    @GetMapping("/login")
    public String login(){
        return "login.html";
    }
    @GetMapping("/profile")
    public String user(){
        return "profile.html";
    }

    @GetMapping("/register")
    public String register(){
        return "register.html";
    }
    @GetMapping("/upload")
    public String galleryUpload(){
        return "upload.html";
    }
    @GetMapping("/gallery")
    public String gallery(){
        return "gallery.html";
    }
}
