import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from 'src/app/admin/add-project/project-interface';
import { category } from 'src/app/admin/category/category-interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  categories!: category[];
  category:any
  products!:Project[]
  selectedProduct!:Project
  productToreder!:Project[]
  activeno:any=0
  categoryInfo:boolean=false
  catIndex:any=0
  constructor(private categoryService:CategoryService,private productService:ProjectService,private cdr: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.getCategories()
    this.getProducts()



  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
      this.productToreder=this.products

    })
  }
getProductbyCatergory(catId:any, catIndex:any){
  this.categoryInfo=true
  this.productToreder=this.products
  this.category=this.categories.filter(cat=>cat.id==catId)[0]

 this.productToreder= this.productToreder.filter(prod=>prod. projectCategoryId==catId)
 this.activeno=catId
 this.catIndex=catIndex



}
getAllproducts(){
  this.productToreder=this.products
  this.activeno=0
  this.categoryInfo=false
  this.category=null
}

}
