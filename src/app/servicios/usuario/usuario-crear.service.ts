import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/modelos/User';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCrearService {

  constructor(private http:HttpClient) { }
  
  Url=environment.apiUrl + '/api/v1/users'
  
  createUser(user:User){
    return this.http.post<UserResponse>(this.Url, user)
  }

}
 