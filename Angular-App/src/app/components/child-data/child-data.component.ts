import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/api-service.service';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {

  
  message: string = "Hello from child component!";
  users:any;

  @Output() messageEvent = new EventEmitter<string>();

  constructor( private apiService:ApiServiceService) { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
  
  ngOnInit() {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
  
  addUser() {
    const user = { name: 'New User', email: 'newuser@example.com' };
    this.apiService.createUser(user).subscribe((data: any) => {
      this.users.push(data);
    });
  }

  updateUser(user: any) {
    this.apiService.updateUser(user).subscribe();
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u: { id: number; }) => u.id !== id);
    });
  }


}
