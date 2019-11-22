import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioEliminarService {

  constructor(private http:HttpClient) { }
  
  Url=environment.apiUrl + '/api/v1/users/'
  
  deleteUser(id){
    return this.http.delete<UserResponse>(this.Url + id)
  }
}
