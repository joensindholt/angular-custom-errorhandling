import { AngularCustomErrorhandlingPage } from './app.po';

describe('angular-custom-errorhandling App', () => {
  let page: AngularCustomErrorhandlingPage;

  beforeEach(() => {
    page = new AngularCustomErrorhandlingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
