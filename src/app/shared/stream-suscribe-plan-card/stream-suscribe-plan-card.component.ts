import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stream-suscribe-plan-card',
  standalone: true,
  imports: [],
  templateUrl: './stream-suscribe-plan-card.component.html',
  styleUrl: './stream-suscribe-plan-card.component.scss'
})
export class StreamSuscribePlanCardComponent {

  @Input() planName: string = '';
  @Input() planDescription: string = '';
  @Input() planPrice: string = '';
  @Input() planFrequency: string = '/month';
}
