import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TwitchAuthComponent} from './auth/twitch-auth/twitch-auth.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'auth/twitch', component: TwitchAuthComponent},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
