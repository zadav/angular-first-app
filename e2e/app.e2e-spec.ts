import { AngularFirstAppPage } from './app.po';

describe('angular-first-app App', () => {
  let page: AngularFirstAppPage;

  beforeEach(() => {
    page = new AngularFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
