import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  constructor() {
    setTimeout(() => {
      this.name = "Eduardo Vieira"
      this.isDisabled = this.age > 40
    }, 7000)
  }

  public name: string = "eduVieiraAF"
  public age: number = 41
  public isDisabled: boolean = this.age > 40
  public srcValue = "https://angular.io/assets/images/logos/angular/angular.png"
  public logo = `${this.name}.png`
  public crimson = "crimson"

  public sum() { return this.age++ }

  public less() { return this.age-- }

  public condition = this.age === 42

  public onKeyDown(event: Event) {
    console.log(event)
  }

  public onMouseEvent(event: MouseEvent) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`)
  }
}
