import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, delay, elementAt, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public name: string = "Kevin";

  public items: Array<{ name: string }> = [
    { name: "Eduardo Vieira" }, { name: "Sofia Vieira" }, { name: "Daniel Vieira" }
  ];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public track(index: number) {
    return index
  }

  public addNewName(newName: string) {
    const inputElement = document.querySelector('input') as HTMLInputElement;
    inputElement.value = '';

    return this.items.push({ name: newName });
  }
}
