import { Component, computed, effect, signal } from '@angular/core';

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

  protected doubleCount = computed(() => {
    //console.log('🔫 doubleCount');
    return this.count() * 2;
  });

  private readonly countLog = effect(() => {
    console.log(`🤵‍♂️ Count changed: ${this.count()}`);
  })

  getDoubleCount() {
    //console.log('🚔 getDoubleCount');
    return this.count() * 2;
  }


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
