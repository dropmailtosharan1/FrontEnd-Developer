import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  buttonHide = true;
  users = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Jane Doe', email: 'janedoe@example.com' },
    { name: 'Bob Smith', email: 'bobsmith@example.com' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com' },
  ];
  @Input('appHighlight') highlightColor: string | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor || 'yellow';
  }
  buttonClicked() {
    this.buttonHide = !this.buttonHide;
  }
}
