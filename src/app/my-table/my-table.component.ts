import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from "../my-http-service.service";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  data:any
  postData={
    "userId": 100,
    "id": 1,
    "title": "gaodo",
    "body": "asdasd"
  }
  postDataFun(){
    this.myhttp.postData(this.postData);
  }
  updateData(){
    this.myhttp.updateData(this.postData, this.postData.id).subscribe(result=>{
      console.log(this.postData)
    });
    
  }
  constructor(private myhttp: MyHttpServiceService) {
    this.myhttp.getData().subscribe(data=>{
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
