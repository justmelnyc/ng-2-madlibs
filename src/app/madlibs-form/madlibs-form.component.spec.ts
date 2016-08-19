import {
  addProviders,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MadlibsFormComponent } from './madlibs-form.component';

describe('Component: MadlibsForm', () => {
  let builder: TestComponentBuilder;
  beforeEach(() => {
    addProviders([ MadlibsFormComponent ])
  })

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MadlibsFormComponent],
      (component: MadlibsFormComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MadlibsFormComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MadlibsFormComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-madlibs-form></app-madlibs-form>
  `,
  directives: [MadlibsFormComponent]
})
class MadlibsFormComponentTestController {
}

