package com.neo.com.neo.basic

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Created by Suh on 2016-08-27.
 */
@Controller
class BasicController {

    @RequestMapping(value = "/")
    def index(){
        'index'
    }

    @RequestMapping(value = "/pro")
    def proIndex(){
        'index2'
    }


}
