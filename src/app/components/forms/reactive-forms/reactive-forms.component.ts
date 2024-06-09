import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJS'),
    }),

    myFavoriteFood: new FormArray([
      new FormControl('Pizza')
    ])
  });

  public update() {
    this.profileForm.patchValue({
      name: 'Eduardo',
      myStacks: {
        front: 'React',
        back: 'Vue'
      }
    })
  }

  public addFood(newFood: string) {
    const myFavoriteFood =  this.profileForm.get('myFavoriteFood') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFood.push(addNewFood);
  }
}
