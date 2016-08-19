import { Component } from '@angular/core';
import { MadlibsFormComponent } from './madlibs-form';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ MadlibsFormComponent ]
})

export class AppComponent {
  title = 'Automate This!';
}
