// Carrega cada página gerada do guia, roda guia.js e exercita os experimentos. Uso: node testar-widgets.js <pasta _site> ia ai
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs'), path = require('path');
const site = process.argv[2];
const js = fs.readFileSync(path.join(site, 'assets/js/guia.js'), 'utf8');
function pages(dir) { return fs.readdirSync(path.join(site, dir), { withFileTypes: true }).filter(d => d.isDirectory()).map(d => `${dir}/${d.name}/index.html`).concat([`${dir}/index.html`]); }
let fail = 0;
for (const dir of process.argv.slice(3)) for (const rel of pages(dir)) {
	const errors = [];
	const vc = new VirtualConsole(); vc.on('error', e => errors.push(String(e))); vc.on('jsdomError', e => errors.push(String(e)));
	const dom = new JSDOM(fs.readFileSync(path.join(site, rel), 'utf8'), { url: 'https://efrem.io/' + rel.replace('index.html', ''), runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc });
	const w = dom.window, d = w.document;
	try { w.eval(js); } catch (e) { errors.push('eval: ' + e.stack); }
	const report = [];
	d.querySelectorAll('[data-widget]').forEach(el => {
		const name = el.getAttribute('data-widget');
		if (!el.classList.contains('gw')) { errors.push(`widget ${name} não inicializou`); return; }
		try {
			for (let round = 0; round < 4; round++) {
				el.querySelectorAll('input[type=range]').forEach(i => { i.value = round % 2 ? i.max : i.min; i.dispatchEvent(new w.Event('input', { bubbles: true })); });
				el.querySelectorAll('input[type=checkbox]:not([disabled])').forEach(i => { i.checked = !i.checked; i.dispatchEvent(new w.Event('change', { bubbles: true })); });
				el.querySelectorAll('[data-hit]').forEach(g => g.dispatchEvent(new w.MouseEvent('click', { bubbles: true })));
				Array.from(el.querySelectorAll('button')).forEach(b => { if (!b.disabled && b.isConnected) b.click(); });
			}
		} catch (e) { errors.push(`widget ${name}: ${e.stack}`); }
		const txt = el.textContent.replace(/\s+/g, ' ');
		if (/undefined|NaN|\[object/.test(txt)) errors.push(`widget ${name}: texto suspeito: ${txt.match(/.{0,40}(undefined|NaN|\[object).{0,40}/)[0]}`);
		report.push(`${name}(${el.querySelectorAll('button').length}btn)`);
	});
	if (errors.length) fail++;
	console.log((errors.length ? 'FAIL ' : 'ok   ') + rel.padEnd(46) + report.join(' '));
	errors.forEach(e => console.log('     ' + e.split('\n').slice(0, 4).join('\n     ')));
}
process.exit(fail ? 1 : 0);
