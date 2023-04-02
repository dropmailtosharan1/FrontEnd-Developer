import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'component', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/user-routing.module').then(
        (user) => user.UserRoutingModule
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components/component-routing.module').then(
        (component) => component.ComponentRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
