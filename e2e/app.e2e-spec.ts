import { OmahaLunchAppPage } from './app.po';

describe('omaha-lunch-app App', () => {
  let page: OmahaLunchAppPage;

  beforeEach(() => {
    page = new OmahaLunchAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
