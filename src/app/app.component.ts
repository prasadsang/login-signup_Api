import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "./page/sidebar/sidebar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MatSidenavModule, MatIconModule, MatSlideToggleModule, MatToolbarModule, SidebarComponent]
})
export class AppComponent {
  title = 'dashbord';


  collapsed=signal(false)
  sidenavWidth=computed(()=> this.collapsed()? '65px':'250px')
}
