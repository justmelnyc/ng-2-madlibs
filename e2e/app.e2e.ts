import { MadlibsPage } from './app.po';

describe('madlibs App', function() {
  let page: MadlibsPage;

  beforeEach(() => {
    page = new MadlibsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('madlibs works!');
  });
});
