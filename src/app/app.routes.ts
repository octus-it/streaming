import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FootballComponent} from "./pages/football/football.component";
import {ShowStreamsComponent} from "./pages/show-streams/show-streams.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'football',
    component: FootballComponent
  },
  {
    path: 'show-stream',
    component: ShowStreamsComponent
  }
];
