import { Component, OnInit, Input } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import {FormControl , FormGroup, MinLengthValidator, ReactiveFormsModule} from "@angular/forms"



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   @Input() iputId:number[]=[];
   @Input()
   @Input()

   inputSearch : string = '';
   fullUsersData:any[]=[];
   usersData : any[] = [];

   
  

   showError:boolean = false;
  constructor(public userService : UsersServiceService) {

   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {this.usersData = data; this.fullUsersData=data;  console.log()}
    );

  }

  ngOnChanges(changes:any)
  {
    for(let property in changes){

        if(property == "inputSearch"){
     
          var search = changes[property].currentValue;
          console.log(search);

          if(search != '' && search != undefined ){

             console.log(this.fullUsersData)
            var filtersData = this.fullUsersData.filter((x:any)=> x.id == search ||
            
            x.Id == search ||
            x.name.indexOf(search) > -1 ||
            x.body.indexOf(search) > -1 )  ;

            this.usersData=filtersData;


            
            

          } if(search == '' || search == undefined ){

            this.showError=true;
          }

          else{
            this.showError=false;

          }
         
          }


          
         
        } 
    }
  

  saveProducts(){

  }

  


}
