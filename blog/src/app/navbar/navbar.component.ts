import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {
  }
  loggedIn: boolean;
  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }


  ngOnInit() {
  }
  readSessionStorageValue() {
    return this.authService.isLoggedIn();
  }

}
