import { Component, OnInit } from '@angular/core';
import { Story } from '../story';

@Component({
  selector: 'app-madlibs-form',
  templateUrl: 'madlibs-form.component.html',
  styleUrls: ['madlibs-form.component.css']
})
export class MadlibsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Story();

  submitted = false;

  showStory(model) {
    this.submitted = true;
  };

  reset() {
    this.model = new Story();
    this.submitted = false;
  };
}
