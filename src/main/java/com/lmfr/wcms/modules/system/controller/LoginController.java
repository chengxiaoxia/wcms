package com.lmfr.wcms.modules.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *  登录
 *  @author wangcheng
 */
@RequestMapping("/")
@Controller
public class LoginController {

    /**
     * 登录页面
     */
    @RequestMapping("/")
    public String toLogin(){
        return "login";
    }

    @RequestMapping("/loginSuccess")
    public String loginSuccess(){
        return "system/frame/index";
    }

    /**
     * 登录
     */
    public void login(){

    }

    /**
     *  登出
     */
    public void logout(){

    }

}
