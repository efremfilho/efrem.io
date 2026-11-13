/* Guia "IA sem mágica" — widgets interativos (vanilla JS, sem dependências).
   Uso no Markdown do capítulo:  <div data-widget="nome"></div>
   O idioma vem de <html lang>. Para criar um widget novo, adicione uma função em W. */
(function () {
	'use strict';

	const LANG = (document.documentElement.lang || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
	const LOCALE = LANG === 'en' ? 'en-US' : 'pt-BR';
	const L = (o) => o[LANG];
	const fmt = (n, d = 0) => n.toLocaleString(LOCALE, { minimumFractionDigits: d, maximumFractionDigits: d });
	const SVGNS = 'http://www.w3.org/2000/svg';

	function build(el, attrs, kids) {
		for (const k in attrs || {}) {
			const v = attrs[k];
			if (v == null || v === false) continue;
			if (k === 'class') el.setAttribute('class', v);
			else if (k === 'text') el.textContent = v;
			else if (k === 'html') el.innerHTML = v;
			else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
			else el.setAttribute(k, v === true ? '' : v);
		}
		(kids || []).forEach((c) => { if (c != null) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
		return el;
	}
	const h = (tag, attrs, kids) => build(document.createElement(tag), attrs, kids);
	const s = (tag, attrs, kids) => build(document.createElementNS(SVGNS, tag), attrs, kids);
	const btn = (label, onclick, cls) => h('button', { type: 'button', class: 'gw-btn' + (cls ? ' ' + cls : ''), text: label, onclick });

	const store = {
		get(key, fallback) { try { const v = localStorage.getItem('guia:' + key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
		set(key, value) { try { localStorage.setItem('guia:' + key, JSON.stringify(value)); } catch (e) { /* sem storage, segue o jogo */ } }
	};

	function frame(el, title, sub) {
		el.classList.add('gw');
		el.textContent = '';
		el.appendChild(h('div', { class: 'gw-head', text: L({ pt: '🧪 Experimente', en: '🧪 Try it' }) }));
		if (title) el.appendChild(h('h4', { class: 'gw-title', text: title }));
		if (sub) el.appendChild(h('p', { class: 'gw-sub', text: sub }));
		return el;
	}

	const W = {};

	/* ---------- Cap. 1: é IA ou não é? ---------- */
	W['quiz-ia'] = function (el) {
		const t = L({
			pt: {
				title: 'É IA ou não é?', sub: 'Use os dois critérios do capítulo: autonomia e adaptatividade.',
				yes: 'É IA', no: 'Não é IA', next: 'Próximo →', again: 'Jogar de novo', right: 'Isso!', wrong: 'Quase.',
				aut: 'autonomia', ada: 'adaptatividade', score: (a, b) => `Você acertou ${a} de ${b}.`,
				end: 'Repare que a dúvida quase sempre está na adaptatividade: muita coisa age sozinha, pouca coisa melhora com dados.',
				items: [
					['🧮', 'Calculadora de bolso', 0, 0, 0, 'Só faz o que cada tecla manda e faz igual para sempre. Dez contas ou dez milhões: não aprende nada.'],
					['📧', 'Filtro de spam do e-mail', 1, 1, 1, 'Decide sozinho o que vai para o lixo e melhora conforme vê mais mensagens (e conforme você marca "não é spam").'],
					['📊', 'Planilha com fórmulas', 0, 0, 0, 'Recalcula tudo na hora, mas são regras fixas que alguém escreveu. Não descobre padrão nenhum sozinha.'],
					['🎬', 'Recomendação do streaming', 1, 1, 1, 'Ninguém programou "se viu X, mostre Y". O sistema ajusta as sugestões conforme os dados de quem assiste.'],
					['🌡️', 'Termostato simples (liga aos 24 °C)', 0, 1, 0, 'Pegadinha: ele age sozinho, mas por uma regra fixa. Tem autonomia aparente, zero adaptatividade.'],
					['🗺️', 'App de trânsito que prevê o melhor caminho', 1, 1, 1, 'Estima o tempo de viagem a partir de dados de milhões de trajetos e se ajusta ao que está acontecendo agora.'],
					['☎️', 'Chatbot de menu ("digite 1 para…")', 0, 0, 0, 'Uma árvore de decisão escrita à mão. Parece conversa, mas é um formulário com outra roupa.'],
					['💬', 'Assistente de conversa com IA generativa', 1, 1, 1, 'Executa tarefas de vários passos e o comportamento veio do treino com dados. Detalhe: ele não aprende sozinho com a sua conversa — a adaptação acontece no treino.']
				]
			},
			en: {
				title: 'AI or not AI?', sub: 'Use the two criteria from this chapter: autonomy and adaptivity.',
				yes: 'It is AI', no: 'Not AI', next: 'Next →', again: 'Play again', right: 'Exactly!', wrong: 'Not quite.',
				aut: 'autonomy', ada: 'adaptivity', score: (a, b) => `You got ${a} out of ${b}.`,
				end: 'Notice the doubt is almost always about adaptivity: plenty of things act on their own, few get better with data.',
				items: [
					['🧮', 'Pocket calculator', 0, 0, 0, 'It only does what each key tells it to, the same way forever. Ten sums or ten million: it learns nothing.'],
					['📧', 'Email spam filter', 1, 1, 1, 'It decides on its own what goes to junk and improves as it sees more messages (and as you click "not spam").'],
					['📊', 'Spreadsheet with formulas', 0, 0, 0, 'It recalculates instantly, but those are fixed rules someone wrote. It discovers no pattern by itself.'],
					['🎬', 'Streaming recommendations', 1, 1, 1, 'Nobody coded "if they watched X, show Y". The system adjusts suggestions from viewing data.'],
					['🌡️', 'Simple thermostat (turns on at 24 °C)', 0, 1, 0, 'Trick question: it acts alone, but on a fixed rule. Apparent autonomy, zero adaptivity.'],
					['🗺️', 'Traffic app predicting the best route', 1, 1, 1, 'It estimates travel time from millions of trips and adjusts to what is happening right now.'],
					['☎️', 'Menu chatbot ("press 1 for…")', 0, 0, 0, 'A hand-written decision tree. It looks like a conversation but it is a form in disguise.'],
					['💬', 'Generative AI chat assistant', 1, 1, 1, 'It carries out multi-step tasks and its behavior came from training on data. Detail: it does not learn from your chat by itself — adaptation happens in training.']
				]
			}
		});
		frame(el, t.title, t.sub);
		const stage = h('div');
		el.appendChild(stage);
		let i = 0, hits = 0;
		function show() {
			stage.textContent = '';
			if (i >= t.items.length) {
				stage.appendChild(h('div', { class: 'gw-out' }, [h('b', { text: t.score(hits, t.items.length) + ' ' }), t.end]));
				stage.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [btn(t.again, () => { i = 0; hits = 0; show(); })]));
				return;
			}
			const it = t.items[i];
			const out = h('div', { class: 'gw-out', hidden: true, 'aria-live': 'polite' });
			const nextRow = h('div', { class: 'gw-row', style: 'margin-top:.8rem', hidden: true }, [btn(t.next, () => { i++; show(); }, 'primary')]);
			const answer = (guess) => {
				const ok = guess === !!it[2];
				if (ok) hits++;
				out.hidden = false; nextRow.hidden = false;
				out.className = 'gw-out ' + (ok ? 'ok' : 'bad');
				out.textContent = '';
				out.appendChild(h('span', { class: ok ? 'gw-ok' : 'gw-bad', text: (ok ? t.right : t.wrong) + ' ' }));
				out.appendChild(document.createTextNode(it[5]));
				out.appendChild(h('div', { class: 'gw-traits' }, [
					h('span', { class: 'gw-pill ' + (it[3] ? 'on' : 'off'), text: t.aut }),
					h('span', { class: 'gw-pill ' + (it[4] ? 'on' : 'off'), text: t.ada })
				]));
				buttons.querySelectorAll('button').forEach((b) => { b.disabled = true; });
			};
			const buttons = h('div', { class: 'gw-row', style: 'justify-content:center' }, [btn(t.yes, () => answer(true)), btn(t.no, () => answer(false))]);
			stage.appendChild(h('div', { class: 'gw-quiz-card' }, [
				h('div', { class: 'gw-quiz-emoji', text: it[0] }),
				h('div', { class: 'gw-quiz-name', text: `${i + 1}/${t.items.length} · ${it[1]}` }),
				buttons
			]));
			stage.appendChild(out);
			stage.appendChild(nextRow);
		}
		show();
	};

	/* ---------- Cap. 2: o que a máquina "vê" ---------- */
	W.pixels = function (el) {
		const t = L({
			pt: { title: 'Desenhe e veja o que a máquina enxerga', sub: 'Clique nos quadradinhos. Para o modelo, sua figura é só a lista de números ao lado.', clear: 'Limpar', sample: 'Exemplo', flat: (n) => `Vetor de características (64 números, ${n} deles iguais a 1):`, you: 'O que você vê', it: 'O que o modelo recebe' },
			en: { title: 'Draw and see what the machine sees', sub: 'Click the squares. To the model, your picture is just the list of numbers next to it.', clear: 'Clear', sample: 'Example', flat: (n) => `Feature vector (64 numbers, ${n} of them equal to 1):`, you: 'What you see', it: 'What the model receives' }
		});
		frame(el, t.title, t.sub);
		const SAMPLE = '0011110001000010101001011000000110100101100110010100001000111100';
		let bits = SAMPLE.split('').map(Number);
		const grid = h('div', { class: 'gw-pixels' });
		const vec = h('div', { class: 'gw-vector', 'aria-hidden': 'true' });
		const flat = h('div', { class: 'gw-flat' });
		const cells = bits.map((_, i) => h('button', { type: 'button', class: 'gw-cell', 'aria-label': 'pixel ' + (i + 1), onclick: () => { bits[i] = bits[i] ? 0 : 1; paint(); } }));
		const nums = bits.map(() => h('span'));
		cells.forEach((c) => grid.appendChild(c));
		nums.forEach((n) => vec.appendChild(n));
		function paint() {
			bits.forEach((b, i) => {
				cells[i].classList.toggle('on', !!b);
				cells[i].setAttribute('aria-pressed', b ? 'true' : 'false');
				nums[i].textContent = b;
				nums[i].classList.toggle('on', !!b);
			});
			flat.textContent = t.flat(bits.filter(Boolean).length) + ' x = [' + bits.join(', ') + ']';
		}
		el.appendChild(h('div', { class: 'gw-grid2' }, [
			h('div', null, [h('p', { class: 'gw-note', style: 'margin:0 0 .4rem', text: t.you }), grid]),
			h('div', null, [h('p', { class: 'gw-note', style: 'margin:0 0 .4rem', text: t.it }), vec])
		]));
		el.appendChild(flat);
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [
			btn(t.clear, () => { bits = bits.map(() => 0); paint(); }),
			btn(t.sample, () => { bits = SAMPLE.split('').map(Number); paint(); }, 'ghost')
		]));
		paint();
	};

	/* ---------- Cap. 2: loop de treino ---------- */
	W.treino = function (el) {
		const t = L({
			pt: { title: 'Treine um modelo de uma linha só', sub: 'Cada ponto é uma pessoa da turma: horas de estudo × nota. O modelo é a reta nota = w · horas + b. Ele começa chutando e ajusta w e b para diminuir o erro.', step: '1 passo', run: 'Treinar 50 passos', reset: 'Recomeçar', steps: 'passos', err: 'erro médio (quanto menor, melhor)', eq: 'equação atual', x: 'horas de estudo', y: 'nota', note: 'As linhas tracejadas são os erros: a distância entre o que o modelo previu e o que aconteceu. Treinar é só encolher essas linhas. Um modelo grande faz exatamente isso, com bilhões de pesos em vez de dois.', loss: 'erro ao longo do treino' },
			en: { title: 'Train a one-line model', sub: 'Each dot is a student: study hours × grade. The model is the line grade = w · hours + b. It starts by guessing and adjusts w and b to shrink the error.', step: '1 step', run: 'Train 50 steps', reset: 'Start over', steps: 'steps', err: 'mean error (lower is better)', eq: 'current equation', x: 'study hours', y: 'grade', note: 'The dashed lines are the errors: the distance between what the model predicted and what happened. Training is just shrinking those lines. A large model does exactly this, with billions of weights instead of two.', loss: 'error during training' }
		});
		frame(el, t.title, t.sub);
		const DATA = [[1, 2.4], [2, 2.9], [2.5, 4.1], [3.5, 4.0], [4, 5.2], [5, 5.4], [6, 6.9], [7, 6.6], [8, 8.3], [9, 8.6]];
		const X0 = 40, Y0 = 190, PW = 270, PH = 170;
		const px = (x) => X0 + (x / 10) * PW, py = (y) => Y0 - (Math.max(0, Math.min(10, y)) / 10) * PH;
		let w, b, n, hist, timer = null;
		const svgEl = s('svg', { viewBox: '0 0 330 220', role: 'img', 'aria-label': t.title });
		const lossEl = s('svg', { viewBox: '0 0 330 50', role: 'img', 'aria-label': t.loss });
		const stats = h('div', { class: 'gw-stats' });
		const mse = () => DATA.reduce((a, [x, y]) => a + Math.pow(w * x + 10 * b - y, 2), 0) / DATA.length;
		function gd() {
			let gw = 0, gb = 0;
			DATA.forEach(([x, y]) => { const e = (w * x / 10 + b) - y / 10; gw += e * x / 10; gb += e; });
			w -= 0.5 * 2 * gw / DATA.length; b -= 0.5 * 2 * gb / DATA.length; n++; hist.push(mse());
		}
		function draw() {
			svgEl.textContent = '';
			svgEl.appendChild(s('line', { x1: X0, y1: Y0, x2: X0 + PW, y2: Y0, stroke: 'var(--border-focus)' }));
			svgEl.appendChild(s('line', { x1: X0, y1: Y0, x2: X0, y2: Y0 - PH, stroke: 'var(--border-focus)' }));
			svgEl.appendChild(s('text', { x: X0 + PW / 2, y: 214, 'text-anchor': 'middle', fill: 'var(--muted)', 'font-size': 9, text: t.x + ' →' }));
			svgEl.appendChild(s('text', { x: 12, y: Y0 - PH / 2, 'text-anchor': 'middle', fill: 'var(--muted)', 'font-size': 9, transform: `rotate(-90 12 ${Y0 - PH / 2})`, text: t.y + ' →' }));
			DATA.forEach(([x, y]) => svgEl.appendChild(s('line', { x1: px(x), y1: py(y), x2: px(x), y2: py(w * x + 10 * b), stroke: 'var(--g-bad)', 'stroke-dasharray': '3 3', 'stroke-width': 1.2 })));
			svgEl.appendChild(s('line', { x1: px(0), y1: py(10 * b), x2: px(10), y2: py(w * 10 + 10 * b), stroke: 'var(--accent)', 'stroke-width': 2.5, 'stroke-linecap': 'round' }));
			DATA.forEach(([x, y]) => svgEl.appendChild(s('circle', { cx: px(x), cy: py(y), r: 4.5, fill: 'var(--accent-2)' })));
			lossEl.textContent = '';
			const max = hist[0] || 1;
			const pts = hist.map((v, i) => `${(5 + (i / Math.max(60, hist.length - 1)) * 320).toFixed(1)},${(45 - (v / max) * 40).toFixed(1)}`).join(' ');
			lossEl.appendChild(s('polyline', { points: pts, fill: 'none', stroke: 'var(--g-bad)', 'stroke-width': 2 }));
			stats.textContent = '';
			[[fmt(n), t.steps], [fmt(mse(), 2), t.err], [`${t.y} = ${fmt(w, 2)} · h + ${fmt(10 * b, 2)}`, t.eq]].forEach(([v, l], i) =>
				stats.appendChild(h('div', { class: 'gw-stat' }, [h('b', { text: v, style: i === 2 ? 'font-size:1rem' : null }), h('span', { text: l })])));
		}
		function reset() { clearInterval(timer); timer = null; w = 0; b = 0.1; n = 0; hist = []; hist.push(mse()); draw(); }
		el.appendChild(svgEl);
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.6rem' }, [
			btn(t.step, () => { gd(); draw(); }, 'primary'),
			btn(t.run, () => { if (timer) return; let k = 0; timer = setInterval(() => { gd(); draw(); if (++k >= 50) { clearInterval(timer); timer = null; } }, 40); }),
			btn(t.reset, reset, 'ghost')
		]));
		el.appendChild(stats);
		el.appendChild(h('p', { class: 'gw-note', style: 'margin-bottom:.2rem', text: t.loss }));
		el.appendChild(lossEl);
		el.appendChild(h('p', { class: 'gw-note', text: t.note }));
		reset();
	};

	/* ---------- Cap. 3: viés urso × cachorro ---------- */
	W.vies = function (el) {
		const t = L({
			pt: {
				title: 'Monte o conjunto de treino e veja o viés aparecer', sub: 'O classificador decide entre urso e cachorro. Você escolhe com quais fotos ele treina e quais características ele pode usar.',
				train: 'Fotos de treino', feats: 'Características que o modelo usa', test: 'Teste com animais que ele nunca viu', color: 'Cor do pelo', snout: 'Formato do focinho',
				names: { bb: 'Urso preto', wd: 'Cachorro branco', bd: 'Cachorro preto', pb: 'Urso polar' }, bear: 'urso', dog: 'cachorro', says: 'modelo diz:', tie: 'não sabe',
				acc: (a) => `Acertos: ${a} de 4.`,
				m_need: 'Ele precisa de pelo menos um exemplo de urso e um de cachorro para aprender alguma coisa.',
				m_color: 'Com esse treino, "escuro" virou sinônimo de urso. O modelo não é preconceituoso: ele só repetiu o recorte que recebeu.',
				m_useless: 'Com dados diversos, a cor deixa de separar qualquer coisa — e o modelo fica perdido. Dados melhores revelaram que a característica era ruim. Tente liberar o focinho.',
				m_coloronly: 'Você trouxe mais fotos, mas o modelo continua olhando só para a cor — e a cor não separa urso de cachorro. Mais dado não conserta característica errada.',
				m_partial: 'Melhorou, mas ainda falta alguém no treino. Quem não aparece nos dados paga a conta do erro.',
				m_snoutbias: 'Mesmo com a característica certa disponível, o treino enviesado ainda puxa o modelo para a cor. Característica boa não salva dado ruim.',
				m_ok: 'Agora sim: dados representativos + característica que faz sentido. Note que as duas coisas foram escolhas humanas.'
			},
			en: {
				title: 'Build the training set and watch the bias appear', sub: 'The classifier decides between bear and dog. You choose which photos it trains on and which features it may use.',
				train: 'Training photos', feats: 'Features the model uses', test: 'Test with animals it has never seen', color: 'Fur color', snout: 'Snout shape',
				names: { bb: 'Black bear', wd: 'White dog', bd: 'Black dog', pb: 'Polar bear' }, bear: 'bear', dog: 'dog', says: 'model says:', tie: 'cannot tell',
				acc: (a) => `Correct: ${a} out of 4.`,
				m_need: 'It needs at least one bear example and one dog example to learn anything.',
				m_color: 'With this training set, "dark" became a synonym for bear. The model is not prejudiced: it just repeated the slice of reality it was given.',
				m_useless: 'With diverse data, color stops separating anything — and the model is lost. Better data revealed the feature was bad. Try enabling the snout.',
				m_coloronly: 'You added more photos, but the model still looks only at color — and color does not separate bears from dogs. More data does not fix the wrong feature.',
				m_partial: 'Better, but someone is still missing from the training set. Whoever is absent from the data pays for the error.',
				m_snoutbias: 'Even with the right feature available, the biased training set still drags the model toward color. A good feature does not rescue bad data.',
				m_ok: 'There it is: representative data + a feature that makes sense. Note that both were human choices.'
			}
		});
		frame(el, t.title, t.sub);
		const A = { bb: { k: 'bear', d: 0.9, f: 0.25, e: '🐻' }, wd: { k: 'dog', d: 0.1, f: 0.8, e: '🐶' }, bd: { k: 'dog', d: 0.9, f: 0.8, e: '🐶' }, pb: { k: 'bear', d: 0.1, f: 0.25, e: '🐻' } };
		const on = { bb: true, wd: true, bd: false, pb: false };
		let useSnout = false;
		const out = h('div', { class: 'gw-animals' });
		const msg = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const check = (label, checked, onchange, disabled) => h('label', null, [h('input', { type: 'checkbox', checked, disabled, onchange }), label]);
		function update() {
			const cent = {};
			['bear', 'dog'].forEach((k) => {
				const g = Object.keys(A).filter((id) => on[id] && A[id].k === k).map((id) => A[id]);
				cent[k] = g.length ? { d: g.reduce((a, x) => a + x.d, 0) / g.length, f: g.reduce((a, x) => a + x.f, 0) / g.length } : null;
			});
			out.textContent = '';
			let hits = 0;
			const ready = cent.bear && cent.dog;
			Object.keys(A).forEach((id) => {
				const a = A[id];
				let pred = null;
				if (ready) {
					const dist = (c) => Math.pow(a.d - c.d, 2) + (useSnout ? Math.pow(a.f - c.f, 2) : 0);
					const db = dist(cent.bear), dd = dist(cent.dog);
					pred = Math.abs(db - dd) < 1e-9 ? null : (db < dd ? 'bear' : 'dog');
				}
				const ok = pred === a.k;
				if (ok) hits++;
				out.appendChild(h('div', { class: 'gw-animal ' + (ready ? (ok ? 'ok' : 'bad') : '') }, [
					h('div', { class: 'face ' + (a.d > 0.5 ? 'dark' : 'light'), text: a.e }),
					h('b', { text: t.names[id] }),
					h('div', { class: ok ? 'gw-ok' : 'gw-bad', text: ready ? `${t.says} ${pred ? t[pred] : t.tie} ${ok ? '✓' : '✗'}` : '—' })
				]));
			});
			const all = on.bb && on.wd && on.bd && on.pb;
			let m;
			if (!ready) m = t.m_need;
			else if (hits === 4) m = t.m_ok;
			else if (!useSnout && all) m = t.m_useless;
			else if (!useSnout && (on.bd || on.pb)) m = t.m_coloronly;
			else if (useSnout && !on.bd && !on.pb) m = t.m_snoutbias;
			else if (on.bd || on.pb) m = t.m_partial;
			else m = t.m_color;
			msg.className = 'gw-out ' + (ready && hits === 4 ? 'ok' : 'bad');
			msg.textContent = '';
			if (ready) msg.appendChild(h('b', { text: t.acc(hits) + ' ' }));
			msg.appendChild(document.createTextNode(m));
		}
		el.appendChild(h('div', { class: 'gw-grid2' }, [
			h('div', null, [h('p', { class: 'gw-note', style: 'margin:0 0 .4rem', text: t.train }), h('div', { class: 'gw-checks' }, Object.keys(A).map((id) => check(`${A[id].e} ${t.names[id]}`, on[id], (e) => { on[id] = e.target.checked; update(); })))]),
			h('div', null, [h('p', { class: 'gw-note', style: 'margin:0 0 .4rem', text: t.feats }), h('div', { class: 'gw-checks' }, [check(t.color, true, null, true), check(t.snout, false, (e) => { useSnout = e.target.checked; update(); })])])
		]));
		el.appendChild(h('p', { class: 'gw-note', style: 'margin:1rem 0 .5rem', text: t.test }));
		el.appendChild(out);
		el.appendChild(msg);
		update();
	};

	/* ---------- Cap. 4: o que borrar antes de enviar? ---------- */
	W.privacidade = function (el) {
		const t = L({
			pt: {
				title: 'O que você borraria antes de mandar essa foto para uma IA?', sub: 'Clique em tudo o que identifica uma pessoa. São 5 itens.',
				found: (a) => `${a} de 5 encontrados`, done: 'Pronto: agora a foto pode servir de exemplo sem expor ninguém. Recortar, borrar e minimizar vem antes do upload — não depois.', nope: 'Isso não identifica ninguém. Continue procurando.', reset: 'Recomeçar',
				why: { face: 'Rosto: dado biométrico. Serve para vigilância e reconhecimento sem que a pessoa saiba.', badge: 'Crachá com nome: nome + rosto + empregador numa imagem só.', plate: 'Placa do carro: permite rastrear deslocamentos e chegar ao dono.', house: 'Número da casa: junto com a rua, vira endereço — risco físico real.', bill: 'Boleto na caixa de correio: nome completo, CPF e dados financeiros.' }
			},
			en: {
				title: 'What would you blur before sending this photo to an AI?', sub: 'Click everything that identifies a person. There are 5 items.',
				found: (a) => `${a} of 5 found`, done: 'Done: now the photo can be used as an example without exposing anyone. Cropping, blurring and minimizing come before the upload — not after.', nope: 'That does not identify anyone. Keep looking.', reset: 'Start over',
				why: { face: 'Face: biometric data. It enables surveillance and recognition without the person knowing.', badge: 'Name badge: name + face + employer in a single image.', plate: 'License plate: lets someone track movements and reach the owner.', house: 'House number: together with the street it becomes an address — a real physical risk.', bill: 'Bill in the mailbox: full name, tax ID and financial data.' }
			}
		});
		frame(el, t.title, t.sub);
		const found = new Set();
		const status = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const list = h('ul', { class: 'gw-found' });
		const svgEl = s('svg', { viewBox: '0 0 640 300', role: 'img', 'aria-label': t.title });
		const hit = (id, kids) => s('g', { 'data-hit': id, tabindex: 0, role: 'button', 'aria-label': id }, kids);
		svgEl.appendChild(s('defs', null, [s('filter', { id: 'gwBlur', x: '-20%', y: '-20%', width: '140%', height: '140%' }, [s('feGaussianBlur', { stdDeviation: 5 })])]));
		[
			s('rect', { width: 640, height: 210, fill: '#bfdcf5' }), s('rect', { y: 210, width: 640, height: 90, fill: '#9aa3ad' }),
			s('rect', { y: 205, width: 640, height: 12, fill: '#c9c2b4' }),
			hit('sun', [s('circle', { cx: 585, cy: 45, r: 24, fill: '#ffd24a' })]),
			hit('cloud', [s('ellipse', { cx: 150, cy: 45, rx: 44, ry: 15, fill: '#fff' }), s('ellipse', { cx: 180, cy: 36, rx: 28, ry: 14, fill: '#fff' })]),
			hit('tree', [s('rect', { x: 36, y: 140, width: 12, height: 68, fill: '#7a5230' }), s('circle', { cx: 42, cy: 122, r: 36, fill: '#3f9b57' })]),
			s('rect', { x: 110, y: 100, width: 190, height: 108, fill: '#f0e2c8' }), s('polygon', { points: '98,102 205,42 312,102', fill: '#b5533c' }),
			s('rect', { x: 132, y: 124, width: 44, height: 40, fill: '#8ec5e8', stroke: '#fff', 'stroke-width': 3 }),
			s('rect', { x: 216, y: 138, width: 42, height: 70, fill: '#6b4a34' }),
			hit('house', [s('rect', { x: 264, y: 142, width: 32, height: 18, rx: 2, fill: '#1f2937' }), s('text', { x: 280, y: 155, 'text-anchor': 'middle', 'font-size': 11, 'font-weight': 700, fill: '#fff', text: '742' })]),
			s('rect', { x: 326, y: 150, width: 5, height: 58, fill: '#555' }), s('rect', { x: 312, y: 132, width: 34, height: 22, rx: 3, fill: '#d14b4b' }),
			hit('bill', [s('rect', { x: 318, y: 118, width: 22, height: 26, fill: '#fff', stroke: '#888' }), s('text', { x: 329, y: 129, 'text-anchor': 'middle', 'font-size': 6.5, fill: '#333', text: 'CPF' }), s('text', { x: 329, y: 139, 'text-anchor': 'middle', 'font-size': 7, 'font-weight': 700, fill: '#333', text: 'R$' })]),
			s('rect', { x: 380, y: 212, width: 150, height: 42, rx: 10, fill: '#3b6fd4' }), s('path', { d: 'M405 212 L420 184 L492 184 L508 212 Z', fill: '#3b6fd4' }),
			s('path', { d: 'M414 210 L425 190 L454 190 L454 210 Z', fill: '#cfe6fa' }), s('path', { d: 'M460 210 L460 190 L488 190 L499 210 Z', fill: '#cfe6fa' }),
			s('circle', { cx: 410, cy: 256, r: 14, fill: '#222' }), s('circle', { cx: 500, cy: 256, r: 14, fill: '#222' }),
			hit('plate', [s('rect', { x: 430, y: 232, width: 52, height: 16, rx: 2, fill: '#fff', stroke: '#1d3f8f', 'stroke-width': 1.5 }), s('text', { x: 456, y: 244, 'text-anchor': 'middle', 'font-size': 9.5, 'font-weight': 700, fill: '#111', text: 'ABC1D23' })]),
			s('rect', { x: 568, y: 150, width: 34, height: 62, rx: 8, fill: '#2f9e88' }), s('rect', { x: 572, y: 210, width: 11, height: 48, fill: '#34405a' }), s('rect', { x: 587, y: 210, width: 11, height: 48, fill: '#34405a' }),
			hit('face', [s('circle', { cx: 585, cy: 128, r: 19, fill: '#d9a47a' }), s('path', { d: 'M566 124 Q585 96 604 124 Q585 112 566 124 Z', fill: '#3a2a1e' }), s('circle', { cx: 578, cy: 128, r: 2, fill: '#222' }), s('circle', { cx: 592, cy: 128, r: 2, fill: '#222' }), s('path', { d: 'M578 136 Q585 142 592 136', stroke: '#222', fill: 'none', 'stroke-width': 1.5 })]),
			hit('badge', [s('rect', { x: 574, y: 164, width: 22, height: 15, rx: 2, fill: '#fff', stroke: '#888' }), s('text', { x: 585, y: 174, 'text-anchor': 'middle', 'font-size': 6.5, 'font-weight': 700, fill: '#222', text: 'ANA S.' })])
		].forEach((n) => svgEl.appendChild(n));
		function paint() {
			svgEl.querySelectorAll('[data-hit]').forEach((g) => { if (found.has(g.getAttribute('data-hit'))) g.setAttribute('filter', 'url(#gwBlur)'); else g.removeAttribute('filter'); });
			list.textContent = '';
			found.forEach((id) => list.appendChild(h('li', { text: t.why[id] })));
			status.className = 'gw-out' + (found.size === 5 ? ' ok' : '');
			status.textContent = found.size === 5 ? t.done : t.found(found.size);
		}
		function click(e) {
			const g = e.target.closest('[data-hit]');
			if (!g) return;
			const id = g.getAttribute('data-hit');
			if (t.why[id]) { found.add(id); paint(); } else { status.className = 'gw-out bad'; status.textContent = t.nope; }
		}
		svgEl.addEventListener('click', click);
		svgEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); click(e); } });
		el.appendChild(h('div', { class: 'gw-scene' }, [svgEl]));
		el.appendChild(status);
		el.appendChild(list);
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.6rem' }, [btn(t.reset, () => { found.clear(); paint(); }, 'ghost')]));
		paint();
	};

	/* ---------- Cap. 5: energia ---------- */
	W.energia = function (el) {
		const t = L({
			pt: {
				title: 'Quanto pesa o seu uso?', sub: 'Mexa nos controles. Os números por prompt são estimativas e variam mais de 10× conforme o modelo e a tarefa.',
				n: (v) => `Prompts por dia: ${v}`, wh: (v) => `Energia por prompt: ${v} Wh`, hint: '≈ 0,3 Wh é a ordem de grandeza que as próprias empresas divulgam para um prompt de texto típico. Respostas longas, raciocínio estendido, imagem e vídeo custam bem mais.',
				day: 'por dia', year: 'por ano', shower: 'de chuveiro elétrico (5.500 W) por dia', led: 'de lâmpada LED de 9 W por dia', home: 'da conta de luz de uma casa brasileira média (~160 kWh/mês)',
				scale: (mwh, homes) => `Se 100 milhões de pessoas usassem igual a você: ${mwh} MWh por dia — o consumo diário de cerca de ${homes} casas.`,
				note: 'Leitura honesta: o seu prompt individual pesa pouco; a soma de bilhões deles, mais o treino dos modelos e a construção de data centers, pesa muito. A pergunta útil não é "posso usar?", é "esse uso precisava do maior modelo?".', sec: 's', min: 'min', hr: 'h'
			},
			en: {
				title: 'How heavy is your usage?', sub: 'Move the controls. Per-prompt numbers are estimates and vary more than 10× depending on model and task.',
				n: (v) => `Prompts per day: ${v}`, wh: (v) => `Energy per prompt: ${v} Wh`, hint: '≈ 0.3 Wh is the order of magnitude the companies themselves disclose for a typical text prompt. Long answers, extended reasoning, image and video cost far more.',
				day: 'per day', year: 'per year', shower: 'of an electric shower (5,500 W) per day', led: 'of a 9 W LED bulb per day', home: 'of the power bill of an average Brazilian home (~160 kWh/month)',
				scale: (mwh, homes) => `If 100 million people used it like you: ${mwh} MWh per day — the daily consumption of roughly ${homes} homes.`,
				note: 'Honest reading: your individual prompt weighs little; the sum of billions of them, plus model training and data-center construction, weighs a lot. The useful question is not "may I use it?" but "did this task need the biggest model?".', sec: 's', min: 'min', hr: 'h'
			}
		});
		frame(el, t.title, t.sub);
		const nIn = h('input', { type: 'range', min: 1, max: 300, value: 30, step: 1 });
		const wIn = h('input', { type: 'range', min: -10, max: 10, value: -5, step: 1 });
		const nLab = h('label'), wLab = h('label');
		const stats = h('div', { class: 'gw-stats' });
		const scale = h('div', { class: 'gw-out' });
		const dur = (seconds) => seconds < 90 ? `${fmt(seconds, seconds < 10 ? 1 : 0)} ${t.sec}` : seconds < 5400 ? `${fmt(seconds / 60, 0)} ${t.min}` : `${fmt(seconds / 3600, 1)} ${t.hr}`;
		function update() {
			const n = +nIn.value;
			const wh = Math.pow(10, +wIn.value / 10);
			const day = n * wh, year = day * 365 / 1000;
			nLab.textContent = t.n(n);
			wLab.textContent = t.wh(fmt(wh, wh < 1 ? 2 : 1));
			stats.textContent = '';
			[[`${fmt(day, day < 10 ? 1 : 0)} Wh`, t.day], [`${fmt(year, year < 10 ? 2 : 0)} kWh`, t.year], [dur(day / 5500 * 3600), t.shower], [dur(day / 9 * 3600), t.led], [`${fmt(year / 12 / 160 * 100, 2)} %`, t.home]].forEach(([v, l]) =>
				stats.appendChild(h('div', { class: 'gw-stat' }, [h('b', { text: v }), h('span', { text: l })])));
			scale.textContent = t.scale(fmt(day * 100), fmt(Math.round(day * 1e8 / 1000 / (160 / 30) / 1000) * 1000));
		}
		nIn.addEventListener('input', update); wIn.addEventListener('input', update);
		el.appendChild(h('div', { class: 'gw-grid2' }, [h('div', null, [nLab, nIn]), h('div', null, [wLab, wIn])]));
		el.appendChild(h('p', { class: 'gw-note', style: 'margin-top:.4rem', text: t.hint }));
		el.appendChild(stats);
		el.appendChild(scale);
		el.appendChild(h('p', { class: 'gw-note', text: t.note }));
		update();
	};

	/* ---------- Cap. 6: orçamento de atenção ---------- */
	W.contexto = function (el) {
		const t = L({
			pt: {
				title: 'Monte uma janela de contexto', sub: 'A tarefa é sempre a mesma: responder uma dúvida sobre a política de reembolso. Escolha o que entra na "memória RAM" do modelo.',
				used: 'tokens usados', win: 'da janela de 200 mil', dens: 'densidade de sinal', sig: 'sinal (o que a tarefa usa)', noise: 'ruído',
				v_over: 'Nem cabe. O sistema vai cortar alguma coisa — e você não escolhe o quê.', v_low: 'Cabe, mas a informação útil virou agulha no palheiro. É aqui que aparece o context rot: o modelo se perde, esquece instrução e mistura assunto.', v_mid: 'Funciona, mas a atenção está diluída. Dá para tirar coisa.', v_high: 'Contexto enxuto: quase tudo o que está na janela serve para a tarefa.',
				groups: [
					['Instruções', [['Enxutas e claras', 800, 800], ['40 regras "se isso, faça aquilo"', 6000, 1200]]],
					['Documentos', [['Só os trechos relevantes', 4000, 3600], ['O manual inteiro de 300 páginas', 150000, 3600], ['Nenhum', 0, 0]]],
					['Histórico', [['Resumo da conversa', 2000, 1500], ['Conversa inteira de 3 horas', 60000, 1500]]],
					['Ferramentas', [['As 5 que a tarefa usa', 2500, 2000], ['40 conectadas "por garantia"', 20000, 2000]]]
				]
			},
			en: {
				title: 'Build a context window', sub: 'The task never changes: answer a question about the refund policy. Choose what goes into the model\'s "RAM".',
				used: 'tokens used', win: 'of the 200k window', dens: 'signal density', sig: 'signal (what the task uses)', noise: 'noise',
				v_over: 'It does not even fit. The system will cut something — and you do not choose what.', v_low: 'It fits, but the useful information became a needle in a haystack. This is where context rot shows up: the model gets lost, forgets instructions and mixes subjects.', v_mid: 'It works, but attention is diluted. There is room to remove things.', v_high: 'Lean context: nearly everything in the window serves the task.',
				groups: [
					['Instructions', [['Lean and clear', 800, 800], ['40 "if this, do that" rules', 6000, 1200]]],
					['Documents', [['Only the relevant excerpts', 4000, 3600], ['The entire 300-page manual', 150000, 3600], ['None', 0, 0]]],
					['History', [['Summary of the conversation', 2000, 1500], ['The whole 3-hour conversation', 60000, 1500]]],
					['Tools', [['The 5 the task uses', 2500, 2000], ['40 connected "just in case"', 20000, 2000]]]
				]
			}
		});
		frame(el, t.title, t.sub);
		const WINDOW = 200000;
		const pick = t.groups.map(() => 0);
		const bar = h('div', { class: 'gw-bar' }, [h('i', { style: 'background:var(--accent-2)' }), h('i', { style: 'background:var(--g-warn)' })]);
		const stats = h('div', { class: 'gw-stats' });
		const verdict = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const groupsEl = h('div');
		function update() {
			let total = 0, signal = 0;
			t.groups.forEach((g, gi) => { total += g[1][pick[gi]][1]; signal += g[1][pick[gi]][2]; });
			const dens = total ? signal / total : 0;
			const scaleMax = Math.max(WINDOW, total);
			bar.children[0].style.width = (signal / scaleMax * 100) + '%';
			bar.children[1].style.width = ((total - signal) / scaleMax * 100) + '%';
			stats.textContent = '';
			[[fmt(total), t.used], [fmt(total / WINDOW * 100) + ' %', t.win], [fmt(dens * 100) + ' %', t.dens]].forEach(([v, l]) => stats.appendChild(h('div', { class: 'gw-stat' }, [h('b', { text: v }), h('span', { text: l })])));
			const over = total > WINDOW;
			verdict.className = 'gw-out ' + (over || dens < 0.3 ? 'bad' : dens > 0.7 ? 'ok' : '');
			verdict.textContent = over ? t.v_over : dens < 0.3 ? t.v_low : dens > 0.7 ? t.v_high : t.v_mid;
			groupsEl.querySelectorAll('button').forEach((b) => b.classList.toggle('active', pick[+b.dataset.g] === +b.dataset.o));
		}
		t.groups.forEach((g, gi) => {
			groupsEl.appendChild(h('div', { class: 'gw-ctx-group' }, [
				h('b', { text: g[0] }),
				h('div', { class: 'gw-ctx-opts' }, g[1].map((o, oi) => h('button', { type: 'button', class: 'gw-btn', 'data-g': gi, 'data-o': oi, text: `${o[0]} · ${fmt(o[1])}`, onclick: () => { pick[gi] = oi; update(); } })))
			]));
		});
		el.appendChild(groupsEl);
		el.appendChild(h('p', { class: 'gw-note', html: `<span style="color:var(--accent-2)">■</span> ${t.sig} &nbsp; <span style="color:var(--g-warn)">■</span> ${t.noise}` }));
		el.appendChild(bar);
		el.appendChild(stats);
		el.appendChild(verdict);
		update();
	};

	/* ---------- Abas genéricas: o conteúdo vem do Markdown (#### vira aba) ---------- */
	W.tabs = function (el) {
		const kids = Array.from(el.children);
		// No capítulo as abas são <h4>; na versão livro os títulos descem um nível e viram <h5>.
		const first = kids.find((k) => /^H[3-6]$/.test(k.tagName));
		if (!first) return;
		const tabs = [];
		kids.forEach((k) => {
			if (k.tagName === first.tagName) tabs.push({ title: k.textContent, nodes: [] });
			else if (tabs.length) tabs[tabs.length - 1].nodes.push(k);
		});
		const title = el.dataset.title, sub = el.dataset.sub, tree = el.dataset.layout === 'tree';
		frame(el, title, sub);
		const bar = h('div', { class: 'gw-tabs', role: 'tablist' });
		const panels = h('div', { class: 'gw-panels' });
		// Todos os painéis ficam no DOM: na tela só um aparece; na impressão, todos.
		tabs.forEach((tab) => panels.appendChild(h('div', { class: 'gw-panel', role: 'tabpanel' }, [h('div', { class: 'gw-panel-title', text: tab.title })].concat(tab.nodes))));
		function select(i) {
			Array.from(panels.children).forEach((pn, pi) => { pn.hidden = pi !== i; });
			Array.from(bar.children).forEach((b, bi) => { b.classList.toggle('active', bi === i); b.setAttribute('aria-selected', bi === i ? 'true' : 'false'); });
		}
		tabs.forEach((tab, i) => bar.appendChild(h('button', { type: 'button', class: 'gw-btn', role: 'tab', text: tab.title, onclick: () => select(i) })));
		el.appendChild(h('div', { class: 'gw-tabs-wrap' + (tree ? ' tree' : '') }, [bar, panels]));
		select(0);
	};

	/* ---------- Cap. 7: pedir a resposta × pedir o script ---------- */
	W.dado = function (el) {
		const money = (v) => 'R$ ' + fmt(v, 2);
		const t = L({
			pt: { title: 'Mesma pergunta, dez vezes', sub: 'Tarefa: somar 240 linhas de uma planilha de reembolsos. O total correto é ' + money(18437.5) + '.', a: 'Pedi a resposta direto ao modelo', a2: 'Probabilístico: ele "estima" o total a cada vez.', b: 'Pedi um script e rodei o script', b2: 'Determinístico: o código soma, o modelo só escreveu o código.', run1: 'Rodar 1 vez', run10: 'Rodar 10 vezes', reset: 'Limpar', dist: (n, w) => `${n} resposta(s) diferente(s), ${w} errada(s)`, note: 'Simulação ilustrativa, com taxa de erro exagerada para caber em dez tentativas. O ponto não é a porcentagem: é que, de um lado, você precisa conferir toda vez; do outro, confere o script uma vez só.', run: 'rodada' },
			en: { title: 'Same question, ten times', sub: 'Task: add up 240 rows of an expense spreadsheet. The correct total is ' + money(18437.5) + '.', a: 'I asked the model for the answer', a2: 'Probabilistic: it "estimates" the total every time.', b: 'I asked for a script and ran the script', b2: 'Deterministic: the code adds, the model only wrote the code.', run1: 'Run once', run10: 'Run 10 times', reset: 'Clear', dist: (n, w) => `${n} different answer(s), ${w} wrong`, note: 'Illustrative simulation, with an exaggerated error rate so it shows up in ten tries. The point is not the percentage: on one side you must check every time; on the other, you check the script once.', run: 'run' }
		});
		frame(el, t.title, t.sub);
		const TRUE = 18437.5, SLIPS = [18473.5, 18437.0, 18347.5, 18537.5, 18437.05];
		let runs = [];
		const la = h('ul', { class: 'gw-runs' }), lb = h('ul', { class: 'gw-runs' });
		const sa = h('p', { 'aria-live': 'polite' }), sb = h('p');
		function paint() {
			la.textContent = ''; lb.textContent = '';
			runs.slice(-5).forEach((r) => {
				la.appendChild(h('li', null, [h('span', { text: `${t.run} ${r.i}` }), h('span', { class: r.v === TRUE ? 'gw-ok' : 'gw-bad', text: money(r.v) })]));
				lb.appendChild(h('li', null, [h('span', { text: `${t.run} ${r.i}` }), h('span', { class: 'gw-ok', text: money(TRUE) })]));
			});
			sa.textContent = runs.length ? t.dist(new Set(runs.map((r) => r.v)).size, runs.filter((r) => r.v !== TRUE).length) : '';
			sb.textContent = runs.length ? t.dist(1, 0) : '';
		}
		function run(k) { for (let j = 0; j < k; j++) runs.push({ i: runs.length + 1, v: Math.random() < 0.72 ? TRUE : SLIPS[Math.floor(Math.random() * SLIPS.length)] }); paint(); }
		el.appendChild(h('div', { class: 'gw-grid2' }, [
			h('div', { class: 'gw-col' }, [h('h5', { text: '🎲 ' + t.a }), h('p', { text: t.a2 }), la, sa]),
			h('div', { class: 'gw-col' }, [h('h5', { text: '⚙️ ' + t.b }), h('p', { text: t.b2 }), lb, sb])
		]));
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [btn(t.run1, () => run(1), 'primary'), btn(t.run10, () => run(10)), btn(t.reset, () => { runs = []; paint(); }, 'ghost')]));
		el.appendChild(h('p', { class: 'gw-note', text: t.note }));
		paint();
	};

	/* ---------- Cap. 8: branches, PR, merge e rollback ---------- */
	W.git = function (el) {
		const t = L({
			pt: {
				title: 'Brinque de linha do tempo', sub: 'Cada bolinha é um commit: uma versão salva do projeto. A linha de cima (main) é o que está valendo.',
				commit: 'Salvar versão (commit)', branch: 'Criar branch', pr: 'Abrir pull request', merge: 'Aprovar e juntar (merge)', rollback: 'Rollback', reset: 'Recomeçar', prod: 'em produção', main: 'main', feat: 'branch', prTag: 'PR aberto — aguardando revisão',
				m_start: 'Comece criando uma branch: uma linha do tempo paralela onde dá para errar à vontade.',
				m_commit_main: 'Commit direto na main: foi para produção sem ninguém revisar. Funciona… até o dia em que não funciona.',
				m_commit_b: 'Commit na branch. A main nem ficou sabendo — produção continua intacta.',
				m_branch: 'Branch criada. A partir daqui, o que você (ou o agente) fizer fica isolado do que está em produção.',
				m_pr: 'Pull request aberto: "olha o que eu fiz, posso juntar?". É aqui que outra pessoa — ou outra IA — revisa.',
				m_merge: 'Revisado e juntado. A linha paralela voltou para a principal e a novidade entrou em produção.',
				m_rollback: 'Deu ruim? Produção voltou uma versão. Nada foi apagado: o histórico continua todo ali.',
				m_full: 'Acabou o espaço do desenho — recomece para continuar brincando.'
			},
			en: {
				title: 'Play with the timeline', sub: 'Each dot is a commit: a saved version of the project. The top line (main) is what is live.',
				commit: 'Save version (commit)', branch: 'Create branch', pr: 'Open pull request', merge: 'Approve and merge', rollback: 'Rollback', reset: 'Start over', prod: 'in production', main: 'main', feat: 'branch', prTag: 'PR open — waiting for review',
				m_start: 'Start by creating a branch: a parallel timeline where you can make mistakes freely.',
				m_commit_main: 'Commit straight to main: it went to production with nobody reviewing. It works… until the day it does not.',
				m_commit_b: 'Commit on the branch. Main has no idea — production stays intact.',
				m_branch: 'Branch created. From here on, whatever you (or the agent) do is isolated from what is in production.',
				m_pr: 'Pull request opened: "look what I did, may I merge it?". This is where another person — or another AI — reviews.',
				m_merge: 'Reviewed and merged. The parallel line returned to the main one and the change went live.',
				m_rollback: 'Went wrong? Production went back one version. Nothing was deleted: the whole history is still there.',
				m_full: 'The drawing ran out of room — start over to keep playing.'
			}
		});
		frame(el, t.title, t.sub);
		const MAXCOL = 11, DX = 50, X0 = 34, YM = 46, YB = 112;
		let st;
		const svgEl = s('svg', { viewBox: `0 0 ${X0 * 2 + DX * MAXCOL} 150`, role: 'img', 'aria-label': t.title });
		const msg = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const B = {};
		const x = (c) => X0 + DX * c;
		function reset() { st = { col: 2, main: [0, 1, 2], prod: 2, branches: [], cur: null, msg: t.m_start }; draw(); }
		function act(kind) {
			const b = st.cur;
			if (kind === 'commit') {
				st.col++;
				if (b) { b.commits.push(st.col); st.msg = t.m_commit_b; } else { st.main.push(st.col); st.prod = st.col; st.msg = t.m_commit_main; }
			} else if (kind === 'branch') { st.cur = { fork: st.main[st.main.length - 1], commits: [], pr: false, merged: null }; st.branches.push(st.cur); st.msg = t.m_branch; }
			else if (kind === 'pr') { b.pr = true; st.msg = t.m_pr; }
			else if (kind === 'merge') { st.col++; st.main.push(st.col); st.prod = st.col; b.merged = st.col; st.cur = null; st.msg = t.m_merge; }
			else if (kind === 'rollback') { st.prod = st.main[st.main.indexOf(st.prod) - 1]; st.msg = t.m_rollback; }
			draw();
		}
		function draw() {
			svgEl.textContent = '';
			const last = st.main[st.main.length - 1];
			svgEl.appendChild(s('line', { x1: x(0), y1: YM, x2: x(last), y2: YM, stroke: 'var(--accent)', 'stroke-width': 3, 'stroke-linecap': 'round' }));
			svgEl.appendChild(s('text', { x: x(0) - 8, y: YM - 16, fill: 'var(--muted)', 'font-size': 11, 'font-weight': 700, text: t.main }));
			st.branches.forEach((b) => {
				const cs = b.commits, end = cs.length ? cs[cs.length - 1] : b.fork + 0.6;
				let d = `M${x(b.fork)} ${YM} C${x(b.fork) + 22} ${YM} ${x(b.fork) + 8} ${YB} ${x(b.fork) + 30} ${YB} L${x(end)} ${YB}`;
				if (b.merged != null) d += ` C${x(end) + 24} ${YB} ${x(b.merged) - 24} ${YM} ${x(b.merged)} ${YM}`;
				svgEl.appendChild(s('path', { d, fill: 'none', stroke: 'var(--accent-2)', 'stroke-width': 2.5, 'stroke-dasharray': b.merged != null ? null : '5 4' }));
				cs.forEach((c) => svgEl.appendChild(s('circle', { cx: x(c), cy: YB, r: 7, fill: 'var(--accent-2)' })));
				if (b === st.cur) svgEl.appendChild(s('text', { x: Math.min(x(b.fork) + 34, x(MAXCOL) - 190), y: YB + 26, fill: 'var(--accent-2)', 'font-size': 11, 'font-weight': 700, text: b.pr ? t.prTag : t.feat }));
			});
			st.main.forEach((c) => {
				const after = c > st.prod;
				svgEl.appendChild(s('circle', { cx: x(c), cy: YM, r: 8, fill: after ? 'var(--bg)' : 'var(--accent)', stroke: 'var(--accent)', 'stroke-width': 2 }));
			});
			svgEl.appendChild(s('text', { x: x(st.prod), y: YM - 16, 'text-anchor': 'middle', fill: 'var(--g-ok)', 'font-size': 11, 'font-weight': 700, text: '▼ ' + t.prod }));
			const b = st.cur, full = st.col >= MAXCOL;
			B.commit.disabled = full || (b && b.pr);
			B.branch.disabled = !!b || full;
			B.pr.disabled = !b || b.pr || !b.commits.length;
			B.merge.disabled = !b || !b.pr || full;
			B.rollback.disabled = !!b || st.main.indexOf(st.prod) < 1;
			msg.textContent = full && !(b && b.pr) ? t.m_full : st.msg;
		}
		['commit', 'branch', 'pr', 'merge', 'rollback'].forEach((k) => { B[k] = btn(t[k], () => act(k), k === 'branch' ? 'primary' : ''); });
		el.appendChild(svgEl);
		el.appendChild(h('div', { class: 'gw-row' }, [B.branch, B.commit, B.pr, B.merge, B.rollback, btn(t.reset, reset, 'ghost')]));
		el.appendChild(msg);
		reset();
	};

	/* ---------- Cap. 10: escada de acesso ---------- */
	W.acesso = function (el) {
		const t = L({
			pt: {
				title: 'Quanto acesso você daria?', sub: 'Suba um degrau de cada vez. Quanto mais o agente enxerga e faz, mais ele ajuda — e maior o estrago possível.', see: 'O que ele enxerga e faz', risk: 'O que pode dar errado', use: 'Como eu uso',
				levels: [
					['Chat', 'Só conversa', 'Apenas o que você digita ou cola na conversa.', 'Você colar dado sensível (de cliente, de saúde, financeiro) sem pensar.', 'Tirar dúvida, estudar, rascunhar, discutir uma transcrição de reunião.'],
					['Aba', 'Uma aba do navegador', 'Lê e clica somente nas abas que você liberou, com o seu login naquele site.', 'Ele age em seu nome dentro daquele site. Se o site é o banco, o risco é o banco.', 'Emitir nota fiscal todo mês, montar um curso no Moodle. O contexto é uma página, e eu vejo tudo acontecendo.'],
					['Repo', 'Uma pasta ou repositório', 'Lê e altera os arquivos daquele projeto e roda comandos ali dentro.', 'Mudança ruim ou apagada sem querer — mas com Git tudo tem histórico, branch, revisão e rollback.', 'É o meu padrão: código, documentação, análise de dados. O repositório é a cerca e a memória.'],
					['Nuvem', 'Ambiente na nuvem com cerca', 'Uma máquina descartável com script de preparação, só os segredos daquele projeto e uma lista de sites permitidos.', 'O estrago máximo é o que aquelas chaves permitem. Por isso chave restrita, por projeto, fácil de revogar.', 'Projetos de empresa e quando quero tocar o trabalho pelo celular. Um projeto meu só fala com pouco mais de uma dúzia de endereços.'],
					['Tudo', 'Máquina inteira + e-mail + mensagens', 'Tudo o que você enxerga: arquivos, e-mail, mensageiros, contas logadas. E age 24 horas por dia.', 'Qualquer e-mail ou mensagem recebida pode conter instrução maliciosa (prompt injection). Ação irreversível em seu nome. Vazamento.', 'Ainda não uso assim. Se for usar: máquina isolada, contas separadas, nada de banco — e a consciência de que "controle" aqui é mais sensação do que fato.']
				]
			},
			en: {
				title: 'How much access would you give?', sub: 'Climb one rung at a time. The more the agent sees and does, the more it helps — and the bigger the possible damage.', see: 'What it sees and does', risk: 'What can go wrong', use: 'How I use it',
				levels: [
					['Chat', 'Conversation only', 'Only what you type or paste into the conversation.', 'You pasting sensitive data (a client\'s, health, financial) without thinking.', 'Asking questions, studying, drafting, discussing a meeting transcript.'],
					['Tab', 'One browser tab', 'Reads and clicks only on the tabs you allowed, with your login on that site.', 'It acts on your behalf inside that site. If the site is your bank, the risk is your bank.', 'Issuing invoices every month, building a course in Moodle. The context is one page, and I watch it all happen.'],
					['Repo', 'One folder or repository', 'Reads and changes the files of that project and runs commands inside it.', 'A bad change or accidental deletion — but with Git everything has history, branches, review and rollback.', 'My default: code, documentation, data analysis. The repository is both the fence and the memory.'],
					['Cloud', 'Fenced cloud environment', 'A disposable machine with a setup script, only that project\'s secrets, and an allowlist of sites.', 'The maximum damage is whatever those keys allow. Hence restricted, per-project keys that are easy to revoke.', 'Company projects and when I want to keep working from my phone. One project of mine can only talk to about a dozen addresses.'],
					['All', 'Whole machine + email + messaging', 'Everything you can see: files, email, messengers, logged-in accounts. And it acts 24 hours a day.', 'Any incoming email or message may carry malicious instructions (prompt injection). Irreversible actions in your name. Leaks.', 'I do not use it this way yet. If you do: isolated machine, separate accounts, no banking — and the awareness that "control" here is more a feeling than a fact.']
				]
			}
		});
		frame(el, t.title, t.sub);
		const ladder = h('div', { class: 'gw-ladder', role: 'tablist' });
		const body = h('div', { class: 'gw-out gw-ladder-body', 'aria-live': 'polite' });
		function select(i) {
			Array.from(ladder.children).forEach((b, bi) => b.classList.toggle('active', bi === i));
			const lv = t.levels[i];
			body.textContent = '';
			body.appendChild(h('h5', { text: `${i + 1}. ${lv[1]}` }));
			body.appendChild(h('dl', null, [[t.see, lv[2]], [t.risk, lv[3]], [t.use, lv[4]]].map(([a, b]) => h('div', null, [h('dt', { text: a }), h('dd', { text: b })]))));
		}
		t.levels.forEach((lv, i) => ladder.appendChild(h('button', { type: 'button', class: 'gw-btn l' + i, text: `${i + 1} · ${lv[0]}`, onclick: () => select(i) })));
		el.appendChild(ladder);
		el.appendChild(body);
		select(0);
	};

	/* ---------- Cap. 11: programação em uma hora (loop + if) ---------- */
	W.loop = function (el) {
		const t = L({
			pt: { title: 'Variável, lista, "se" e loop em 6 linhas', sub: 'A lista de frequência é uma lista. O loop passa linha por linha. O "if" é o SE das planilhas. Repare: códigos no lugar de nomes.', step: 'Próxima linha da lista', all: 'Rodar tudo', reset: 'Recomeçar', cols: ['Estudante', 'Faltas seguidas', 'Status'], act: 'contatar', ok: 'ok', c: ['# loop: repete para cada linha', '# variável: guarda um valor', '# condicional: o SE das planilhas', '', '', ''], done: 'Acabou a lista, acabou o loop. Seis linhas ou seis milhões: o código é o mesmo.', cur: (r, v, big) => `Linha ${r}: faltas = ${v}. ${v} >= 5? ${big ? 'Sim → "contatar".' : 'Não → "ok".'}`, start: 'Clique para processar a primeira linha.', names: ['lista', 'linha', 'faltas', 'faltas_seguidas', 'status'] },
			en: { title: 'Variable, list, "if" and loop in 6 lines', sub: 'The attendance sheet is a list. The loop goes row by row. The "if" is a spreadsheet\'s IF. Notice: codes instead of names.', step: 'Next row of the list', all: 'Run all', reset: 'Start over', cols: ['Student', 'Absences in a row', 'Status'], act: 'contact', ok: 'ok', c: ['# loop: repeats for every row', '# variable: stores a value', '# conditional: a spreadsheet\'s IF', '', '', ''], done: 'The list ended, so the loop ended. Six rows or six million: same code.', cur: (r, v, big) => `Row ${r}: absences = ${v}. ${v} >= 5? ${big ? 'Yes → "contact".' : 'No → "ok".'}`, start: 'Click to process the first row.', names: ['sheet', 'row', 'absences', 'absences_in_a_row', 'status'] }
		});
		frame(el, t.title, t.sub);
		const IDS = ['E-014', 'E-027', 'E-031', 'E-046', 'E-052', 'E-068'];
		const VALS = [2, 7, 0, 5, 1, 6];
		const v = t.names;
		const CODE = [`for ${v[1]} in ${v[0]}:`, `    ${v[2]} = ${v[1]}["${v[3]}"]`, `    if ${v[2]} >= 5:`, `        ${v[1]}["${v[4]}"] = "${t.act}"`, `    else:`, `        ${v[1]}["${v[4]}"] = "${t.ok}"`];
		let i = -1;
		const code = h('pre', { class: 'gw-code' }, CODE.map((c, k) => h('span', null, [t.c[k] ? h('em', { text: c.match(/^ */)[0] + t.c[k] + '\n' }) : null, c])));
		const tbody = h('tbody');
		const msg = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		function paint() {
			tbody.textContent = '';
			VALS.forEach((val, r) => {
				const done = r <= i;
				tbody.appendChild(h('tr', { class: r === i ? 'cur' : null }, [h('td', { text: IDS[r] }), h('td', { text: String(val) }), h('td', { class: done ? (val >= 5 ? 'gw-warnc' : 'gw-ok') : null, text: done ? (val >= 5 ? t.act : t.ok) : '…' })]));
			});
			const big = i >= 0 && VALS[i] >= 5;
			Array.from(code.children).forEach((sp, k) => sp.classList.toggle('cur', i >= 0 && (k < 3 || (big ? k === 3 : k >= 4))));
			msg.textContent = i < 0 ? t.start : t.cur(i + 1, VALS[i], big) + (i === VALS.length - 1 ? ' ' + t.done : '');
			stepBtn.disabled = i >= VALS.length - 1;
		}
		const stepBtn = btn(t.step, () => { i++; paint(); }, 'primary');
		el.appendChild(h('div', { class: 'gw-grid2' }, [
			code,
			h('table', { class: 'gw-table' }, [h('thead', null, [h('tr', null, t.cols.map((c) => h('th', { text: c })))]), tbody])
		]));
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [stepBtn, btn(t.all, () => { i = VALS.length - 1; paint(); }), btn(t.reset, () => { i = -1; paint(); }, 'ghost')]));
		el.appendChild(msg);
		paint();
	};

	/* ---------- Cap. 6: monte o algoritmo (ordenar os passos de um fluxo) ---------- */
	W.fluxo = function (el) {
		const t = L({
			pt: {
				title: 'Monte o algoritmo da busca ativa', sub: 'Os seis passos estão embaralhados. Use as setas para colocar na ordem em que uma máquina (ou uma equipe) conseguiria executar.',
				check: 'Conferir', reset: 'Embaralhar de novo', up: 'subir', down: 'descer',
				ok: 'Isso é um algoritmo: uma sequência de passos sem ambiguidade. Repare em três coisas — tem uma repetição ("para cada"), tem uma decisão ("se") e tem um passo que é de gente, de propósito.',
				no: (n) => `${n} de 6 no lugar certo. Dica: o que precisa existir antes de cada passo poder acontecer?`,
				steps: [['entrada', 'Receber da escola a lista de frequência da semana'], ['repetição', 'Para cada estudante da lista:'], ['cálculo', 'contar quantas faltas seguidas tem'], ['decisão', 'Se forem 5 ou mais, colocar na lista de contato'], ['pessoa', 'Alguém da equipe revisa a lista e decide quem procurar primeiro'], ['registro', 'Anotar o que aconteceu em cada contato']]
			},
			en: {
				title: 'Assemble the outreach algorithm', sub: 'The six steps are shuffled. Use the arrows to put them in the order a machine (or a team) could actually execute.',
				check: 'Check', reset: 'Shuffle again', up: 'move up', down: 'move down',
				ok: 'That is an algorithm: a sequence of steps with no ambiguity. Notice three things — there is a repetition ("for each"), there is a decision ("if"), and there is one step that belongs to a person, on purpose.',
				no: (n) => `${n} of 6 in the right place. Hint: what has to exist before each step can happen?`,
				steps: [['input', 'Receive the week\'s attendance list from the school'], ['repetition', 'For each student on the list:'], ['calculation', 'count how many absences in a row'], ['decision', 'If there are 5 or more, add to the contact list'], ['person', 'Someone on the team reviews the list and decides who to reach first'], ['record', 'Write down what happened in each contact']]
			}
		});
		frame(el, t.title, t.sub);
		const START = [3, 0, 5, 2, 4, 1];
		let order = START.slice(), checked = false;
		const list = h('ol', { class: 'gw-steps' });
		const msg = h('div', { class: 'gw-out', 'aria-live': 'polite', hidden: true });
		function move(pos, d) { const j = pos + d; if (j < 0 || j >= order.length) return; const x = order[pos]; order[pos] = order[j]; order[j] = x; checked = false; paint(); }
		function paint() {
			list.textContent = '';
			const solved = checked && order.every((v, k) => v === k);
			order.forEach((id, pos) => {
				const right = checked && id === pos;
				// só depois de resolvido os passos de dentro do loop ganham recuo e rótulo
				list.appendChild(h('li', { class: 'gw-step' + (checked ? (right ? ' ok' : ' bad') : '') + (solved && (id === 2 || id === 3) ? ' in' : '') }, [
					h('span', { class: 'gw-step-text' }, [solved ? h('em', { text: t.steps[id][0] + ' · ' }) : null, t.steps[id][1]]),
					h('span', { class: 'gw-step-btns' }, [
						h('button', { type: 'button', class: 'gw-btn', 'aria-label': t.up, text: '↑', disabled: pos === 0, onclick: () => move(pos, -1) }),
						h('button', { type: 'button', class: 'gw-btn', 'aria-label': t.down, text: '↓', disabled: pos === order.length - 1, onclick: () => move(pos, 1) })
					])
				]));
			});
			if (!checked) msg.hidden = true;
		}
		function check() {
			checked = true;
			const n = order.filter((v, k) => v === k).length;
			msg.hidden = false; msg.className = 'gw-out ' + (n === 6 ? 'ok' : 'bad'); msg.textContent = n === 6 ? t.ok : t.no(n);
			paint();
		}
		el.appendChild(list);
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [btn(t.check, check, 'primary'), btn(t.reset, () => { order = START.slice(); checked = false; paint(); }, 'ghost')]));
		el.appendChild(msg);
		paint();
	};

	/* ---------- Cap. 6: em que camada mora? ---------- */
	W.camadas = function (el) {
		const t = L({
			pt: {
				title: 'Em que camada isso mora?', sub: 'Todo software tem três camadas. Para cada pedaço do painel da Lia, diga onde ele vive.',
				layers: ['Frente · o que se vê', 'Regras · o que acontece', 'Dados · o que fica guardado'], next: 'Próximo →', again: 'De novo', right: 'Isso!', wrong: 'Quase.',
				score: (a, b) => `${a} de ${b}.`, end: 'Quando você pede "um sisteminha", está pedindo as três coisas. Dizer o que quer em cada camada é metade de um bom pedido.',
				items: [
					['O botão "marcar contato feito"', 0, 'É o que a pessoa vê e toca. Mudar a cor ou o lugar do botão não muda nenhuma regra.'],
					['A regra: 5 faltas seguidas viram alerta', 1, 'É lógica. Fica "atrás" da tela e vale igual no celular, no computador ou em um relatório.'],
					['A tabela com códigos de estudantes e faltas', 2, 'É o que precisa continuar existindo amanhã, mesmo que a tela mude e a regra mude.'],
					['A tela se ajustar ao celular de quem está em campo', 0, 'Aparência e interação: frente.'],
					['Quem pode ver a lista de cada escola', 1, 'Permissão é regra — e é das mais importantes. Se ela morar só na tela ("escondi o botão"), não protege nada.'],
					['O histórico de contatos dos últimos dois anos', 2, 'Memória de longo prazo: dados.'],
					['Consultar a rota até a casa em um serviço de mapas', 1, 'É a camada de regras conversando com outro sistema por uma API — a porta de entrada e saída entre programas.']
				]
			},
			en: {
				title: 'Which layer does this live in?', sub: 'Every piece of software has three layers. For each part of Lia\'s dashboard, say where it lives.',
				layers: ['Front · what you see', 'Rules · what happens', 'Data · what is kept'], next: 'Next →', again: 'Again', right: 'Exactly!', wrong: 'Not quite.',
				score: (a, b) => `${a} out of ${b}.`, end: 'When you ask for "a little system", you are asking for all three. Saying what you want in each layer is half of a good request.',
				items: [
					['The "mark contact done" button', 0, 'It is what the person sees and taps. Changing the color or position of the button changes no rule.'],
					['The rule: 5 absences in a row trigger an alert', 1, 'It is logic. It sits "behind" the screen and holds the same on a phone, a computer or a report.'],
					['The table with student codes and absences', 2, 'It is what must still exist tomorrow, even if the screen changes and the rule changes.'],
					['The screen adapting to a field worker\'s phone', 0, 'Look and interaction: front.'],
					['Who can see each school\'s list', 1, 'Permission is a rule — and one of the most important. If it lives only on the screen ("I hid the button"), it protects nothing.'],
					['The history of contacts from the last two years', 2, 'Long-term memory: data.'],
					['Looking up the route to a home in a maps service', 1, 'That is the rules layer talking to another system through an API — the door in and out between programs.']
				]
			}
		});
		frame(el, t.title, t.sub);
		const stage = h('div');
		el.appendChild(stage);
		let i = 0, hits = 0;
		function show() {
			stage.textContent = '';
			if (i >= t.items.length) {
				stage.appendChild(h('div', { class: 'gw-out' }, [h('b', { text: t.score(hits, t.items.length) + ' ' }), t.end]));
				stage.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [btn(t.again, () => { i = 0; hits = 0; show(); })]));
				return;
			}
			const it = t.items[i];
			const out = h('div', { class: 'gw-out', hidden: true, 'aria-live': 'polite' });
			const nextRow = h('div', { class: 'gw-row', style: 'margin-top:.8rem', hidden: true }, [btn(t.next, () => { i++; show(); }, 'primary')]);
			const buttons = h('div', { class: 'gw-row', style: 'justify-content:center' }, t.layers.map((name, k) => btn(name, () => {
				const ok = k === it[1];
				if (ok) hits++;
				out.hidden = false; nextRow.hidden = false;
				out.className = 'gw-out ' + (ok ? 'ok' : 'bad');
				out.textContent = '';
				out.appendChild(h('span', { class: ok ? 'gw-ok' : 'gw-bad', text: (ok ? t.right : t.wrong) + ' ' }));
				out.appendChild(h('b', { text: t.layers[it[1]].split(' · ')[0] + '. ' }));
				out.appendChild(document.createTextNode(it[2]));
				buttons.querySelectorAll('button').forEach((b) => { b.disabled = true; });
			})));
			stage.appendChild(h('div', { class: 'gw-quiz-card' }, [h('div', { class: 'gw-quiz-name', text: `${i + 1}/${t.items.length} · ${it[0]}` }), buttons]));
			stage.appendChild(out);
			stage.appendChild(nextRow);
		}
		show();
	};

	/* ---------- Cap. 3: texto vira tokens ---------- */
	W.tokens = function (el) {
		const t = L({
			pt: { title: 'O que o modelo recebe quando você escreve', sub: 'Escreva qualquer coisa. O texto é cortado em pedaços (tokens) e cada pedaço vira um número. É com os números que o modelo trabalha.', ph: 'Lia quer saber quantas faltas seguidas cada estudante teve.', stats: (c, w, k) => `${c} caracteres · ${w} palavras · ${k} tokens`, note: 'Ilustração: cada modelo corta o texto do seu jeito, e os números aqui são inventados. O que vale é a ideia — palavra comum costuma virar um token só; palavra rara ou longa vira vários.', ids: 'O que segue para o modelo:' },
			en: { title: 'What the model receives when you write', sub: 'Type anything. The text is cut into pieces (tokens) and each piece becomes a number. The numbers are what the model works with.', ph: 'Lia wants to know how many absences in a row each student had.', stats: (c, w, k) => `${c} characters · ${w} words · ${k} tokens`, note: 'Illustration: every model cuts text its own way, and the numbers here are made up. What matters is the idea — a common word usually becomes a single token; a rare or long word becomes several.', ids: 'What goes to the model:' }
		});
		frame(el, t.title, t.sub);
		const input = h('textarea', { class: 'gw-text', rows: 2, 'aria-label': t.title });
		input.value = t.ph;
		const chips = h('div', { class: 'gw-chips' });
		const ids = h('div', { class: 'gw-flat' });
		const stats = h('p', { class: 'gw-note', style: 'margin:.6rem 0 0', 'aria-live': 'polite' });
		const hash = (x) => { let n = 7; for (let i = 0; i < x.length; i++) n = (n * 31 + x.charCodeAt(i)) % 49999; return n + 1; };
		function cut(text) {
			const out = [];
			(text.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) || []).forEach((w) => {
				if (w.length <= 5) { out.push(w); return; }
				let i = 0, first = true;
				while (i < w.length) { const size = first ? 4 : 3; const rest = w.length - i; const take = rest <= size + 1 ? rest : size; out.push(w.slice(i, i + take)); i += take; first = false; }
			});
			return out;
		}
		function paint() {
			const text = input.value, toks = cut(text);
			chips.textContent = '';
			toks.forEach((tk, i) => chips.appendChild(h('span', { class: 'gw-chip c' + (i % 4), text: tk })));
			ids.textContent = t.ids + ' [' + toks.map(hash).join(', ') + ']';
			stats.textContent = t.stats(text.length, (text.trim().match(/\S+/g) || []).length, toks.length);
		}
		input.addEventListener('input', paint);
		el.appendChild(input); el.appendChild(chips); el.appendChild(ids); el.appendChild(stats);
		el.appendChild(h('p', { class: 'gw-note', text: t.note }));
		paint();
	};

	/* ---------- Cap. 3: a próxima palavra e a temperatura ---------- */
	W.proxima = function (el) {
		const t = L({
			pt: {
				title: 'Qual é a próxima palavra?', sub: 'O modelo não responde: ele calcula a chance de cada continuação e sorteia. Escolha uma frase, mexa na temperatura e sorteie algumas vezes.',
				temp: (v) => `Temperatura: ${v}`, draw: 'Sortear a próxima palavra', clear: 'Limpar', drawn: 'Sorteios:', lo: 'Temperatura baixa: quase sempre a mais provável.', hi: 'Temperatura alta: as improváveis ganham chance.',
				note: 'Probabilidades ilustrativas. Repare na segunda frase: o modelo não tem como saber o motivo, e completa mesmo assim. Plausível não é o mesmo que verdadeiro.',
				cases: [['A capital do Brasil é', [['Brasília', 86], ['uma', 4], ['o', 3], ['São', 3], ['Rio', 2], ['conhecida', 2]]], ['A estudante faltou porque', [['estava', 24], ['precisou', 20], ['tinha', 16], ['não', 13], ['ficou', 10], ['perdeu', 9], ['quis', 8]]], ['Dois mais dois são', [['quatro', 93], ['4', 4], ['cinco', 1], ['iguais', 1], ['números', 1]]]]
			},
			en: {
				title: 'What is the next word?', sub: 'The model does not answer: it computes the chance of each continuation and draws one. Pick a sentence, move the temperature, and draw a few times.',
				temp: (v) => `Temperature: ${v}`, draw: 'Draw the next word', clear: 'Clear', drawn: 'Draws:', lo: 'Low temperature: almost always the most likely one.', hi: 'High temperature: unlikely ones get a chance.',
				note: 'Illustrative probabilities. Look at the second sentence: the model has no way of knowing the reason, and it completes it anyway. Plausible is not the same as true.',
				cases: [['The capital of Brazil is', [['Brasília', 86], ['a', 4], ['the', 3], ['São', 3], ['Rio', 2], ['known', 2]]], ['The student was absent because', [['of', 24], ['they', 20], ['the', 16], ['there', 13], ['it', 10], ['work', 9], ['no', 8]]], ['Two plus two is', [['four', 93], ['4', 4], ['five', 1], ['equal', 1], ['a', 1]]]]
			}
		});
		frame(el, t.title, t.sub);
		let ci = 1, draws = [];
		const picks = h('div', { class: 'gw-ctx-opts' });
		const bars = h('div', { class: 'gw-probs' });
		const slider = h('input', { type: 'range', min: 0, max: 15, value: 7, step: 1 });
		const lab = h('label');
		const out = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const T = () => +slider.value / 10;
		function probs() {
			const base = t.cases[ci][1], temp = Math.max(T(), 0.05);
			const w = base.map(([, p]) => Math.pow(p / 100, 1 / temp)); const sum = w.reduce((a, b) => a + b, 0);
			return base.map(([word], i) => [word, w[i] / sum]);
		}
		function paint() {
			const hint = T() < 0.5 ? t.lo : T() > 1 ? t.hi : '';
			lab.textContent = t.temp(fmt(T(), 1)) + (hint ? ' — ' + hint : '');
			Array.from(picks.children).forEach((b, i) => b.classList.toggle('active', i === ci));
			bars.textContent = '';
			probs().forEach(([word, p]) => bars.appendChild(h('div', { class: 'gw-prob' }, [h('span', { text: word }), h('div', { class: 'gw-bar' }, [h('i', { style: `width:${(p * 100).toFixed(1)}%;background:var(--accent)` })]), h('b', { text: fmt(p * 100) + ' %' })])));
			out.textContent = '';
			out.appendChild(h('b', { text: t.cases[ci][0] + ' … ' }));
			out.appendChild(document.createTextNode(draws.length ? t.drawn + ' ' + draws.join(' · ') : ''));
		}
		function draw() { const ps = probs(); let r = Math.random(), k = 0; while (k < ps.length - 1 && r > ps[k][1]) { r -= ps[k][1]; k++; } draws.push(ps[k][0]); if (draws.length > 12) draws.shift(); paint(); }
		t.cases.forEach((c, i) => picks.appendChild(h('button', { type: 'button', class: 'gw-btn', text: c[0] + ' …', onclick: () => { ci = i; draws = []; paint(); } })));
		slider.addEventListener('input', paint);
		el.appendChild(picks); el.appendChild(h('div', { style: 'margin:.9rem 0 .5rem' }, [lab, slider])); el.appendChild(bars);
		el.appendChild(h('div', { class: 'gw-row', style: 'margin-top:.8rem' }, [btn(t.draw, draw, 'primary'), btn(t.clear, () => { draws = []; paint(); }, 'ghost')]));
		el.appendChild(out); el.appendChild(h('p', { class: 'gw-note', text: t.note }));
		paint();
	};

	/* ---------- Cap. 9: buscar antes de responder ---------- */
	W.busca = function (el) {
		const t = L({
			pt: {
				title: 'Que trechos você levaria para o modelo?', sub: 'A base abaixo é o protocolo (inventado) da rede da Lia, cortado em seis trechos. Escolha uma pergunta ou escreva a sua. A busca dá uma nota de semelhança a cada trecho; você decide quantos entram no contexto.',
				k: (v) => `Trechos que entram no contexto: ${v}`, own: 'Ou escreva a sua pergunta', score: 'semelhança',
				v0: 'Sem busca, o modelo responde de memória: um texto plausível sobre "protocolos em geral", que pode não ter nada a ver com a rede da Lia.',
				vMiss: 'Nenhum trecho parece responder. A resposta honesta é "não encontrei isso no protocolo" — e um bom sistema precisa conseguir dizer isso.',
				vOk: (n) => `O trecho mais parecido está no contexto${n > 1 ? `, com mais ${n - 1}` : ''}. O modelo pode responder apontando de onde tirou — e você pode conferir.`,
				vNoise: 'O trecho certo está lá, mas misturado com vários que não têm a ver com a pergunta. Mais contexto não é melhor contexto.',
				qs: ['Quantas faltas disparam o primeiro contato?', 'Quem faz a visita à família?', 'O que acontece quando a pessoa volta para a escola?', 'Qual é o valor da bolsa para quem volta?'],
				stop: 'a o e é de da do das dos em no na nos nas um uma para por com que se os as ao à às qual quais quem quantas quantos quando como onde não sim ou mais seu sua faz é são foi ser ter há',
				docs: [['Frequência', 'A escola registra a presença todos os dias e envia a lista da semana à equipe na sexta-feira.'], ['Primeiro contato', 'Com cinco faltas seguidas, a equipe liga para a família em até dois dias úteis: é o primeiro contato.'], ['Visita', 'Se não houver resposta por telefone, a visita à família é feita por duas pessoas da equipe, nunca por uma só.'], ['Sigilo', 'Informações sobre a família não são compartilhadas fora da equipe sem autorização.'], ['Retorno', 'Quando a pessoa volta para a escola, alguém é indicado para acompanhá-la nas quatro primeiras semanas.'], ['Transporte', 'Estudantes do turno da noite têm direito ao passe estudantil.']]
			},
			en: {
				title: 'Which excerpts would you bring to the model?', sub: 'The base below is the (invented) protocol of Lia\'s school system, cut into six excerpts. Pick a question or write your own. The search gives each excerpt a similarity score; you decide how many go into the context.',
				k: (v) => `Excerpts that go into the context: ${v}`, own: 'Or write your own question', score: 'similarity',
				v0: 'With no search, the model answers from memory: a plausible text about "protocols in general" that may have nothing to do with Lia\'s school system.',
				vMiss: 'No excerpt seems to answer it. The honest answer is "I could not find that in the protocol" — and a good system must be able to say so.',
				vOk: (n) => `The most similar excerpt is in the context${n > 1 ? `, along with ${n - 1} more` : ''}. The model can answer pointing to where it got it — and you can check.`,
				vNoise: 'The right excerpt is there, but mixed with several that have nothing to do with the question. More context is not better context.',
				qs: ['How many absences trigger the first contact?', 'Who makes the home visit to the family?', 'What happens when the person returns to school?', 'How much is the stipend for those who return?'],
				stop: 'a an the is are was be of to in on at for by with and or not no yes do does did who what when where how many much which that this it its their they she he her his them those there',
				docs: [['Attendance', 'The school records attendance every day and sends the week\'s list to the team on Friday.'], ['First contact', 'After five absences in a row, the team calls the family within two business days: that is the first contact.'], ['Visit', 'If there is no answer by phone, the home visit to the family is made by two people from the team, never by one alone.'], ['Confidentiality', 'Information about the family is not shared outside the team without authorization.'], ['Return', 'When the person returns to school, someone is assigned to follow up during the first four weeks.'], ['Transport', 'Students in night classes are entitled to the student transit pass.']]
			}
		});
		frame(el, t.title, t.sub);
		const STOP = new Set(t.stop.split(' '));
		const terms = (x) => (x.toLowerCase().match(/[\p{L}\p{N}]+/gu) || []).filter((w) => !STOP.has(w) && w.length > 2).map((w) => w.slice(0, 5));
		const docTerms = t.docs.map((d) => terms(d[0] + ' ' + d[1]));
		let q = t.qs[0], k = 2;
		const picks = h('div', { class: 'gw-ctx-opts' });
		const input = h('input', { type: 'text', class: 'gw-text', placeholder: t.own, 'aria-label': t.own });
		const slider = h('input', { type: 'range', min: 0, max: 6, value: 2, step: 1 });
		const lab = h('label');
		const list = h('div', { class: 'gw-docs' });
		const out = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		function paint() {
			const qt = new Set(terms(q));
			const scored = docTerms.map((dt, i) => ({ i, s: dt.filter((w) => qt.has(w)).length })).sort((a, b) => b.s - a.s || a.i - b.i);
			const max = Math.max(1, scored[0].s);
			lab.textContent = t.k(k);
			Array.from(picks.children).forEach((b) => b.classList.toggle('active', b.textContent === q));
			list.textContent = '';
			scored.forEach((d, rank) => list.appendChild(h('div', { class: 'gw-doc' + (rank < k ? ' in' : '') }, [
				h('div', { class: 'gw-doc-head' }, [h('b', { text: t.docs[d.i][0] }), h('span', { text: `${t.score}: ${d.s}` })]),
				h('div', { class: 'gw-bar' }, [h('i', { style: `width:${d.s / max * 100}%;background:var(--accent-2)` })]),
				h('p', { text: t.docs[d.i][1] })
			])));
			const hit = scored[0].s >= 2;
			out.className = 'gw-out ' + (k === 0 || !hit ? 'bad' : k > 3 ? '' : 'ok');
			out.textContent = k === 0 ? t.v0 : !hit ? t.vMiss : k > 3 ? t.vNoise : t.vOk(k);
		}
		t.qs.forEach((x) => picks.appendChild(h('button', { type: 'button', class: 'gw-btn', text: x, onclick: () => { q = x; input.value = ''; paint(); } })));
		input.addEventListener('input', () => { if (input.value.trim()) { q = input.value; paint(); } });
		slider.addEventListener('input', () => { k = +slider.value; paint(); });
		el.appendChild(picks); el.appendChild(h('div', { style: 'margin:.7rem 0' }, [input])); el.appendChild(h('div', { style: 'margin-bottom:.6rem' }, [lab, slider])); el.appendChild(list); el.appendChild(out);
		paint();
	};

	/* ---------- Cap. 13: o que acontece quando você não diz ---------- */
	W.pedido = function (el) {
		const t = L({
			pt: {
				title: 'O que acontece quando você não diz?', sub: 'À esquerda, as sete linhas do mini-PRD da Lia. Desmarque uma linha e veja o que o gerador de aplicativos teve de adivinhar.',
				guesses: (n) => n ? `O gerador adivinhou ${n} coisa(s) por você:` : 'Nada ficou por adivinhar. O que aparece na tela é o que foi pedido.', app: 'Faltas da semana', risk: 'ALTO RISCO', days: 'faltas seguidas', small: 'tabela pensada para computador', tested: '10 de 10 casos conferidos', untested: 'sem teste: "parece funcionar"',
				auto: 'Enviar mensagem automática', draft: 'Preparar rascunho para revisão', any: 'Enviar qualquer arquivo', week: 'Lista da semana recebida',
				lines: [['Problema', 'Virou um cadastro genérico de estudantes: sem saber o problema, o gerador entrega o aplicativo mais comum.'], ['Quem usa', 'Tela pensada para computador. Quem está na rua, no celular, não consegue usar.'], ['O que entra', 'Aceita qualquer arquivo, inclusive a planilha com nome, endereço e telefone.'], ['O que sai', 'Lista em ordem alfabética. Quem mais precisa de atenção fica no meio da fila.'], ['Regras', 'Mostra nome completo e inventou um rótulo de "alto risco".'], ['O que NÃO faz', 'Ganhou um botão que manda mensagem para a família sem ninguém revisar.'], ['Deu certo se', 'Ninguém conferiu a contagem com casos reais. Pode estar errada desde o primeiro dia.']],
				names: ['Ana S.', 'Bruno L.', 'Carla D.']
			},
			en: {
				title: 'What happens when you do not say it?', sub: 'On the left, the seven lines of Lia\'s mini-PRD. Uncheck a line and see what the app builder had to guess.',
				guesses: (n) => n ? `The builder guessed ${n} thing(s) for you:` : 'Nothing was left to guess. What is on the screen is what was asked for.', app: 'This week\'s absences', risk: 'HIGH RISK', days: 'absences in a row', small: 'table designed for a computer', tested: '10 of 10 cases checked', untested: 'no test: "seems to work"',
				auto: 'Send automatic message', draft: 'Prepare draft for review', any: 'Upload any file', week: 'This week\'s list received',
				lines: [['Problem', 'It became a generic student registry: without knowing the problem, the builder delivers the most common app.'], ['Who uses it', 'A screen designed for a computer. People in the field, on a phone, cannot use it.'], ['What goes in', 'It accepts any file, including the spreadsheet with names, addresses and phone numbers.'], ['What comes out', 'An alphabetical list. Whoever needs attention most ends up in the middle of the line.'], ['Rules', 'It shows full names and made up a "high risk" label.'], ['What it does NOT do', 'It gained a button that messages the family with nobody reviewing.'], ['It worked if', 'Nobody checked the count against real cases. It may be wrong from day one.']],
				names: ['Ana S.', 'Bruno L.', 'Carla D.']
			}
		});
		frame(el, t.title, t.sub);
		const on = t.lines.map(() => true);
		const checks = h('div', { class: 'gw-checks' });
		const app = h('div', { class: 'gw-app' });
		const out = h('div', { class: 'gw-out', 'aria-live': 'polite' });
		const ROWS = [['E-027', 7], ['E-068', 6], ['E-046', 5]];
		function paint() {
			app.textContent = '';
			app.className = 'gw-app' + (on[1] ? '' : ' wide');
			app.appendChild(h('div', { class: 'gw-app-bar', text: on[0] ? t.app : (LANG === 'en' ? 'Student registry' : 'Cadastro de estudantes') }));
			app.appendChild(h('div', { class: 'gw-app-in', text: '↥ ' + (on[2] ? t.week : t.any) }));
			const rows = on[3] ? ROWS : ROWS.slice().sort((a, b) => a[0] < b[0] ? -1 : 1);
			rows.forEach((r, i) => app.appendChild(h('div', { class: 'gw-app-row' }, [
				h('b', { text: on[4] ? r[0] : t.names[i] }),
				h('span', { text: `${r[1]} ${t.days}` }),
				on[4] ? null : h('em', { text: t.risk })
			])));
			app.appendChild(h('div', { class: 'gw-app-btn' + (on[5] ? '' : ' danger'), text: on[5] ? t.draft : t.auto }));
			app.appendChild(h('div', { class: 'gw-app-foot', text: (on[6] ? '✓ ' + t.tested : '? ' + t.untested) + (on[1] ? '' : ' · ' + t.small) }));
			const miss = t.lines.filter((_, i) => !on[i]);
			out.className = 'gw-out ' + (miss.length ? 'bad' : 'ok');
			out.textContent = '';
			out.appendChild(h('b', { text: t.guesses(miss.length) }));
			if (miss.length) out.appendChild(h('ul', { class: 'gw-found' }, miss.map((m) => h('li', null, [h('b', { text: m[0] + ': ' }), m[1]]))));
		}
		t.lines.forEach((ln, i) => checks.appendChild(h('label', null, [h('input', { type: 'checkbox', checked: true, onchange: (e) => { on[i] = e.target.checked; paint(); } }), ln[0]])));
		el.appendChild(h('div', { class: 'gw-grid2' }, [checks, app]));
		el.appendChild(out);
		paint();
	};

	/* ---------- Checklist: listas de tarefas do Markdown ganham memória ---------- */
	W.checklist = function (el) {
		const t = L({ pt: { done: (a, b) => `${a} de ${b} marcados`, reset: 'Limpar', saved: 'Fica salvo só neste navegador.' }, en: { done: (a, b) => `${a} of ${b} checked`, reset: 'Clear', saved: 'Saved only in this browser.' } });
		const key = 'check:' + (el.dataset.key || 'default');
		const state = store.get(key, {});
		const boxes = Array.from(el.querySelectorAll('input[type="checkbox"]'));
		if (!boxes.length) return;
		el.classList.add('gw', 'gw-checklist');
		if (el.dataset.title) el.insertBefore(h('h4', { class: 'gw-title', text: el.dataset.title }), el.firstChild);
		const meter = h('div', { class: 'g-meter' }, [h('span')]);
		const count = h('span', { class: 'gw-note', style: 'margin:0', 'aria-live': 'polite' });
		function paint() {
			const n = boxes.filter((b) => b.checked).length;
			boxes.forEach((b) => b.closest('li').classList.toggle('done', b.checked));
			meter.firstChild.style.width = (n / boxes.length * 100) + '%';
			count.textContent = t.done(n, boxes.length);
		}
		boxes.forEach((b, i) => {
			b.disabled = false; b.removeAttribute('disabled');
			b.checked = !!state[i];
			const li = b.closest('li');
			const label = h('label');
			while (b.nextSibling) label.appendChild(b.nextSibling);
			b.id = b.id || `${key.replace(/\W/g, '-')}-${i}`;
			label.setAttribute('for', b.id);
			li.appendChild(label);
			b.addEventListener('change', () => { state[i] = b.checked; store.set(key, state); paint(); });
		});
		el.appendChild(h('div', { class: 'gw-checklist-foot' }, [meter, count, btn(t.reset, () => { boxes.forEach((b, i) => { b.checked = false; state[i] = false; }); store.set(key, state); paint(); }, 'ghost')]));
		el.appendChild(h('p', { class: 'gw-note', text: t.saved }));
		paint();
	};

	/* ---------- Progresso de leitura ---------- */
	function reading() {
		const article = document.querySelector('article[data-guia-ref]');
		const bar = document.getElementById('gReadBar');
		if (article) {
			const ref = article.getAttribute('data-guia-ref');
			let marked = false;
			const onScroll = () => {
				const rect = article.getBoundingClientRect();
				const total = rect.height - window.innerHeight * 0.6;
				const p = total <= 0 ? 1 : Math.max(0, Math.min(1, -rect.top / total));
				if (bar) bar.style.width = (p * 100) + '%';
				if (!marked && p > 0.9) { marked = true; const read = store.get('read', {}); read[ref] = true; store.set('read', read); }
			};
			window.addEventListener('scroll', onScroll, { passive: true });
			window.addEventListener('resize', onScroll);
			onScroll();
		}
		const cards = document.querySelectorAll('a.g-chapter[data-guia-ref]');
		if (cards.length) {
			const read = store.get('read', {});
			let n = 0;
			cards.forEach((c) => { if (read[c.getAttribute('data-guia-ref')]) { n++; c.classList.add('is-read'); const f = c.querySelector('.g-read-flag'); if (f) f.hidden = false; } });
			const box = document.getElementById('gIndexProgress');
			if (box && n > 0) { box.hidden = false; document.getElementById('gIndexCount').textContent = n; box.querySelector('.g-meter span').style.width = (n / cards.length * 100) + '%'; }
		}
	}

	/* ---------- Impressão: widgets viram notas, abas e notas de aula abrem ---------- */
	const STATIC = { tabs: 1, checklist: 1 }; // estes já imprimem bem: o conteúdo vem do Markdown
	function printNote(el) {
		el.classList.add('gw-js');
		const title = el.querySelector('.gw-title');
		const chapter = el.closest('[data-chapter-url]');
		const path = chapter ? chapter.getAttribute('data-chapter-url') : location.pathname;
		const note = h('p', { class: 'g-print-note' }, [
			h('b', { text: L({ pt: 'Experimento interativo', en: 'Interactive experiment' }) + (title ? ': ' : '') }),
			title ? title.textContent : '',
			' — ' + L({ pt: 'abra em ', en: 'open at ' }),
			h('span', { class: 'gw-mono', text: 'efrem.io' + path })
		]);
		el.parentNode.insertBefore(note, el.nextSibling);
	}
	function printing() {
		const openAll = () => document.querySelectorAll('details.g-aula').forEach((d) => { d.open = true; });
		if (document.querySelector('[data-guia-book]')) openAll();
		window.addEventListener('beforeprint', openAll);
		document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
	}

	function init() {
		document.querySelectorAll('[data-widget]').forEach((el) => {
			const name = el.getAttribute('data-widget');
			const fn = W[name];
			if (!fn) return;
			try { fn(el); if (!STATIC[name] && el.classList.contains('gw')) printNote(el); } catch (e) { if (window.console) console.error('guia widget', name, e); }
		});
		reading();
		printing();
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
