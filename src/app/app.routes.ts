import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FeedModuleComponent } from './components/feed-module/feed-module.component';
import { FeedTagModuleComponent } from './components/feed-tag-module/feed-tag-module.component';
import { AllTagsModuleComponent } from './components/all-tags-module/all-tags-module.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "feed", component: FeedComponent, children: [
        { path:"", component: FeedModuleComponent },
        { path:"tag/:name", component: FeedTagModuleComponent },   
        { path:"tags", component: AllTagsModuleComponent },   
    ]},
    { path: "profile", component: ProfileComponent }
    
];
