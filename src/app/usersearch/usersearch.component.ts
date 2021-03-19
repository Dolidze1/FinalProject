import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent  {

  title = 'FinalProject';
 
  searchWord:string = '';
  searchInput : string = ''
   
  idWord:number=0;
  idInput:number=0;

  bodyWord:string='';
  bodyInput:string=''

searchData(){
 
   this.searchWord =this.searchInput
}


saerchById(){
  this.idWord=this.idInput;

  this.bodyWord=this.bodyInput
}

}