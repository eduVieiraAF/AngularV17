import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { SignalsComponent } from './components/signals/signals.component';
import { TemplateDrivenFormsComponent } from "./components/forms/template-driven-forms/template-driven-forms.component";
import { ReactiveFormsComponent } from "./components/forms/reactive-forms/reactive-forms.component";
// import { NewComponent } from "./components/new-component/new-component.component";
// import { SecondComponent } from './components/second/second.component';
// import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
// import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1>{{ title }}</h1>
  <app-reactive-forms />
  `,
    imports: [
        CommonModule,
        RouterOutlet,
        SignalsComponent,
        TemplateDrivenFormsComponent,
        ReactiveFormsComponent
    ]
})
export class AppComponent {
  title = 'FORMS';
}
