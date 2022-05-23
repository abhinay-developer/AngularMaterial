import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'users',component:UsersComponent
  },
  {
    path:'filter',component:FilterTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
