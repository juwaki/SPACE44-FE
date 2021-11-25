import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = undefined;
  password: string = undefined;
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register():void {
    this._authService.register(this.username, this.password).subscribe(res =>{
      console.log('success')
      this.router.navigateByUrl('/landing-page');

    }, error => console.log(error.error))
  
  }
  
}
