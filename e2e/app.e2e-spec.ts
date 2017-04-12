import { LeaderBooardPage } from './app.po';

describe('leader-booard App', () => {
  let page: LeaderBooardPage;

  beforeEach(() => {
    page = new LeaderBooardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
