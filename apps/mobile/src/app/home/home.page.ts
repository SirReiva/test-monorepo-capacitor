import { Component } from '@angular/core';
import { Echo } from 'echo/index';

@Component({
  selector: 'wrk-monorepo-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  click() {
    Echo.echo({ value: 'BLAAAAAAAAAAA' });
  }
}
