import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

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

  public fullName = this.firstName() + this.lastName()

  public array = [1]

  constructor() {
  }

  public updateName() {
    return this.firstName.set("Sofia ")
  }

  public updateArray() {

  }
}
