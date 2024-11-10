import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {initFlowbite} from "flowbite";
import {NgForOf} from "@angular/common";
import {StreamCategoryComponent} from "../../streams/stream-category/stream-category.component";
import {StreamTitleSubComponent} from "../../stream-title-sub/stream-title-sub.component";

@Component({
  selector: 'app-explore-slider',
  standalone: true,
  imports: [
    NgForOf,
    StreamCategoryComponent,
    StreamTitleSubComponent
  ],
  templateUrl: './explore-slider.component.html',
  styleUrl: './explore-slider.component.scss'
})
export class ExploreSliderComponent implements OnInit{
  @ViewChild('childContainer') childContainer!: ElementRef;

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      import('flowbite').then(() => {
        console.log('Flowbite loaded');
      }).catch((err) => {
        console.error('Error loading Flowbite:', err);
      });
    }
  }



  scrollLeft() {
    const container = this.childContainer.nativeElement as HTMLElement;
    container.scrollLeft -= 400; // Défilement vers la gauche
  }

  scrollRight() {
    const container = this.childContainer.nativeElement as HTMLElement;
    container.scrollLeft += 400; // Défilement vers la droite
  }
}
