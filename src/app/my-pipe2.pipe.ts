import { WeekDay } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe2'
})
export class MyPipe2Pipe implements PipeTransform {
  currentDate:Date = new Date();

  transform(value: Date , showWeekDay:boolean): string {

    var result = ""

    var day = value.getDate();
    var year = value.getFullYear();
    var monthNmber = value.getMonth();
     
    var georgianMonth = ['იანვარი','თებერვალი','მარტი','აპრილი','მაისი',]
 var month = georgianMonth[monthNmber];

   result= day + ' ' + month + ' ' + year + 'წელი' 

    if(showWeekDay) {
    
    
    var weekdaynumber = value.getDay();

    var georgianWeek = ['კვირა','ორშაბათი','სამშაბათი','ოთხშაბათი','ხუთშაბათოი','პარასკევი','შაფათი',]
        
    var weekday = georgianWeek[weekdaynumber] 
    }
    return result   
  }

}
