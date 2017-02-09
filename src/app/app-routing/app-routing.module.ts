import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LtFeedsComponent } from './../feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './../user/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'feeds', component: LtFeedsComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '**', redirectTo: '/feeds', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LtFeedsComponent,
    UserProfileComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
