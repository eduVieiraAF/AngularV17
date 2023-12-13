import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Eduardo ')
  public lastName = signal('Vieira')

  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`
  })

  public array = signal([1])

  constructor() {
  }

  public updateName() {
    this.firstName.set("Sofia ");
    this.lastName.set("Vieira");

    console.log(this.fullName())
}

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue)
      return [...oldValue, oldValue.length + 1]
    })
  }
}
