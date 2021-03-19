import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    let url="http://jsonplaceholder.typicode.com/posts"
    return this.httpClient.get(url);
  }
  getDataById(id:any){
    let url="http://jsonplaceholder.typicode.com/posts"
    return this.httpClient.get(`${url}/ ${id}`);
  }

  postData(data:any){
    let url="http://jsonplaceholder.typicode.com/posts"
    return this.httpClient.post(url,data);
  }

  updateData(data:any, id: number){
    let url="https://jsonplaceholder.typicode.com/posts"
    return this.httpClient.put(`${url}/`+id,data);
  }

  deleteData(id: number){
    let url="https://jsonplaceholder.typicode.com/posts"
    return this.httpClient.delete(`${url} / ${id.toString()}`);
  }
}
