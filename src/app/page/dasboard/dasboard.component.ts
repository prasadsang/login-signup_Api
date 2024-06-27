import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
// import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [MatCardModule,MatProgressBarModule,MatChipsModule,CommonModule],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent {
  longText ="Total Employees"

  items = [
    {
      title: 'Total Employees',
      number: 856,
      paragraph: 'Employee'
    },
    {
      title: 'Job View',
      number: 3342,
      paragraph: 'Viewers'
    },
    {
      title: 'Job Applied',
      number: 77,
      paragraph: 'Applicants'
    },
    {
      title: 'Resigned Employees',
       number: 17,
      paragraph: 'Employee',
    },
  ];
}
