import {Component, OnInit} from '@angular/core';
import {NavbarWithbgComponent} from "../../shared/headers/navbar-withbg/navbar-withbg.component";
import {NavbarWithoutbgComponent} from "../../shared/headers/navbar-withoutbg/navbar-withoutbg.component";
import {ExploreSliderComponent} from "../../shared/headers/explore-slider/explore-slider.component";
import {FooterLevel1Component} from "../../shared/footer/footer-level1/footer-level1.component";
import {FooterLevel2Component} from "../../shared/footer/footer-level2/footer-level2.component";
import {HerosComponent} from "../../shared/headers/heros/heros.component";
import {NgIf} from "@angular/common";
import {SearchComponent} from "../../shared/search/search.component";
import {StreamFaqComponent} from "../../shared/streams/stream-faq/stream-faq.component";
import {StreamListDeviceComponent} from "../../shared/streams/stream-list-device/stream-list-device.component";
import {StreamStartFreePlanComponent} from "../../shared/stream-start-free-plan/stream-start-free-plan.component";
import {StreamSuscribePlanComponent} from "../../shared/streams/stream-suscribe-plan/stream-suscribe-plan.component";
import {HerosWithHeaderBgComponent} from "../../shared/headers/heros-with-header-bg/heros-with-header-bg.component";
import { NgOptimizedImage } from '@angular/common'
import {ExploreSliderGridComponent} from "../../shared/explore-slider-grid/explore-slider-grid.component";
@Component({
  selector: 'app-football',
  standalone: true,
  imports: [
    NavbarWithbgComponent,
    NavbarWithoutbgComponent,
    ExploreSliderComponent,
    FooterLevel1Component,
    FooterLevel2Component,
    HerosComponent,
    NgIf,
    SearchComponent,
    StreamFaqComponent,
    StreamListDeviceComponent,
    StreamStartFreePlanComponent,
    StreamSuscribePlanComponent,
    HerosWithHeaderBgComponent,
    NgOptimizedImage,
    ExploreSliderGridComponent
  ],
  templateUrl: './football.component.html',
  styleUrl: './football.component.scss'
})
export class FootballComponent implements  OnInit{
  documentIsLoaded = false;
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      import('flowbite').then(() => {
        console.log('Flowbite loaded');
        this.documentIsLoaded = true;
      }).catch((err) => {
        console.error('Error loading Flowbite:', err);
      });
    }
  }


}
