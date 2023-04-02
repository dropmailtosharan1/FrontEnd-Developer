import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  // { path:'', redirectTo:'data-binding', pathMatch:'full'},
  {path:'', component:ComponentComponent},
  {path:'data-bindings', component:DataBindingsComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'child-data', component:ChildDataComponent},
  {path:'parent-data', component:ParentDataComponent},
  {path:'life-cycle-hooks', component:LifeCycleHooksComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ComponentRoutingModule { }
