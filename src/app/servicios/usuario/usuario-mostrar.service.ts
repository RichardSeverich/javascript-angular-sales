import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/modelos/User';

@Injectable({
  providedIn: 'root'
})

export class UsuarioMostrarService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:8080/api/v1/users'
  
  getUser(){
    return this.http.get<User[]>(this.Url)
  }
}
