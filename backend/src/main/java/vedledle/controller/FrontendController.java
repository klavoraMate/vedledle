package vedledle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * The {@code FrontendController} class handles requests for frontend views.
 */
@Controller
public class FrontendController {

    /**
     * Returns the index.html view for the root endpoint.
     */
    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    /**
     * Returns the login.html view for the /login endpoint.
     */
    @GetMapping("/login")
    public String login() {
        return "login.html";
    }

    /**
     * Returns the profile.html view for the /profile endpoint.
     */
    @GetMapping("/profile")
    public String user() {
        return "profile.html";
    }

    /**
     * Returns the register.html view for the /register endpoint.
     */
    @GetMapping("/register")
    public String register() {
        return "register.html";
    }

    /**
     * Returns the gallery.html view for the /gallery endpoint.
     */
    @GetMapping("/gallery")
    public String gallery() {
        return "gallery.html";
    }
    /**
     * Returns the reservation.html view for the /reservation endpoint.
     */
    @GetMapping("/reservation")
    public String reservation() {
        return "reservation.html";
    }
}