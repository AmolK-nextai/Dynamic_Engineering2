import { Component, OnInit,TemplateRef, ViewEncapsulation} from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { category } from '../product-inerface';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification.service';
import { category } from './category-interface';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!:category[]
  editObj!:category
  isEditable:number=0
  categoryForm!: FormGroup;
  modalReference: any;
  catIdtoDelete:any

  constructor(private categoryService:CategoryService,private offcanvasService: NgbOffcanvas,private formBuilder: FormBuilder,private modalService: NgbModal,public toastService:NotificationService){

  }
  ngOnInit(): void {
    this.getCatergoris()
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      catInfo:['',Validators.required]

    })

  }
  getCatergoris(){
    this.categoryService.getCategories().subscribe(
      (data)=>{
        this.categories=data
        console.log(data)
      }
    )
  }
  onEdit(userObj: any) {
    this.isEditable=userObj.id
    this.editObj=userObj

  }
  onCancel(obj:any) {
    this.isEditable=-1
  }
  onDelete() {
    let catId=this.catIdtoDelete
    this.categoryService.deleteCategory(catId).subscribe(
      (data)=>{


          this.toastService.show('Catergory is deleted', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });


        this.modalReference.close()
        this.getCatergoris()
      },
      (error)=>{
        this.toastService.show('Faild to delete the Category', { classname: 'bg-danger text-light', delay: 1000 });


      }

    )

  }
  onUpdate(){
    this.categoryService.updateCategory(this.editObj.id,this.editObj).subscribe(
      (data)=>{
        // this.notificationServices.showSuccess('Data Updated succefully')
        this.toastService.show('Data Updated succefully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
      },
      (error)=>{
        // this.notificationServices.showError('Faild to Update the')
        this.toastService.show('Faild to Update the', { classname: 'bg-danger text-light', delay: 1000 });
      }
    )

  }
  matchId(id:any){
    return id==this.isEditable
  }
	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}
  onSubmit(): void {
    if (this.categoryForm.invalid) {
      return;
    }

    const payload = this.categoryForm.value;
    this.categoryService.addCategory(payload).subscribe(
      (data)=>{

    //  this.notificationServices.showSuccess('Category created succefully')
    this.toastService.show('Category created succefully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
        this.getCatergoris()
        this.categoryForm.reset();


      },
      (error)=>{
        this.toastService.show('Somthing Went wrong', { classname: 'bg-danger text-light', delay: 1000 });
      }
        // this.notificationServices.showError('Somthing Went wrong')

    )
  }

  openSm(content:any,catid:any) {
    this.catIdtoDelete=catid
    this.modalReference=this.modalService.open(content, { size: 'sm' });
    }


}


