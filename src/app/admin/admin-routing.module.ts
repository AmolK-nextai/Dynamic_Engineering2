import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,children:[
    {path:'',redirectTo:'all-projects',pathMatch:'full'},
    {path:'category',component:CategoryComponent},
    {path:'add-project',component:AddProjectComponent},
    {
      path:'all-projects',component:AllProjectComponent
    },
    {path:"edit-project/:id",component:EditProjectComponent},
    {path:'user',component:UserManagementComponent}
  ]},
  {path: '', redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
