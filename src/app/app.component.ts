import { Component } from '@angular/core';
import { NavmenuComponent } from './navmenu/navmenu.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { IntroArticleComponent } from './intro-article/intro-article.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [NavmenuComponent, RouterLinkWithHref, RouterOutlet, IntroArticleComponent, SkillsComponent, ResumeComponent, ContactComponent, FooterComponent],
  standalone : true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
