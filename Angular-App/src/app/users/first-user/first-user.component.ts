import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrls: ['./first-user.component.css']
})
export class FirstUserComponent implements OnInit {

  @Input() myValProp: string='';
  propChanges: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.propChanges = changes;
    console.log(this.propChanges);
  }
}
