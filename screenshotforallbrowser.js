const playwright = require('playwright');

(async () =>{
    for(const browserType of ['chromium', 'firefox', 'webkit']){
        const browser = await playwright[browserType].launch({
            headless: false
        });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com/");
    await page.screenshot({path: `exaample-${browserType}.png`});
    await browser.close();
    }
})();