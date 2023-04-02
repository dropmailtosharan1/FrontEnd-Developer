import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';

const routes : Routes = [
  // { path:'', redirectTo:'first-user', pathMatch:'full'},
  {path:'', component:UserComponent},
  {path:'first-user', component:FirstUserComponent},
  {path:'second-user', component:SecondUserComponent},  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserRoutingModule { }
