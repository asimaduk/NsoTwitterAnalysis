import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string){
    return this.httpClient.get(`http://localhost:7000/api/${endpoint}`);
  }
}
