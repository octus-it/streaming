import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-stream-title-sub',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './stream-title-sub.component.html',
  styleUrl: './stream-title-sub.component.scss'
})
export class StreamTitleSubComponent {

  @Input() title = ""
  @Input() subTitle = ""
  @Input() activeSubTitle = true


}
