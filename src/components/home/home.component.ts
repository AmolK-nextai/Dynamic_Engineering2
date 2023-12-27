import { ChangeDetectorRef, Component } from '@angular/core';
import * as AOS from 'aos';
import { Lightbox } from 'ngx-lightbox';
import { Project } from 'src/app/admin/add-project/project-interface';
import { category } from 'src/app/admin/category/category-interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  categories!: category[];
  category:any
  products!:Project[]
  selectedProduct!:Project
  productToreder!:Project[]
  activeno:any=0
  categoryInfo:boolean=false
  catIndex:any=0
   _album:any[]= [];

  constructor(private categoryService:CategoryService,private productService:ProjectService,private cdr: ChangeDetectorRef,private _lightbox: Lightbox){
  }
  ngOnInit() {
    this.getCategories()
    this.getProducts()
    AOS.init();
  }
  ngAfterViewInit() {
    AOS.init();



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
    for (let i = 0; i<this.productToreder.length; i++) {
      const src = `http://localhost:3000/${this.productToreder[i].projectImage}`
      const caption = 'Image ' + i + ' caption here';
      const thumb = `http://localhost:3000/${this.productToreder[i].projectImage}`;
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this._album.push(album)


    }


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

open(index: number): void {
// open lightbox
this._lightbox.open(this._album, index);
}

close(): void {
// close lightbox programmatically
this._lightbox.close();
}

}
