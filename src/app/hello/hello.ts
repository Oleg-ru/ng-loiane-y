import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Hello from Angular';
  protected isDisabled = false;
  onClick() {
    console.log('Button click he-he!');
    this.isDisabled = !this.isDisabled;
  }
}
