import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { SignalsComponent } from './components/signals/signals.component';
// import { NewComponent } from "./components/new-component/new-component.component";
// import { SecondComponent } from './components/second/second.component';
// import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
// import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>{{ title }}</h1>
  <!-- <h2>Components</h2> -->
  <app-signals></app-signals>
  <!-- <app-template-control-flow></app-template-control-flow> -->
  <!-- <app-template-variables></app-template-variables> -->
  <!-- <app-template-binding></app-template-binding> -->
  <!-- <app-new-component></app-new-component>
  <div class="dark-theme">
    <app-new-component></app-new-component>
  </div>
  <app-second-component></app-second-component> -->
  <!-- <router-outlet></router-outlet> -->
  `,
  imports: [
    CommonModule,
    RouterOutlet,
    SignalsComponent,
    // TemplateDeferrableViewsComponent
    // TemplateControlFlowComponent
    // NewComponent,
    // SecondComponent,
    // TemplateBindingComponent,
    // TemplateVariablesComponent
  ]
})
export class AppComponent {
  title = 'First Project';
}
