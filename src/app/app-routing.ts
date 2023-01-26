import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./carousel/carousel.component').then(comp => comp.CarouselComponent)},
  { path: 'about', loadComponent: () => import('./intro-article/intro-article.component').then(comp => comp.IntroArticleComponent)},
  { path: 'skills', loadComponent: () => import('./skills/skills.component').then(comp => comp.SkillsComponent)},
  { path: 'resume', loadComponent: () => import('./resume/resume.component').then(comp => comp.ResumeComponent)},
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(comp => comp.ContactComponent)}
];
