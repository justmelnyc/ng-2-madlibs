import { Component } from '@angular/core';
import { MadlibsFormComponent } from './madlibs-form';

@Component({
  moduleId: module.id,
  selector: 'madlibs-app',
  templateUrl: 'madlibs.component.html',
  styleUrls: ['madlibs.component.css'],
  directives: [MadlibsFormComponent]
})

export class MadlibsAppComponent {
  title = 'Automate This!';
}
