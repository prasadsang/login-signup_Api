import { Routes } from '@angular/router';
import { DasboardComponent } from './page/dasboard/dasboard.component';
import { ContentComponent } from './page/content/content.component';

export const routes: Routes = [
    {path:'dashboard',component:DasboardComponent},
    {path:'content',component:ContentComponent}
];
