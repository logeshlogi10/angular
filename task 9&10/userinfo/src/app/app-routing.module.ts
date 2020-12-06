import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UpdatesComponent } from './updates/updates.component';
const routes: Routes = [
  { path:'',component:UserComponent },
  { path:'updates',component:UpdatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
