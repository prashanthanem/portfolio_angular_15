import { Component } from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";

@Component({
  imports : [ RouterLinkWithHref, RouterOutlet],
  standalone: true,
  selector: 'navmenu',
  templateUrl: './navmenu.component.html'
})
export class NavmenuComponent {

}
