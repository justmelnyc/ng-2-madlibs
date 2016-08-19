export class MadlibsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('madlibs-app h1')).getText();
  }
}
