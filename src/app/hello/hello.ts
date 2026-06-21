import { Component, signal } from '@angular/core';

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

  protected count = signal(0);
  increment() {
    this.count.set(this.count() + 1);
  }
  decrement() {
    this.count.update((prev) => prev - 1);
  }
  reset() {
    this.count.set(0);
  }
}
