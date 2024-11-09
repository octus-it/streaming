import { Component } from '@angular/core';
import {NavbarWithoutbgComponent} from "../../shared/headers/navbar-withoutbg/navbar-withoutbg.component";
import {HerosComponent} from "../../shared/headers/heros/heros.component";
import {ExploreSliderComponent} from "../../shared/headers/explore-slider/explore-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarWithoutbgComponent,
    HerosComponent,
    ExploreSliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
