import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './shared/user';
import {JsonPipe} from '@angular/common';

@Component({
    templateUrl:"./login.component.html",
    pipes:[JsonPipe]
})
export class LoginComponent{

    reg:boolean;
    user:User;

    constructor(private router:Router){
        this.user = new User();
        this.reg = false;
    }

    switchToRegister(){
        this.reg = true;
    }

    switchToLogin(){
        this.reg = false;
    }

    login(){
        //navigate(["path", parametros])
        this.router.navigate(["dashboard/genre/18"]);
    }

    signing(){

    }

}