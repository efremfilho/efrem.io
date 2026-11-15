// Gera um PDF A4 de uma página usando o CSS de impressão. Uso: node pdf.js <url> <saida.pdf>
const { chromium } = require('playwright');
(async () => {
	const [url, out] = process.argv.slice(2);
	const b = await chromium.launch(); const p = await (await b.newContext()).newPage();
	await p.goto(url, { waitUntil: 'networkidle' });
	await p.emulateMedia({ media: 'print' });
	await p.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
	await p.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
	await b.close();
	console.log('pdf ok', out);
})();
