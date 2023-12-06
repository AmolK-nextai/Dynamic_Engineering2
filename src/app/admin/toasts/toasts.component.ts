import { Component, TemplateRef  } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent {
  constructor(public toastService:NotificationService) {}

  isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}



