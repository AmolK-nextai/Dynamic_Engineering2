import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,private authService:AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Replace with your actual authorization token
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/project-categories`);
  }
  
  getCategoryById(categoryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/project-categories/${categoryId}`);
  }
   
  addCategory(categoryData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}/api/project-categories`, categoryData,{headers});
  }

  updateCategory(categoryId: string, categoryData: any): Observable<any> {
    const headers = this.getHeaders();

    return this.http.put<any>(`${this.apiUrl}/api/project-categories/${categoryId}`, categoryData,{headers});
  }

  deleteCategory(categoryId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.apiUrl}/api/project-categories/${categoryId}`,{ headers });
  }


}
