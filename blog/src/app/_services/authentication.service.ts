import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }
  executeAuthenticationService(username, password) {

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    console.log(username);
    console.log(basicAuthHeaderString);
    return this.http.get(
      'http://localhost:8080/basicauth', {headers: { "Authorization" : basicAuthHeaderString}}).pipe(
        map(
          data => {
            localStorage.setItem(AUTHENTICATED_USER, username);
            localStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return localStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return localStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = localStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    localStorage.removeItem(AUTHENTICATED_USER);
    localStorage.removeItem(TOKEN);
  }
}
