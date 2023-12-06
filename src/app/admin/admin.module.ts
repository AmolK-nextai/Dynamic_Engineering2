import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { CategoryComponent } from './category/category.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ToastsComponent } from './toasts/toasts.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    DashboardComponent,
    AddProjectComponent,
    AllProjectComponent,
    CategoryComponent,
    EditProjectComponent,
    ToastsComponent,
    UserManagementComponent,
    ToastsComponent,
   


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule


  ]
})
export class AdminModule { }
