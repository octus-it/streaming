import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  activeSearchBar = new BehaviorSubject<boolean>(false)
  activeSearchBar$ = this.activeSearchBar.asObservable()

  constructor() { }

  getSearchBarState(){
    return this.activeSearchBar.getValue();
  }

  updateSearchBarState(state: boolean){
    this.activeSearchBar.next(state);
  }
}
