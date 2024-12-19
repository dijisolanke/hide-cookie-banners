// Generic list of common cookie banner classes and IDs
const cookieSelectors = [
  '[id*="cookie"]', // Matches elements with 'cookie' in their ID
  '[id*="CybotCookiebotDialog"]', // Matches elements with 'CybotCookiebotDialog' in their ID
  '[class*="cookie"]', // Matches elements with 'cookie' in their class
  '[id*="consent"]', // Matches elements with 'consent' in their ID
  '[id*="cookie-consent"]', // Matches elements with 'consent' in their ID
  '[class*="consent"]', // Matches elements with 'consent' in their class
  '[id*="banner"]', // Matches elements with 'banner' in their ID
  '[class*="banner"]', // Matches elements with 'banner' in their class
  '[class*="fc-consent-root"]', // Matches elements with 'fc-consent-root' in their class
  '[class*="fc-dialog"]', // Matches elements with 'fc-dialog' in their class
  '[class*="fc-dialog"]', // Matches elements with 'fc-dialog' in their class
  '[class*="fc-choice"]', // Matches elements with 'fc-choice' in their class
];

// Function to hide cookie banners
function hideCookieBanners() {
  cookieSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.display = "none!important"; // Hides the element
      console.log("Hid element:", element);
    });
  });
}

// Run the function on page load
hideCookieBanners();

// Observe for dynamically loaded elements (e.g., SPAs)
const observer = new MutationObserver(() => {
  hideCookieBanners();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
