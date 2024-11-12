import {Component, OnInit} from '@angular/core';
import {SearchBarService} from "../../core/search-bar.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  constructor(
    public searcheBarStateService: SearchBarService
  ) {
  }

  ngOnInit(): void {
  }

  activeSearchBar(){
    this.searcheBarStateService.updateSearchBarState(true);
  }

  disableSearchBar(){
    this.searcheBarStateService.updateSearchBarState(false);
  }

}
