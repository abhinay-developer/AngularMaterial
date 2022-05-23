import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseURL:""
  constructor(private http:HttpClient) { }

  public getAllUsers(){

  }

}
