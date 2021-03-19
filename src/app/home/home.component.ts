import { Component, OnInit } from '@angular/core';
import { MyServiceService } from "../my-service.service";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  getValueForm(val: any){
    alert(val);
    console.error(val)
  }
  date : any
  showDate(){
    this.date =this.myService.showDate()
  }

  constructor(private myService: MyServiceService) { 
  }

  ngOnInit(): void {
  }

}
