const puppeteer = require('puppeteer');


async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://github.com");

    //await page.screenshot({path: 'test.png'});
    //await page.pdf({path: 'text.pdf', format: 'A4'});
    //const html = await page.content();
    //const title = await page.evaluate(() => document.title);
    //const text = await page.evaluate(() => document.body.innerText);
    /*const links = await page.evaluate(()=> Array.from(document.querySelectorAll('a'),() => e.href));*/
    


    
    
    
    
    
    
    
    
    
    console.log(links);





    await browser.close();
}

run();