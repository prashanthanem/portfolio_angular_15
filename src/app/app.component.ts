import { Component } from '@angular/core';
import { NavmenuComponent } from './navmenu/navmenu.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";

@Component({
  imports: [NavmenuComponent, RouterLinkWithHref, RouterOutlet],
  standalone : true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
