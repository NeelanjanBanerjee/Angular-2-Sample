import { SampleDemoPage } from './app.po';

describe('sample-demo App', () => {
  let page: SampleDemoPage;

  beforeEach(() => {
    page = new SampleDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
