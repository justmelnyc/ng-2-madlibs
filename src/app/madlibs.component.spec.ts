import {
  addProviders,
  inject
} from '@angular/core/testing';

import { MadlibsAppComponent } from '../app/madlibs.component';


describe('App: Madlibs', () => {
  beforeEach(() => {
    addProviders([ MadlibsAppComponent ])
  })
  it('should create the app',
      inject([MadlibsAppComponent], (app: MadlibsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'madlibs works!\'',
      inject([MadlibsAppComponent], (app: MadlibsAppComponent) => {
    expect(app.title).toEqual('madlibs works!');
  }));
});
