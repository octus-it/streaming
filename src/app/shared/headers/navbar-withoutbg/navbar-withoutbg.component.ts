import {Component, HostListener} from '@angular/core';
import {NgClass} from "@angular/common";
import {SearchBarService} from "../../../core/search-bar.service";

@Component({
  selector: 'app-navbar-withoutbg',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar-withoutbg.component.html',
  styleUrl: './navbar-withoutbg.component.scss'
})
export class NavbarWithoutbgComponent {

  activeBackdrop = false
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll position:', scrollPosition);

    this.activeBackdrop = scrollPosition > 150;

    // Tu peux ici appeler une méthode ou mettre à jour des variables en fonction du scroll
  }



  constructor(
    public searcheBarStateService: SearchBarService
  ) { }

  activeTab: string = 'home';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onScroll() {
    console.log("je scroll")
  }

  activeSearchBar(){
    this.searcheBarStateService.updateSearchBarState(true);
    console.log("cliker sur active searche")
  }

  disableSearchBar(){
    this.searcheBarStateService.updateSearchBarState(false);
  }

}
