import { Component, OnInit, Input } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import {FormControl , FormGroup, MinLengthValidator, ReactiveFormsModule} from "@angular/forms"



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   @Input()
   inputSearch : string = '';
  usersData : any[] = [];
  userForms= new FormGroup({
            
    nameControl:  new FormControl(''),
    priceControl:  new FormControl(''),
    quantityControl: new FormControl(''),
    varietyControl: new FormControl(''),
    idControl : new FormControl(''),
   
  });

  showError:boolean = false;
  constructor(public userService : UsersServiceService) {

   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {this.usersData = data; console.log(this.usersData)}
    );

  }

  ngOnChanges(changes:any)
  {
    for(let property in changes){

        if(property == "inputSearch"){
     
          var search = changes[property].currentValue;
          console.log(search);

          if(search != '' && search != undefined){

            var filtersData = this.usersData.filter((x:any)=> x.id == search ||
            
            x.userId == search ||
            x.title.indexOf(search) > -1 ||
            x.body.indexOf(search) > -1 );


          }
         
          }


          
         
        }
    }
  

  saveProducts(){

  }

  


}
