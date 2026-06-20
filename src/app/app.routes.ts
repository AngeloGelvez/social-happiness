import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "feed", component: FeedComponent },
    { path: "profile", component: ProfileComponent }
    
];
