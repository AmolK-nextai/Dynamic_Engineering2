import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../admin/add-project/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = environment.apiUrl;
  product!:Project;
  productListSubject = new BehaviorSubject<any>(this.product)

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/project`);
  }
  getProductById(productId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/project/${productId}`);
  }
  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/project`, productData);
  }
  updateProduct(productId:any, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/project/${productId}`, productData);
  }

  
  deleteProduct(productId:any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/project/${productId}`);
  }

  
  addProductImgae(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/project/addnewimg`,data);
  }
  deleteProductImg(data:any){
    return this.http.patch<any>(`${this.apiUrl}/api/project/deleteimage`,data);
  }

}
