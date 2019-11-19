import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  Url=environment.apiUrl + '/api/v1/users/'
  
  getUserById(id){
    return this.http.get<UserResponse>(this.Url + id)
  }
}
