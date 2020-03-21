import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// Services
import { LoginService } from "src/app/servicios/login/login.service";
// Models
import { User } from "src/app/modelos/User";
import { UserResponse } from "src/app/modelos/UserResponse";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) {}

  arrayUsers: User[];
  userResponse: UserResponse;
  message = "user or password incorrect";
  errorMessage = "Error, please contact your administrator";

  ngOnInit() {}

  navigateDashboard(username, password) {
    if (username != "" && password != "") {
      this._userAuthentication(username, password);
    } else {
      alert(this.message);
    }
  }

  _userAuthentication(username, password) {
    this.service.getUserById(username).subscribe(
      response => {
        console.log(response);
        this.userResponse = response;
        this.arrayUsers = this.userResponse.data;
        this._userValidation(username, password);
      },
      error => {
        console.log(error);
        this.userResponse = error.error;
        if (this.userResponse.textMessage != undefined) {
          console.log(this.userResponse.textMessage);
          alert(this.message);
        } else {
          alert(this.errorMessage);
        }
      }
    );
  }

  _userValidation(username, password) {
    for (let user of this.arrayUsers) {
      if (user.id == username && user.password == password) {
        this.router.navigate(["nav-bar"]);
      } else {
        alert(this.message);
      }
    }
  }
}
