import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserDetails(userDetails:any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', userDetails);
  }

  putUserDetails(userDetails:any){
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', userDetails);
  }


  patchUserDetails(userDetails:any){
    return this.http.patch('https://jsonplaceholder.typicode.com/users/1', userDetails);
  }


  deleteUserDetails(userDetails:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/1', userDetails);
  }


}
