import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/modelos/User';
import { UserResponse } from 'src/app/modelos/UserResponse';

@Injectable({
  providedIn: 'root'
})

export class UsuarioMostrarService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:8080/api/v1/users'
  
  getUser(){
    //let headers: HttpHeaders = new HttpHeaders();
    //headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Access-Control-Allow-Origin', '*');
    //return this.http.get<User[]>(this.Url, { headers })
    //return this.http.get<User[]>(this.Url)
    return this.http.get<UserResponse>(this.Url)
  }
}
