const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('Insert site url', { waitUntil: 'networkidle2' });

    // Select "All" from the dropdown
    await page.select('select[aria-label="item numbers on page"]', '4: Object');

    // Wait for the table to update by checking if the number of rows increases
    await page.waitForFunction(() => {
        return document.querySelectorAll('table tbody tr').length > 10; // Ensure more than 10 rows load
    }, { timeout: 5000 }); // Timeout in 5 seconds

    // Scrape all rows from the table
    const data = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table tbody tr'));
        return rows.map(row => {
            return Array.from(row.querySelectorAll('td')).map(td => td.innerText.trim());
        });
    });

    console.log(data);

    await browser.close();
})();


