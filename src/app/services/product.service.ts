import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44314/api/products/getall"
  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<listResponseModel<Product>>{
    return this.HttpClient.get<listResponseModel<Product>>(this.apiUrl);
  }
}
