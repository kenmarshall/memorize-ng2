import { MemorizeNg2Page } from './app.po';

describe('memorize-ng2 App', function() {
  let page: MemorizeNg2Page;

  beforeEach(() => {
    page = new MemorizeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
