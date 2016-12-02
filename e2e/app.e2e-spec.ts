import { NewbalacePage } from './app.po';

describe('newbalace App', function() {
  let page: NewbalacePage;

  beforeEach(() => {
    page = new NewbalacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
