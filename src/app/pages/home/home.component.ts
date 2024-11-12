import {Component, OnInit} from '@angular/core';
import {NavbarWithoutbgComponent} from "../../shared/headers/navbar-withoutbg/navbar-withoutbg.component";
import {HerosComponent} from "../../shared/headers/heros/heros.component";
import {ExploreSliderComponent} from "../../shared/headers/explore-slider/explore-slider.component";
import {StreamListDeviceComponent} from "../../shared/streams/stream-list-device/stream-list-device.component";
import {StreamFaqComponent} from "../../shared/streams/stream-faq/stream-faq.component";
import {StreamSuscribePlanComponent} from "../../shared/streams/stream-suscribe-plan/stream-suscribe-plan.component";
import {StreamStartFreePlanComponent} from "../../shared/stream-start-free-plan/stream-start-free-plan.component";
import {FooterLevel1Component} from "../../shared/footer/footer-level1/footer-level1.component";
import {FooterLevel2Component} from "../../shared/footer/footer-level2/footer-level2.component";
import {SearchComponent} from "../../shared/search/search.component";
import {SearchBarService} from "../../core/search-bar.service";
import {NgClass, NgIf} from "@angular/common";
import {initFlowbite} from "flowbite";

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
    FooterLevel2Component,
    SearchComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  searcheBarState:boolean = false ;
  constructor(
   public searcheBarStateService: SearchBarService
  ) {
  }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      import('flowbite').then(() => {
        console.log('Flowbite loaded');
      }).catch((err) => {
        console.error('Error loading Flowbite:', err);
      });
    }
    this.searcheBarStateService.activeSearchBar$.subscribe((m)=>{
      this.searcheBarState = m
    })


  }



}
