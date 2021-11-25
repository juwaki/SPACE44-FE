import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'space44FE';

  constructor(private auth: AuthService) {

  }

ngOnInit() {

  this.setCurrentUser();
}

setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.auth.setCurrentUser(user);
  }
}
