import { Component } from '@angular/core';
import {StreamTitleSubComponent} from "../../stream-title-sub/stream-title-sub.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-stream-list-device',
  standalone: true,
  imports: [
    StreamTitleSubComponent,
    NgForOf
  ],
  templateUrl: './stream-list-device.component.html',
  styleUrl: './stream-list-device.component.scss'
})
export class StreamListDeviceComponent {

}
