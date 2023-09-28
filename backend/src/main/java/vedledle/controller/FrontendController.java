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
}
