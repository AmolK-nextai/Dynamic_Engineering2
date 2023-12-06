import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient, private authService: AuthService) {}
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Replace with your actual authorization token
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });


}

private apiUrl = 'http://localhost:3000/api';
addUser(data:any): Observable<any> {
  const headers = this.getHeaders();
  return this.http.post(`${this.apiUrl}/users/register`,data,{headers});
}
fetchLoggedInUserProfile(): Observable<any> {
  const headers = this.getHeaders();
  return this.http.get(`${this.apiUrl}/users/profile`,{headers});
}
updateUserPrivileges(userId: number, newRole: string): Observable<any> {
  const headers = this.getHeaders();
  return this.http.put(`${this.apiUrl}/update-privileges/${userId}`, { role: newRole },{headers});
}

deleteUser(userId: number): Observable<any> {
  const headers = this.getHeaders();
  return this.http.delete(`${this.apiUrl}/users/delete/${userId}`,{headers});
}
}
