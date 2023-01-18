import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  url = 'https://reqres.in/api/registerUsers';

  getUsers() {
    // return this.http.get(`${this.url}/getUsers`);
    return this.http.get(this.url);
    
  }
  
  newUser(nombre: string, año: number, color: string) {
    return this.http.post(`${this.url}/registerUsers?name=${nombre}&year=${año}&color=${color}`, console.log('consultado la ruta: ', `${this.url}/registerUsers?name=${nombre}&year=${año}&color=${color}`))
    
  }
}
