import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44314/api/"
  constructor(private HttpClient:HttpClient) { }

  getProducts():Observable<listResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.HttpClient.get<listResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.HttpClient.get<listResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"products/add",product)
  }
}
