import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicEngg';
  private router : Router;
  hideNavbar: boolean = false;
  constructor (router : Router)
  {
    this.router = router;
  }
  ngOnInit(): void {
    this.router.events
      .pipe(
        // Filter only NavigationEnd events
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event:any) => {
        // Get the current URL
        const currentUrl = event.url;

        // Check if the current URL contains "admin or login"
        const isAdminRoute = currentUrl.includes('admin')||currentUrl.includes('login');

        // Use the isAdminRoute value to control the visibility of the navbar
        this.hideNavbar = !isAdminRoute;
      });
  }
}


