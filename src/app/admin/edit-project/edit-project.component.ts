import { Component } from '@angular/core';
import { Project } from '../add-project/project-interface';
import { category } from '../category/category-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';
// import { NotificationService } from 'src/app/services/notification.service';
import { ProjectService } from 'src/app/services/project.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  categories!: category[]
  productId!: any;
  product!:Project;
  images: any;
  modalReference: any;
  isLoading = false;
  productImgDeleteId:any

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProjectService,private categoryServices:CategoryService,private modalService: NgbModal,public toastService:NotificationService) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = +id!;
   this.productService.getProductById( this.productId ).subscribe(data=>{
  this.productService.productListSubject.next(data)
  })
  this.productService.productListSubject.subscribe(x=>{
    this.product=x
  })
  this.getListOfcat()



}
getListOfcat(){
  this.categoryServices.getCategories().subscribe(cat=>{
    this.categories=cat
  })
}
onSave() {
  this.isLoading=true
  this.productService.updateProduct(this.product.id,this.product).subscribe(
     (x)=>{
    this.productService.productListSubject.next(x)
    this.toastService.show('Product is updated', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });

    // this.notificationService.showSuccess('Product is updated ')


  },
  (error) => {
    // Handle errors
    this.toastService.show('Faild to save', { classname: 'bg-danger text-light', delay: 1000 });


    // this.notificationService.showError('Failed to delete product.');
  },
  () => {
    this.isLoading = false; // Hide progress bar
  }


  );


}

onCancel() {
  // this.router.navigate(['/products']);
}
onImgaeChainging(event:any){
if (event.target.files && event.target.files.length) {
  const files = event.target.files;
  this.images=files
}
}
addNewImgae(){
  let formData=new FormData()
  formData.append('productId',`${this.product.id}`)
  formData.append('name',this.product.projectName)
  for (let i = 0; i < this.images.length; i++) {
    formData.append('images', this.images[i]);
  }

this.productService.addProductImgae(formData).subscribe(
(data)=>{
  this.toastService.show('images is added', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
  // this.notificationService.showSuccess('images is added')
this.productService.productListSubject.next(data)
this.images=null
},
(error)=>{
  this.toastService.show('faild to upload', { classname: 'bg-danger text-light', delay: 1000 });
  // this.notificationService.showError('faild to upload')
}
)
}



deleteProductImgae(index:any){
let formData=new FormData()
formData.append('productId',`${this.product.id}`)
formData.append('currentImgIndex',`${index}`)
let payload={
  productId:this.product.id,
  currentImgIndex:index
}
this.productService.deleteProductImg(payload).subscribe((data)=>{

    this.productService.productListSubject.next(data)
    // this.notificationService.showSuccess('Product deleted successfully.')
    this.toastService.show('Product deleted successfully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
    this.modalReference.close()

},
(error)=>{
  this.toastService.show('faild delete', { classname: 'bg-danger text-light', delay: 1000 });
  // this.notificationService.showError('Product Image faild delete.')
})

}
openSm(content:any,productImg:any) {
this.productImgDeleteId=productImg
this.modalReference=this.modalService.open(content, { size: 'sm' });
}
deleteProductImg(content:any){
 this.deleteProductImgae(this.productImgDeleteId)
}
}

