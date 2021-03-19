import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nuclear shop';
  temp= true
  number=2
  myname(){
    this.temp=!this.temp;
    alert("my name is nuclear")
  }
  data=['sieu', 'nhan', 'gao']
  dataObject=[
    {
      name: 'dat',
      age: 19
    },
    {
      name: 'tuan anh',
      age: 18
    },
    {
      name: 'gao do',
      age: 20
    }
  ]
   pipe="tran hUU daT"
   today = Date.now()
   today1=new Date("2021-01-20")
   moneyVND= 200
   moneyUSD=30
   percent=[0.1,0.2,0.3]


}
