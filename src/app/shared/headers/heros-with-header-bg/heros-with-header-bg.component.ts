import { Component, AfterViewInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-heros-with-header-bg',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './heros-with-header-bg.component.html',
  styleUrls: ['./heros-with-header-bg.component.scss']
})
export class HerosWithHeaderBgComponent implements AfterViewInit {
  carouselElement!: HTMLElement;
  items: any[] = [];
  options: any = {
    defaultPosition: 1,
    interval: 5000,
    indicators: {
      activeClasses: 'bg-white dark:bg-red-800',
      inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      items: []
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Vérifier si on est côté navigateur
    if (isPlatformBrowser(this.platformId)) {
      // Importer Flowbite dynamiquement
      import('flowbite').then((module) => {
        const { Carousel } = module;

        // Récupérer les éléments DOM du carousel
        this.carouselElement = document.getElementById('default-carousel')!;
        if (!this.carouselElement) {
          console.error('Carousel element not found');
          return;
        }

        this.items = [
          { position: 0, el: document.getElementById('carousel-item-1')! },
          { position: 1, el: document.getElementById('carousel-item-2')! },
          { position: 2, el: document.getElementById('carousel-item-3')! },
        ].filter((item) => item.el);

        this.options.indicators.items = [
          { position: 0, el: document.getElementById('carousel-indicator-1')! },
          { position: 1, el: document.getElementById('carousel-indicator-2')! },
          { position: 2, el: document.getElementById('carousel-indicator-3')! },
        ].filter((indicator) => indicator.el);

        if (this.items.length === 0) {
          console.error('No carousel items found');
          return;
        }

        const carousel = new Carousel(this.carouselElement, this.items, this.options);
        carousel.cycle();

        // set event listeners for prev and next buttons
        const $prevButton = document.getElementById('data-carousel-prev');
        const $nextButton = document.getElementById('data-carousel-next');

        if ($nextButton && $prevButton){
          $prevButton.addEventListener('click', () => {
            carousel.prev();
          });

          $nextButton.addEventListener('click', () => {
            carousel.next();
          });
        }

      }).catch((err) => {
        console.error('Error loading Flowbite:', err);
      });
    }
  }
}
