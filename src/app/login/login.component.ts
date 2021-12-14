import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = undefined;
  password: string = undefined;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.username, this.password)
    this.auth.login(this.username, this.password).subscribe((res: any) => {
      this.router.navigateByUrl('/landing-page');
    }, error => console.error(error));

  }

}
