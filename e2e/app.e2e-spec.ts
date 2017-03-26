import { Demo0327Page } from './app.po';

describe('demo0327 App', () => {
  let page: Demo0327Page;

  beforeEach(() => {
    page = new Demo0327Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
