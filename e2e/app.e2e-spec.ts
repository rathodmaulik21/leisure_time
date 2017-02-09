import { LeisureTimePage } from './app.po';

describe('leisure-time App', function() {
  let page: LeisureTimePage;

  beforeEach(() => {
    page = new LeisureTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
