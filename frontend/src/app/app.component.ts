import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  msgs: Message[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}
