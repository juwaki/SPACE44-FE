import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://localhost:5001/api/';
  // baseUrl = environment.api;;

  

  private currentUserSource = new ReplaySubject<User>(1);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) { }

  public login(username: string, password: string) {
    return this.http.post(this.baseUrl + 'account/login', { username, password }).pipe(
      map((response: User) => {
        const user = response;

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  public register(username: string, password: string) {
    return this.http.post(this.baseUrl + 'account/register', { username, password }).pipe(
      map((response: User) => {
        const user = response;

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }


  public setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public error(): string {
    return 'an error occured';
  }
}

