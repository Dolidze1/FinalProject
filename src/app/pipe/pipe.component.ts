import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
   amount:number= 56.7 ;
   num:number= 5 ;

   word2:string = '';

   word:string = 'developer';
  currentDate:Date = new Date();
  oldDate: Date = new Date('12/10/2020');
  constructor() { }

  ngOnInit(): void {

    console.log(this.currentDate);
    console.log("week day  " + this.currentDate.getDay());
    console.log(" day  " + this.currentDate.getDate());
    console.log(" hour is  " + this.currentDate.getHours());

    console.log("minutes are   " + this.currentDate.getMinutes());
    console.log("secondes are  " + this.currentDate.getSeconds());

    const monthNames = ['january','febuary','march','april','january',];

    console.log(" current month is  " + monthNames[this.currentDate.getMonth()]);


    var newDate = this.currentDate.setMonth


  }

}
