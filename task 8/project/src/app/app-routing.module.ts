import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppVersionComponent } from './app-version/app-version.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'faq', component: FaqComponent },
    { path: 'login', component: LoginComponent },
    { path: 'subscription', component: SubscriptionComponent },
    { path: 'app-version', component: AppVersionComponent },
    { path: 'users', component: UsersComponent },
    { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
