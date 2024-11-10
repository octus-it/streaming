import { Component } from '@angular/core';
import {StreamTitleSubComponent} from "../../stream-title-sub/stream-title-sub.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-stream-faq',
  standalone: true,
  imports: [
    StreamTitleSubComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './stream-faq.component.html',
  styleUrl: './stream-faq.component.scss'
})
export class StreamFaqComponent {

}
