import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { category, user } from '../category/category-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users!:user[]
  editObj!:user
  isEditable:number=0
  resgistrationForm!: FormGroup;
  modalReference: any;
  catIdtoDelete:any

  loggedUser:user[]=[]
  constructor (private userService:UserProfileService,private offcanvasService: NgbOffcanvas,private formBuilder: FormBuilder,private modalService: NgbModal,public toastService:NotificationService){

  }
  ngOnInit(): void {
    this.getUsers()
    this.  resgistrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:['',Validators.required]

    })

  }

  getUsers(){
    this.userService.fetchLoggedInUserProfile().subscribe(data=>{
      console.log(data)
      this.loggedUser=data
    })
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(

      (data)=>{

        //  this.notificationServices.showSuccess('Category created succefully')
        this.toastService.show('User Deleted succefully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
            this.getUsers()
            this.resgistrationForm.reset();


          },
          (error)=>{
            this.toastService.show('Somthing Went wrong', { classname: 'bg-danger text-light', delay: 1000 });
          }
            // this.notificationServices.showError('Somthing Went wrong')



    )

  }
  onSubmit(){
    if (this.resgistrationForm.invalid) {
      return;
    }

    const payload = this.resgistrationForm.value;
    console.log(payload)
    this.userService.addUser(payload).subscribe(
      (data)=>{

        //  this.notificationServices.showSuccess('Category created succefully')
        this.toastService.show('User created succefully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
            this.getUsers()
            this.resgistrationForm.reset();


          },
          (error)=>{
            this.toastService.show('Somthing Went wrong', { classname: 'bg-danger text-light', delay: 1000 });
          }
            // this.notificationServices.showError('Somthing Went wrong')

        )





  }
  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  openSm(content:any,catid:any) {
    this.catIdtoDelete=catid
    this.modalReference=this.modalService.open(content, { size: 'sm' });
    }


}



