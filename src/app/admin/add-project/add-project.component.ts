import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  categories :any

  images:any ; // Variable to store file
  productForm!: FormGroup;
  constructor(private fb: FormBuilder,private ProductService:ProjectService,private CategoryService:CategoryService,public toastService:NotificationService ) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      images: this.fb.array([]),
      price: [0.00, Validators.required],
      minOrderQuantity: [1, Validators.required],
    });
    this.CategoryService.getCategories().subscribe(x=>{
      console.log(x)
      this.categories=x
    })
  }  
  // Convenience getter for easier access to form controls
  get f() {
    return this.productForm.controls;
  }

   // Convenience getter for images form array
   get imageArray() {
    return this.productForm.get('images') as FormArray;
  }

  addImage() {
    this.imageArray.push(this.fb.control(null));
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const files = event.target.files;
      this.images=files
    }
  }
  
  removeImage(index: number) {
    this.images=this.images.splice(index,1)
    // this.imageArray.removeAt(index);
  }

  onSubmit() {
    // if (this.productForm.invalid) {
    //   return;
    // }

    const formData = new FormData();
    const name = this.productForm.get('name')?.value;
    if (name) {
      formData.append('name', name);
    }

    const description = this.productForm.get('description')?.value;
    if (description) {
      formData.append('description', description);
    }

    const category = this.productForm.get('category')?.value;
    if (category) {
      formData.append('projectCategoryId', category);
    }

    const price = this.productForm.get('price')?.value;
    if (price) {
      formData.append('price', price);
    }

    const minOrderQuantity = this.productForm.get('minOrderQuantity')?.value;
    if (minOrderQuantity) {
      formData.append('minOrderQuantity', minOrderQuantity);
    }
    // const images = this.productForm.get('images')?.value;
    for (let i = 0; i < this.images.length; i++) {
      formData.append('images', this.images[i]);
    }

    this.ProductService.addProduct(formData).subscribe(
      (response) => {
        this.toastService.show('Project added successfully', { classname: 'bg-success text-light toast-container position-fixed top-5 end-0 p-3', delay: 1000 });
     
// this.notificationServic.showSuccess('Product added successfully')
this.productForm.reset()


        // Optionally reset the form or perform other actions
      },
      (error) => {
        this.toastService.show('Error adding project', { classname: 'bg-danger text-light', delay: 1000 });
        // this.notificationServic.showError('Error adding product')
        console.error('Error adding product:', error);
      }
    );

    // Process and send data to server


  }

}







