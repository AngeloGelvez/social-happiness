import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FeedModuleComponent } from './components/feed-module/feed-module.component';
import { FeedTagModuleComponent } from './components/feed-tag-module/feed-tag-module.component';
import { AllTagsModuleComponent } from './components/all-tags-module/all-tags-module.component';
import { PostByIdModuleComponent } from './components/post-by-id-module/post-by-id-module.component';
import { UserPublicationComponent } from './components/user-publication/user-publication.component';
import { authGuard } from './auth-routes/auth-routes';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "feed", canActivate: [authGuard], component: FeedComponent, children: [
        { path:"", component: FeedModuleComponent },
        { path:"tag/:name", component: FeedTagModuleComponent },   
        { path:"tags", component: AllTagsModuleComponent },   
        { path:"post/:id", component: PostByIdModuleComponent },   
    ]},
    { path:"publication", canActivate: [authGuard], component: FeedComponent, children: [
        { path:"", component: UserPublicationComponent },
    ] },
    { path:"dashboard", canActivate: [authGuard], component: FeedComponent, children: [
        { path: "", component: DashboardComponent },
    ] },
    { path:"post/add", canActivate: [authGuard], component: FeedComponent, children: [
        { path: "", component: CreatePostComponent },
    ] },
    { path: "profile/:id", canActivate: [authGuard], component: ProfileComponent },
    { path: "**", component: LoginComponent }
    
];
