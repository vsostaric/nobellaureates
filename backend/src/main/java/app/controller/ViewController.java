package app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/milages", "/gallery"})
    public String index() {
        return "forward:/index.html";
    }

}
