import { Injectable } from '@angular/core';
import { CustomHttpClient } from '@libs/custom-http-client/custom-http-client';
import { Pinto } from '@services/login/login';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: CustomHttpClient) { }

  teste(){
    return this.http.get<Pinto>('/81050160/json')
  }
}
