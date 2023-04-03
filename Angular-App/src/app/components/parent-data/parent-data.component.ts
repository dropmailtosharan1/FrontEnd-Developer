import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  
  message='';

  
  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(event:any) {
    this.message = event;
  }
}
