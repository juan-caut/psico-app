import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CommunityPageComponent } from './pages/community-page/community-page.component';
import { PsyonlinePageComponent } from './pages/psyonline-page/psyonline-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { LoginsigninPageComponent } from './pages/loginsignin-page/loginsignin-page.component';

export const routes: Routes = [
    {path:'home',component:HomePageComponent},
    {path:'courses',component:CoursesPageComponent},
    {path:'community',component:CommunityPageComponent},
    {path:'psyonline',component:PsyonlinePageComponent},
    {path:'blogs',component:BlogPageComponent},
    {path:'login',component:LoginsigninPageComponent},
    {path:'signin',component:LoginsigninPageComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'},

];
