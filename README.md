<h1>Node.js Puppeter Web Scraper</h1>

<p>
The Puppeteer library lets you control a real web browser programmatically, which is essential for scraping modern websites that use JavaScript.  It executes the JavaScript, interacts with the page (clicks, forms, etc.), and waits for content to load, allowing you to scrape data that simple tools can't access.
</p>

<p>
  This program scrapes a website I was interested in gathering data from which contained the following structure of html:
</p>

```
<table>
  <tbody>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tbody>
</table>
```

<p>
  The table has options to present a different number of items ranging from '10' per page to 'All' items, so it selects the 'All' option to get every entry at once.
</p>

```
<select aria-label="item numbers on page" class="input-sm ng-untouched ng-pristine ng-valid">
  <option value="0: Object" class="ng-star-inserted"> 10 </option>
  <option value="1: Object" class="ng-star-inserted"> 25 </option>
  <option value="2: Object" class="ng-star-inserted"> 50 </option>
  <option value="3: Object" class="ng-star-inserted"> 100 </option>
  <option value="4: Object" class="ng-star-inserted"> All </option>
</select>
```
