import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login', component:LoginPage},
    {path:'private',canActivate:[privateGuard], component:PrivateTemplate, children:[
    
    ]},
    {path:'', redirectTo:'private', pathMatch:'full'},
    {path:'**', redirectTo:'login'}
];
