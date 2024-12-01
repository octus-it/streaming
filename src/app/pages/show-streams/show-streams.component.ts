import { Component } from '@angular/core';
import {ExploreSliderGridComponent} from "../../shared/explore-slider-grid/explore-slider-grid.component";
import {FooterLevel1Component} from "../../shared/footer/footer-level1/footer-level1.component";
import {FooterLevel2Component} from "../../shared/footer/footer-level2/footer-level2.component";
import {HerosWithHeaderBgComponent} from "../../shared/headers/heros-with-header-bg/heros-with-header-bg.component";
import {NavbarWithbgComponent} from "../../shared/headers/navbar-withbg/navbar-withbg.component";
import {NgIf} from "@angular/common";
import {ExploreDeriveComponent} from "../../shared/explore-derive/explore-derive.component";

@Component({
  selector: 'app-show-streams',
  standalone: true,
  imports: [
    ExploreSliderGridComponent,
    FooterLevel1Component,
    FooterLevel2Component,
    HerosWithHeaderBgComponent,
    NavbarWithbgComponent,
    NgIf,
    ExploreDeriveComponent
  ],
  templateUrl: './show-streams.component.html',
  styleUrl: './show-streams.component.scss'
})
export class ShowStreamsComponent {

}
