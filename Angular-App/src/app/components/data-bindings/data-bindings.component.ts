import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  name = 'Mr.John';
  isDisabled=false;
  text='Property Binding'
  textInput='Mr.Jones'
  fontSize = 14;
  hasBorder = true;
  isHovered = false;
  textName='Lee';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Hello, ' + this.textName + '!');
  }
  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2;
  }
  toggleBorder() {
    this.hasBorder = !this.hasBorder;
  }

}
