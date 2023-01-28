import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroArticleComponent } from './intro-article/intro-article.component';
import { SkillsComponent } from './skills/skills.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'about', component: IntroArticleComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
