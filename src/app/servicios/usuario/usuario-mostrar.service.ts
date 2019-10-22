import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserResponse } from 'src/app/modelos/UserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioMostrarService {

  constructor(private http:HttpClient) { }
  
  Url=environment.apiUrl + '/api/v1/users'
  
  getUser(){
    //let headers: HttpHeaders = new HttpHeaders();
    //headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('Access-Control-Allow-Origin', '*');
    //return this.http.get<UserResponse>(this.Url, { headers })
    return this.http.get<UserResponse>(this.Url)
  }
}
