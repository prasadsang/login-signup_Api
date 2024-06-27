import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { single } from 'rxjs';
import { RouterModule } from '@angular/router'; // Import RouterModule
export type MenuItem = {
  icon: string;
  label: string;
  route:string;
};
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule,MatIcon,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  
  sideNavCollapsed=signal(false);
 @Input() set collapsed(val:boolean){
  this.sideNavCollapsed.set(val)
 }
  menuItiems = signal<MenuItem[]>([
    { 
      icon: 'dashboard',
      label:'Dashboard',
      route:'dashboard'
     },
     { 
      icon: 'equalizer',
      label:'Finance',
      route:'content',
     },
     { 
      icon: 'account_circle',
      label:'Employees',
      route:'Comments',
     },
     { 
      icon: 'business',
      label:'Company',
      route:'Comments',
     },
     { 
      icon: 'people',
      label:'Candidate',
      route:'Comments',
     },
     { 
      icon: 'perm_contact_calendar',
      label:'Calendar',
      route:'Comments',
     },
  ]);

  profilePicSize= computed(()=>this.sideNavCollapsed()? '32' :'100')
}
