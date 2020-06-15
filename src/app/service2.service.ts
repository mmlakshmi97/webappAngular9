import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Service2Service{

    API_URL: string = "api/";

    constructor(private httpClient: HttpClient) { }
  
    getProducts() {
      return this.httpClient.get(this.API_URL + 'products')
    }
  
    getProduct(productId) {
      return this.httpClient.get(`${this.API_URL + 'products'}/${productId}`)
    }
}
