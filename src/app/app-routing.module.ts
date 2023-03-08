import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSpeakersComponent } from './pages/dashboard-speakers/dashboard-speakers.component';
import { SpeakerInfoComponent } from './pages/speaker-info/speaker-info.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/speakers',
    pathMatch:'full'
  },
  {
    path:'speakers',
    component: DashboardSpeakersComponent
  },
  {
    path: 'speaker-info', 
    component: SpeakerInfoComponent
  },
  {
    path:'**',
    redirectTo:'/speakers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
