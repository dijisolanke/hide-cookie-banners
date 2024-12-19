const cookieSelectors = [
  '[id*="cookie"]', // Select all elements with an id containing the word "cookie" etc...
  '[id*="CybotCookiebotDialog"]',
  '[class*="cookie"]',
  '[id*="consent"]',
  '[id*="cookie-consent"]',
  '[class*="consent"]',
  '[id*="banner"]',
  '[class*="banner"]',
  '[class*="fc-consent-root"]',
  '[class*="fc-dialog"]',
  '[class*="fc-choice"]',
];

function hideCookieBanners() {
  cookieSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.setProperty("display", "none", "important");
      console.log("Hid element:", element);
    });
  });
}

hideCookieBanners();

const observer = new MutationObserver(() => {
  hideCookieBanners();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
