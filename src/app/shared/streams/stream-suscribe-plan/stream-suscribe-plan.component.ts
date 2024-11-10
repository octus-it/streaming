import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {StreamTitleSubComponent} from "../../stream-title-sub/stream-title-sub.component";
import {StreamSuscribePlanCardComponent} from "../../stream-suscribe-plan-card/stream-suscribe-plan-card.component";

@Component({
  selector: 'app-stream-suscribe-plan',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    StreamTitleSubComponent,
    NgClass,
    StreamSuscribePlanCardComponent
  ],
  templateUrl: './stream-suscribe-plan.component.html',
  styleUrl: './stream-suscribe-plan.component.scss'
})
export class StreamSuscribePlanComponent {

  activeTab: string = 'profile';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
