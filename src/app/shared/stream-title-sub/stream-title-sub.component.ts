import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-stream-title-sub',
  standalone: true,
  imports: [],
  templateUrl: './stream-title-sub.component.html',
  styleUrl: './stream-title-sub.component.scss'
})
export class StreamTitleSubComponent {

  @Input() title = ""
  @Input() subTitle = ""

}
