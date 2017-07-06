import { CiscoTaskPage } from './app.po';

describe('cisco-task App', function() {
  let page: CiscoTaskPage;

  beforeEach(() => {
    page = new CiscoTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
