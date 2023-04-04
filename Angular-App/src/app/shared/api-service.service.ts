import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiURL}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.apiURL}/users/${id}`);
  }

  createUser(user: any) {
    return this.http.post(`${this.apiURL}/users`, user);
  }

  updateUser(user: any) {
    return this.http.put(`${this.apiURL}/users/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiURL}/users/${id}`);
  }
}