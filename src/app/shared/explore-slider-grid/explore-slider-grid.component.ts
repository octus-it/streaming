import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {StreamCategoryComponent} from "../streams/stream-category/stream-category.component";
import {StreamTitleSubComponent} from "../stream-title-sub/stream-title-sub.component";

@Component({
  selector: 'app-explore-slider-grid',
  standalone: true,
  imports: [
    NgForOf,
    StreamCategoryComponent,
    StreamTitleSubComponent
  ],
  templateUrl: './explore-slider-grid.component.html',
  styleUrl: './explore-slider-grid.component.scss'
})
export class ExploreSliderGridComponent {

}
