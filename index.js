// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function saveHackerNewsArticles() {
  // launch browser
  try {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

      // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  }
  catch (error) {
    console.error ('Error:', error)
  }
}

(async () => {
  await saveHackerNewsArticles();
})();
