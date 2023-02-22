import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public userDetails:any;
  public name:any;
  public email:any;
  public phone:any;


  constructor(private ds:DataService){}
  postUser(){
let userDetails ={
  name:this.name,
  email:this.email,
  phone:this.phone
}
this.ds.postUserDetails(userDetails).subscribe((response=>{
  console.log('post',response);
  
}))
  }


  putUser(){
    let userDetails ={
      name:this.name,
      email:this.email,
      phone:this.phone
    }
    this.ds.putUserDetails(userDetails).subscribe((response=>{
      console.log('put',response);
      
    }))
      }

      patchUser(){
        let userDetails ={
          name:this.name,
          email:this.email,
          phone:this.phone
        }
        this.ds.patchUserDetails(userDetails).subscribe((response=>{
          console.log('patch',response);
          
        }))
          }

          deleteUser(){
            let userDetails ={
              name:this.name,
              email:this.email,
              phone:this.phone
            }
            this.ds.deleteUserDetails(userDetails).subscribe((response=>{
              console.log('delete',response);
              
            }))
              }
      

  
}
