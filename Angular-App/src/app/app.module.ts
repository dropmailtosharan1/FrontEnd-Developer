import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { FirstUserComponent } from './users/first-user/first-user.component';
import { SecondUserComponent } from './users/second-user/second-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChildDataComponent } from './components/child-data/child-data.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ComponentComponent } from './components/component.component';
import { UserComponent } from './users/user.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    DataBindingsComponent,
    FirstUserComponent,
    SecondUserComponent,
    ChildDataComponent,
    ParentDataComponent,
    LifeCycleHooksComponent,
    ReactiveFormsComponent,
    PageNotFoundComponent,
    ComponentComponent,
    UserComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
