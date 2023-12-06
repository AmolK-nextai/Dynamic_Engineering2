import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarOpen = false;


  openSidebar() {
    console.log('ckickd')
    if (!this.sidebarOpen) {
      this.sidebarOpen = true;
    }
  }

  closeSidebar() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
    }
  }

  constructor(private authservice:AuthService, public toastService:NotificationService){

  }

  showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
	}

  
	showDanger(dangerTpl:any) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 1000 });
	}


  
  logOut(){
    this.authservice.logout()
  }

}



