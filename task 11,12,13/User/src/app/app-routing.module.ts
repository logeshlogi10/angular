import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstancesComponent } from './instances/instances.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'instances',component:InstancesComponent},
  {path:'users',component:UsersComponent},
  {path:'',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
