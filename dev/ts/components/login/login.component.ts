import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
    templateUrl:'app/html/login.component.html',
    styleUrls:['app/css/login.component.css'], 
})
export class LoginComponent {
    message: string;
    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = (this.authService.isLoggedIn ? 'Вы авторизованы' : 'kalyan.space');
    }
    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
              // Redirect the user
              this.router.navigate([redirect]);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
