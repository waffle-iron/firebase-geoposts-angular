import { FirebaseGeopostsPage } from './app.po';

describe('firebase-geoposts App', () => {
  let page: FirebaseGeopostsPage;

  beforeEach(() => {
    page = new FirebaseGeopostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
