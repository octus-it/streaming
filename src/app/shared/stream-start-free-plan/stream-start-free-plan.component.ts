import { Component } from '@angular/core';
import {StreamTitleSubComponent} from "../stream-title-sub/stream-title-sub.component";

@Component({
  selector: 'app-stream-start-free-plan',
  standalone: true,
  imports: [
    StreamTitleSubComponent
  ],
  templateUrl: './stream-start-free-plan.component.html',
  styleUrl: './stream-start-free-plan.component.scss'
})
export class StreamStartFreePlanComponent {

}
