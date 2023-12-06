import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/services/notification.service';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from '../add-project/project-interface';

@Component({
  selector: 'app-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.css']
})
export class AllProjectComponent {
  isLoading = false;
  products:Project[] = [];
  closeResult!: string;
  viewProduct!: Project;
  editingIndex: number | null = null;
  // productListSubject = new BehaviorSubject<any>(this.products)
  obj!:Project;
  modalReference: any;
  constructor(private productService:ProjectService,private modalService: NgbModal, private notificationService: NotificationService) {

  }
  productDeleteId:any
  ngOnInit(): void {
    this.getProducts();

    this.productService.productListSubject.subscribe(x=>{
      this.products=x
    })

  }
  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data)
        this.productService.productListSubject.next(data);
      },
      (error) => {
        console.error('Error fetching products:', error);

      }
    );

}


deleteProduct(content:any){
  this.isLoading = true;

  this.productService.deleteProduct
  this.modalReference.close();
  this.productService.deleteProduct(this.productDeleteId).subscribe(
    (data) => {
this.getProducts()
// this.notificationService.showSuccess('Product deleted successfully.');


    },
    (error) => {
      // Handle errors
      // this.notificationService.showError('Failed to delete product.');
    },
    () => {
      this.isLoading = false; // Hide progress bar
    }
  );
}

openSm(content:any,productId:any) {
  this.productDeleteId=productId
  this.modalReference=this.modalService.open(content, { size: 'sm' });
  }
  
  }
  
