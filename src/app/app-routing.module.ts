import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyWorkDetailsComponent } from './my-work-details/my-work-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'about',       component: AboutMeComponent },
  { path: 'mywork',      component: MyWorkComponent },
  { path: 'mywork/:id',  component: MyWorkDetailsComponent },
  { path: '**',    component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
