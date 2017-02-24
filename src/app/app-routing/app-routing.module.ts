import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LtFeedsComponent } from './../feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './../user/user-profile/user-profile.component';
import { UserPostFormComponent } from './../user/user-post-form/user-post-form.component';
import { UserFeedsComponent } from '../user/user-feeds/user-feeds.component';
import { LikeComponent } from '../app-component/like/like.component';
import { CommentComponent } from '../app-component/comment/comment.component'
import { ShareComponent } from '../app-component/share/share.component';
import { RecommendComponent } from '../app-component/recommend/recommend.component';

const routes: Routes = [
  { path: 'feeds', component: LtFeedsComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'userPost', component: UserPostFormComponent },
  { path: '**', redirectTo: '/feeds', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LtFeedsComponent,
    UserProfileComponent,
    UserFeedsComponent,
    LikeComponent,
    CommentComponent,
    ShareComponent,
    RecommendComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
