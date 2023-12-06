import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private router: Router,private http:HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({ username, password }:any){
    console.log(this.apiUrl)
    return this.http.post<any>(`${this.apiUrl}/api/users/login`,{username,password});


}
registerUser({ username, password, role }: any) {
  return this.http.post<any>(`${this.apiUrl}/api/users/register`, { username, password, role });
}

fetchLoggedInUserProfile() {
  return this.http.get<any>(`${this.apiUrl}/api/users/profile`);
}

updatePrivileges(userId: number, role: string) {
  return this.http.put<any>(`${this.apiUrl}/api/users/update-privileges/${userId}`, { role });
}


}
