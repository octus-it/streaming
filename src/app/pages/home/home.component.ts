import { Component } from '@angular/core';
import {NavbarWithoutbgComponent} from "../../shared/headers/navbar-withoutbg/navbar-withoutbg.component";
import {HerosComponent} from "../../shared/headers/heros/heros.component";
import {ExploreSliderComponent} from "../../shared/headers/explore-slider/explore-slider.component";
import {StreamListDeviceComponent} from "../../shared/streams/stream-list-device/stream-list-device.component";
import {StreamFaqComponent} from "../../shared/streams/stream-faq/stream-faq.component";
import {StreamSuscribePlanComponent} from "../../shared/streams/stream-suscribe-plan/stream-suscribe-plan.component";
import {StreamStartFreePlanComponent} from "../../shared/stream-start-free-plan/stream-start-free-plan.component";
import {FooterLevel1Component} from "../../shared/footer/footer-level1/footer-level1.component";
import {FooterLevel2Component} from "../../shared/footer/footer-level2/footer-level2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarWithoutbgComponent,
    HerosComponent,
    ExploreSliderComponent,
    StreamListDeviceComponent,
    StreamFaqComponent,
    StreamSuscribePlanComponent,
    StreamStartFreePlanComponent,
    FooterLevel1Component,
    FooterLevel2Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
