/* Dashboard profil SDM UNJ: membaca window.SDM_DATA (data/data.js), menggambar sembilan halaman, grafik interaktif, dan mode terang/gelap. */
(() => {
  const D = window.SDM_DATA;
  const $ = (id) => document.getElementById(id);
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const nf = (x) => Number(x).toLocaleString('id-ID');
  const pf = (x, d = 1) => `${Number(x).toFixed(d).replace('.', ',')}%`;
  const pc = (x, n) => (n ? (100 * x) / n : 0);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (v == null || v === false) return;
      if (k === 'class') e.className = v;
      else if (k === 'style') e.setAttribute('style', v);
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    });
    kids.flat().forEach((k) => e.append(k instanceof Node ? k : document.createTextNode(k ?? '')));
    return e;
  };
  const svg = (d) => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = d; return s; };
  const tone = (t) => (/^Memenuhi/.test(t) ? 'ok' : /Belum memenuhi|Tidak memenuhi/.test(t) ? 'bad' : /Tidak ada ambang|Belum ada data/.test(t) ? 'mute' : 'warn');
  const pill = (t) => el('span', { class: `pill ${tone(t)}` }, t);
  const bar = (value, max = 100, marks = [], cls = '') => {
    const b = el('div', { class: 'bar' }, el('span', { class: cls, style: `width:${Math.max(0, Math.min(100, (value / max) * 100))}%` }));
    marks.forEach(([v, c]) => b.append(el('i', { class: c || '', style: `left:calc(${(v / max) * 100}% - 1px)` })));
    return b;
  };

  if (!D) { $('lead').textContent = 'Data tidak dapat dimuat.'; return; }
  const K = D.kpi;
  const JAB = [['gb', 'Guru Besar', '--c1'], ['lk', 'Lektor Kepala', '--c2'], ['l', 'Lektor', '--c3'], ['aa', 'Asisten Ahli', '--c4'], ['tanpa', 'Belum berjabatan', '--c5']];
  const jt = (v) => JAB.reduce((a, [k]) => a + v[k], 0);
  $('asof').textContent = `Data per ${D.meta.diperbarui}`;

  /* ---------- Tabel yang bisa diurutkan ---------- */
  const tables = {};
  const table = (id, cols, rows, opt = {}) => {
    const t = $(id);
    const st = tables[id] || (tables[id] = { key: opt.sortKey || null, dir: opt.sortDir || -1 });
    const draw = () => {
      let rs = [...rows];
      const col = cols.find((c) => c.key === st.key);
      if (col) rs.sort((a, b) => { const x = col.sort ? col.sort(a) : a[col.key]; const y = col.sort ? col.sort(b) : b[col.key]; return (x > y ? 1 : x < y ? -1 : 0) * st.dir; });
      const sortable = t.classList.contains('sortable');
      t.replaceChildren(
        el('thead', {}, el('tr', {}, cols.map((c) => {
          const th = el('th', { class: c.align === 'r' ? 'r' : '', 'data-k': sortable && c.key ? c.key : null, scope: 'col' }, c.label);
          if (sortable && c.key) {
            if (st.key === c.key) th.setAttribute('aria-sort', st.dir > 0 ? 'ascending' : 'descending');
            th.addEventListener('click', () => { st.dir = st.key === c.key ? -st.dir : -1; st.key = c.key; draw(); });
          }
          return th;
        }))),
        el('tbody', {}, rs.map((r) => {
          const tr = el('tr', { class: [r._total ? 'total' : '', opt.selected && opt.selected(r) ? 'sel' : ''].join(' ').trim() || null });
          if (opt.onRow && !r._total) { tr.tabIndex = 0; tr.addEventListener('click', () => opt.onRow(r)); tr.addEventListener('keydown', (e) => { if (e.key === 'Enter') opt.onRow(r); }); }
          cols.forEach((c) => tr.append(el('td', { class: c.align === 'r' ? 'r' : '' }, c.render ? c.render(r) : String(r[c.key] ?? ''))));
          return tr;
        })),
      );
      if (opt.total) t.tBodies[0].append(el('tr', { class: 'total' }, opt.total.map((x, i) => el('td', { class: cols[i].align === 'r' ? 'r' : '' }, x))));
    };
    draw();
  };

  /* ---------- Segmen (tombol pilihan) ---------- */
  const seg = (id, options, onChange, initial) => {
    const box = $(id);
    let cur = initial ?? options[0][0];
    const draw = () => box.replaceChildren(...options.map(([v, label]) => el('button', { type: 'button', 'aria-pressed': String(v === cur), onclick: () => { cur = v; draw(); onChange(v); } }, label)));
    draw();
    return () => cur;
  };

  /* ---------- Grafik ---------- */
  const charts = {};
  const builders = {};
  const refLines = {
    id: 'refLines',
    afterDatasetsDraw(chart, _a, opts) {
      const lines = opts && opts.lines;
      if (!lines || !lines.length) return;
      const { ctx, chartArea: A } = chart;
      ctx.save();
      lines.forEach((l) => {
        const sc = chart.scales[l.axis];
        if (!sc) return;
        const p = sc.getPixelForValue(l.value);
        ctx.strokeStyle = l.color || css('--ink');
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        if (l.axis === 'x') { ctx.moveTo(p, A.top); ctx.lineTo(p, A.bottom); } else { ctx.moveTo(A.left, p); ctx.lineTo(A.right, p); }
        ctx.stroke();
        if (l.label) {
          ctx.setLineDash([]);
          ctx.fillStyle = l.color || css('--ink');
          ctx.font = `600 11px ${css('--font')}`;
          if (l.axis === 'x') { ctx.textAlign = 'left'; ctx.fillText(l.label, p + 4, A.top + 10); } else { ctx.textAlign = 'right'; ctx.fillText(l.label, A.right - 2, p - 5); }
        }
      });
      ctx.restore();
    },
  };
  const applyDefaults = () => {
    if (!window.Chart) return;
    Chart.defaults.font.family = css('--font');
    Chart.defaults.color = css('--muted');
    Chart.defaults.borderColor = css('--line');
    Chart.defaults.plugins.legend.labels.boxWidth = 12;
    Chart.defaults.plugins.legend.labels.boxHeight = 12;
    Chart.defaults.plugins.tooltip.backgroundColor = css('--ink');
    Chart.defaults.plugins.tooltip.titleColor = css('--panel');
    Chart.defaults.plugins.tooltip.bodyColor = css('--panel');
    Chart.defaults.plugins.tooltip.padding = 10;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.maintainAspectRatio = false;
    if (reduce) Chart.defaults.animation = false;
  };
  const chart = (id, build) => { builders[id] = build; render(id); };
  const render = (id) => {
    if (!window.Chart) return;
    if (charts[id]) charts[id].destroy();
    charts[id] = new Chart($(id), { ...builders[id](), plugins: [refLines] });
  };
  const renderAll = () => { applyDefaults(); Object.keys(builders).forEach(render); };
  const pctAxis = (min = 0, max = 100) => ({ min, max, ticks: { callback: (v) => `${v}%` }, grid: { color: css('--line') } });
  window.Chart && Chart.register(refLines);

  /* ---------- Navigasi halaman ---------- */
  const ICON = {
    ringkasan: '<path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"/>',
    renstra: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    tren: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    fakultas: '<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/>',
    jabatan: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>',
    doktor: '<path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5"/>',
    bkd: '<path d="M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',
    tendik: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M17 11a3 3 0 1 0 0-6M22 20c0-2.6-1.6-4.6-4-5.5"/>',
    sumber: '<path d="M4 4h12l4 4v12H4zM16 4v4h4M8 13h8M8 17h5"/>',
  };
  const sections = [...document.querySelectorAll('.page')];
  const pages = sections.map((s) => s.id.slice(3));
  $('nav').replaceChildren(...sections.map((s, i) => el('a', { href: `#${pages[i]}` }, svg(ICON[pages[i]] || ''), s.dataset.title, el('span', { class: 'num' }, String(i + 1)))));
  const links = [...$('nav').querySelectorAll('a')];
  let current = null;
  const show = (page) => {
    if (!pages.includes(page)) page = pages[0];
    if (page === current) return;
    current = page;
    const sec = $(`pg-${page}`);
    sections.forEach((s) => s.classList.toggle('active', s === sec));
    links.forEach((a) => { const on = a.getAttribute('href') === `#${page}`; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    const on = links.find((a) => a.classList.contains('on'));
    if (on && window.innerWidth <= 960) on.scrollIntoView({ block: 'nearest', inline: 'center' });
    const i = pages.indexOf(page);
    $('page-title').textContent = sec.dataset.title;
    $('crumb').textContent = sec.dataset.sub;
    $('pagecount').textContent = `${i + 1} / ${pages.length}`;
    $('btn-prev').disabled = i === 0;
    $('btn-next').disabled = i === pages.length - 1;
    document.title = `${sec.dataset.title} · Profil SDM Universitas Negeri Jakarta`;
    window.scrollTo({ top: 0 });
    requestAnimationFrame(() => Object.values(charts).forEach((c) => c.resize()));
  };
  const go = (d) => { const i = pages.indexOf(current) + d; if (i >= 0 && i < pages.length) location.hash = pages[i]; };
  $('btn-prev').addEventListener('click', () => go(-1));
  $('btn-next').addEventListener('click', () => go(1));
  // Bagian halaman memakai id yang sama dengan hash; cegah browser menggulir ke bagian itu
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const top0 = () => requestAnimationFrame(() => window.scrollTo(0, 0));
  window.addEventListener('hashchange', () => { show(location.hash.slice(1)); top0(); });
  window.addEventListener('load', top0);
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });

  /* ---------- Tema ---------- */
  const isDark = () => (document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  const drawThemeBtn = () => {
    const dark = isDark();
    $('btn-theme').replaceChildren(svg(dark ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>' : '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'), el('span', {}, dark ? 'Terang' : 'Gelap'));
    $('btn-theme').setAttribute('aria-label', dark ? 'Pakai mode terang' : 'Pakai mode gelap');
  };
  $('btn-theme').addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('sdm-theme', next); } catch (e) { /* tanpa penyimpanan */ }
    drawThemeBtn();
    renderAll();
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (!document.documentElement.dataset.theme) { drawThemeBtn(); renderAll(); } });
  $('btn-print').addEventListener('click', () => window.print());
  drawThemeBtn();
  applyDefaults();

  /* =================== 1. Ringkasan =================== */
  const gblkKurang = Math.max(0, Math.ceil(0.3 * K.dosen) - (K.gb + K.lk));
  $('lead').replaceChildren(
    'Universitas Negeri Jakarta memiliki ', el('b', {}, `${nf(K.dosen)} dosen tetap`), ' dan ', el('b', {}, `${nf(K.tendik)} tenaga kependidikan`), '. ',
    'Sebanyak ', el('b', {}, pf(K.doktor_pct)), ' dosen tetap bergelar doktor dan ', el('b', {}, pf(K.gblk_pct)), ' berjabatan Guru Besar atau Lektor Kepala. ',
    'Proporsi dosen berjabatan akademik ', el('b', {}, pf(K.ja_pct)), ` karena ${K.cpns25} dosen CPNS angkatan 2025 belum memperoleh jabatan pertama. `,
    'Dosen yang memenuhi BKD naik dari ', el('b', {}, pf(K.bkd_awal_pct)), ` pada ${K.bkd_awal_sem} menjadi `, el('b', {}, pf(K.bkd_pct)), ` pada ${K.bkd_sem}.`,
  );
  const kpis = [
    { l: 'Dosen tetap', v: K.dosen, f: nf, s: 'PNS, PPPK, dan tetap PTNBH', p: 'fakultas', t: 'mute' },
    { l: 'Bergelar doktor', v: K.doktor_pct, f: pf, s: `${nf(K.doktor)} dosen · unggul ≥ 50%`, p: 'tren', t: K.doktor_pct >= 50 ? 'ok' : 'warn', bar: [K.doktor_pct, 50] },
    { l: 'Guru Besar + Lektor Kepala', v: K.gblk_pct, f: pf, s: `${K.gb} GB · ${K.lk} LK · unggul ≥ 30%`, p: 'jabatan', t: K.gblk_pct >= 30 ? 'ok' : 'warn', bar: [K.gblk_pct, 30] },
    { l: 'Berjabatan akademik', v: K.ja_pct, f: pf, s: `${K.tanpa_jabatan} belum berjabatan · syarat ≥ 90%`, p: 'jabatan', t: K.ja_pct >= 90 ? 'ok' : 'bad', bar: [K.ja_pct, 90] },
    { l: 'Memenuhi BKD', v: K.bkd_pct, f: pf, s: `Semester ${K.bkd_sem}`, p: 'bkd', t: 'ok', bar: [K.bkd_pct, 100] },
    { l: 'Tenaga kependidikan', v: K.tendik, f: nf, s: `S1 ${pf(K.tendik_s1_pct)} · S2+ ${pf(K.tendik_s2_pct)}`, p: 'tendik', t: 'mute' },
  ];
  $('kpis').replaceChildren(...kpis.map((k) => {
    const num = el('span', { class: 'kpi-num', 'data-v': k.v }, k.f(k.v));
    num._f = k.f;
    return el('button', { type: 'button', class: 'kpi', onclick: () => { location.hash = k.p; }, 'aria-label': `${k.l} ${k.f(k.v)}, buka halaman terkait` },
      el('span', { class: 'kpi-top' }, el('span', { class: 'kpi-label' }, k.l), el('i', { class: `dot ${k.t}` })),
      num, k.bar ? bar(k.bar[0], 100, [[k.bar[1], '']], k.t === 'ok' ? '' : 'warn') : null, el('span', { class: 'kpi-sub' }, k.s));
  }));
  if (!reduce) {
    document.querySelectorAll('.kpi-num').forEach((n) => {
      const v = +n.dataset.v; const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / 900); const e = 1 - (1 - p) ** 3; n.textContent = n._f === nf ? nf(Math.round(v * e)) : pf(v * e); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }
  table('tbl-indikator', [
    { label: 'Indikator', render: (r) => el('b', {}, r.indikator) },
    { label: 'Capaian UNJ', render: (r) => r.capaian },
    { label: 'Terakreditasi', render: (r) => el('div', { class: 'stat' }, pill(r.status_terakreditasi), el('small', {}, r.ambang_terakreditasi)) },
    { label: 'Unggul', render: (r) => el('div', { class: 'stat' }, pill(r.status_unggul), el('small', {}, r.ambang_unggul)) },
  ], D.indikator);
  const st = { Memenuhi: 0, 'Belum memenuhi': 0, 'Tidak ada ambang': 0 };
  D.indikator.forEach((r) => [r.status_terakreditasi, r.status_unggul].forEach((s) => { st[s] = (st[s] || 0) + 1; }));
  chart('ch-status', () => ({
    type: 'doughnut',
    data: { labels: Object.keys(st), datasets: [{ data: Object.values(st), backgroundColor: [css('--ok'), css('--bad'), css('--c5')], borderColor: css('--panel'), borderWidth: 3 }] },
    options: { cutout: '64%', plugins: { legend: { position: 'right' }, tooltip: { callbacks: { label: (c) => `${c.label}: ${c.raw} syarat` } } } },
  }));
  const dok50 = D.doktor.filter((r) => r.guru_besar / r.dosen_tetap >= 0.5).length;
  $('facts').replaceChildren(...[
    ['ok', `Seluruh ${D.doktor.length} program doktor memiliki minimal 2 Guru Besar; ${dok50} di antaranya mencapai porsi 50%.`],
    ['ok', `Kepatuhan BKD naik dari ${pf(K.bkd_awal_pct)} menjadi ${pf(K.bkd_pct)} dalam enam semester.`],
    ['warn', `Guru Besar ditambah Lektor Kepala kurang ${gblkKurang} orang untuk mencapai 30%.`],
    ['bad', `${K.cpns25} dosen CPNS 2025 sedang menunggu jabatan pertama; setelah ditetapkan, jabatan akademik kembali di atas 90%.`],
  ].map(([t, x]) => el('li', {}, el('i', { class: `dot ${t}` }), el('span', {}, x))));

  /* =================== 2. Renstra =================== */
  $('renstra-bars').replaceChildren(...D.renstra.map((r) => {
    const t26 = r.target['2026']; const t29 = r.target['2029'];
    const max = Math.max(60, Math.ceil((Math.max(r.capaian, t29) + 5) / 10) * 10);
    const ok = r.capaian >= t26;
    return el('div', { class: 'prog' },
      el('div', { class: 'prog-name' }, r.indikator, el('small', {}, `${r.rujukan} · 2026: ${t26}% · 2029: ${t29}%`)),
      bar(r.capaian, max, [[t26, ''], [t29, 't29']], ok ? '' : 'warn'),
      el('div', { class: 'prog-val' }, pf(r.capaian), el('small', {}, ok ? 'Memenuhi target 2026' : `Kurang ${pf(t26 - r.capaian)} poin`)));
  }));
  chart('ch-kebutuhan', () => ({
    type: 'line',
    data: { labels: D.kebutuhan.map((r) => r.tahun), datasets: [
      { label: 'Doktor', data: D.kebutuhan.map((r) => r.s3), borderColor: css('--c1'), backgroundColor: css('--c1'), tension: .3 },
      { label: 'Guru Besar', data: D.kebutuhan.map((r) => r.gb), borderColor: css('--c-accent'), backgroundColor: css('--c-accent'), tension: .3 },
      { label: 'Lektor Kepala', data: D.kebutuhan.map((r) => r.lk), borderColor: css('--c3'), backgroundColor: css('--c3'), tension: .3 },
    ] },
    options: { interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: (c) => `${c.dataset.label}: +${c.raw} orang` } } }, scales: { x: { grid: { display: false } } } },
  }));
  table('tbl-kebutuhan', [
    { label: 'Tahun', key: 'tahun' }, { label: 'Doktor', align: 'r', render: (r) => `+${r.s3}` }, { label: 'Guru Besar', align: 'r', render: (r) => `+${r.gb}` }, { label: 'Lektor Kepala', align: 'r', render: (r) => `+${r.lk}` },
  ], D.kebutuhan);
  let pensMode = 'dosen';
  seg('seg-pensiun', [['dosen', 'Dosen'], ['tendik', 'Tendik']], (v) => { pensMode = v; render('ch-pensiun'); });
  chart('ch-pensiun', () => {
    const P = D.pensiun;
    const ds = pensMode === 'dosen'
      ? [['Dosen tetap', 'dosen', '--c1'], ['Bergelar S3', 'dosen_s3', '--c3'], ['Guru Besar', 'guru_besar', '--c-accent'], ['Lektor Kepala', 'lektor_kepala', '--c2']]
      : [['Tendik tetap', 'tendik_tetap', '--c-accent']];
    return {
      type: 'bar',
      data: { labels: P.map((r) => r.label), datasets: ds.map(([l, k, c]) => ({ label: l, data: P.map((r) => r[k]), backgroundColor: css(c), borderRadius: 4 })) },
      options: { plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false } }, scales: { x: { grid: { display: false } } } },
    };
  });

  /* =================== 3. Tren =================== */
  const TJ = D.tren.jabatan;
  const TF = { gb: 'guru_besar', lk: 'lektor_kepala', l: 'lektor', aa: 'asisten_ahli', tanpa: 'belum_berjabatan' };
  const tjN = (r) => JAB.reduce((a, [k]) => a + r[TF[k]], 0);
  let trenMode = 'jumlah';
  seg('seg-tren', [['jumlah', 'Jumlah'], ['persen', 'Persentase']], (v) => { trenMode = v; render('ch-tren'); });
  chart('ch-tren', () => {
    const persen = trenMode === 'persen';
    return {
      data: { labels: TJ.map((r) => r.periode), datasets: [
        ...JAB.map(([k, n, c]) => ({ type: 'bar', label: n, data: TJ.map((r) => (persen ? +pc(r[TF[k]], tjN(r)).toFixed(1) : r[TF[k]])), backgroundColor: css(c), stack: 'j', order: 2, borderRadius: 2 })),
        { type: 'line', label: 'Berjabatan akademik', data: TJ.map((r) => +pc(tjN(r) - r.belum_berjabatan, tjN(r)).toFixed(1)), yAxisID: persen ? 'y' : 'y2', borderColor: css('--c-accent'), backgroundColor: css('--c-accent'), tension: .3, order: 1, pointRadius: 4 },
      ] },
      options: {
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: {
          label: (c) => (c.dataset.type === 'line' ? `${c.dataset.label}: ${pf(c.raw)}` : `${c.dataset.label}: ${persen ? pf(c.raw) : nf(c.raw)}`),
          footer: (it) => `Sumber: ${TJ[it[0].dataIndex].sumber}`,
        } } },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: persen ? { ...pctAxis(), stacked: true } : { stacked: true, title: { display: true, text: 'Jumlah dosen' }, grid: { color: css('--line') } },
          ...(persen ? {} : { y2: { position: 'right', min: 0, max: 100, ticks: { callback: (v) => `${v}%` }, grid: { display: false } } }),
        },
      },
    };
  });
  const first = TJ[0]; const dukRow = TJ.find((r) => r.sumber.startsWith('DUK')) || TJ[TJ.length - 1];
  const dRows = [...JAB.map(([k, n]) => [n, first[TF[k]], dukRow[TF[k]], false]),
    ['Berjabatan akademik', pc(tjN(first) - first.belum_berjabatan, tjN(first)), pc(tjN(dukRow) - dukRow.belum_berjabatan, tjN(dukRow)), true]];
  $('deltas').replaceChildren(...dRows.map(([n, a, b, isPct]) => {
    const d = b - a; const good = n === 'Belum berjabatan' ? d <= 0 : d >= 0;
    return el('div', { class: 'delta' }, el('span', {}, n), el('b', {}, isPct ? pf(b) : nf(b)),
      el('span', { class: `chg ${good ? 'up' : 'down'}` }, `${d > 0 ? '+' : ''}${isPct ? `${d.toFixed(1).replace('.', ',')} poin` : nf(d)}`));
  }), el('p', { class: 'note' }, `Perbandingan ${first.periode} dengan ${dukRow.periode}.`));
  table('tbl-tren-doktor', [
    { label: 'Periode', key: 'periode' }, { label: 'Dosen', align: 'r', render: (r) => nf(r.dosen) }, { label: 'Doktor', align: 'r', render: (r) => nf(r.doktor) },
    { label: 'Porsi', render: (r) => el('div', { class: 'barcell' }, pf(pc(r.doktor, r.dosen)), bar(pc(r.doktor, r.dosen), 100, [[50, '']], 'warn')) },
  ], D.tren.doktor);
  let tdKel = 'Status';
  seg('seg-tendik', [['Status', 'Status'], ['Pendidikan', 'Pendidikan'], ['Jabatan', 'Jabatan']], (v) => { tdKel = v; render('ch-tren-tendik'); });
  chart('ch-tren-tendik', () => {
    const rows = D.tren.tendik.filter((r) => r.kelompok === tdKel).sort((a, b) => a.urut - b.urut);
    const kats = [...new Set(rows.map((r) => r.kategori))];
    const get = (p) => kats.map((k) => (rows.find((r) => r.kategori === k && r.periode === p) || { jumlah: 0 }).jumlah);
    return {
      type: 'bar',
      data: { labels: kats, datasets: [
        { label: 'Januari 2025', data: get('Jan 2025'), backgroundColor: css('--c4'), borderRadius: 4 },
        { label: 'Oktober 2026', data: get('Okt 2026'), backgroundColor: css('--c1'), borderRadius: 4 },
      ] },
      options: { plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false } }, scales: { x: { grid: { display: false } } } },
    };
  });

  /* =================== 4. Fakultas =================== */
  const FS = D.fakultas.map((r) => ({ ...r, doktor_pct: pc(r.doktor, r.dosen), gblk_pct: pc(r.gb + r.lk, r.dosen) }));
  let selFak = FS[0].kode;
  const bkdLast = D.bkd.ringkas[D.bkd.ringkas.length - 1].semester;
  const drawFak = () => {
    const r = FS.find((x) => x.kode === selFak);
    const bk = D.bkd.fakultas.find((x) => x.semester === bkdLast && x.fakultas === r.kode);
    $('fak-detail').replaceChildren(
      el('div', { class: 'card-head' }, el('h2', {}, r.nama), el('span', { class: 'tag' }, r.kode)),
      el('p', { class: 'detail-sub' }, `${nf(r.dosen)} dosen tetap · ${r.tb} sedang tugas belajar`),
      el('div', { class: 'mini-grid' },
        el('div', { class: 'mini' }, el('b', {}, pf(r.doktor_pct)), el('span', {}, `doktor (${r.doktor} orang)`)),
        el('div', { class: 'mini' }, el('b', {}, pf(r.gblk_pct)), el('span', {}, `GB + LK (${r.gb + r.lk} orang)`)),
        el('div', { class: 'mini' }, el('b', {}, String(r.pensiun)), el('span', {}, 'pensiun Okt 2026–2029')),
        el('div', { class: 'mini' }, el('b', {}, bk ? pf(pc(bk.memenuhi, bk.dosen)) : '–'), el('span', {}, `memenuhi BKD ${bkdLast}`)),
      ),
      el('div', { class: 'chart-box' }, el('canvas', { id: 'ch-fak-detail' })),
      el('p', { class: 'note' }, `Calon Guru Besar: ${r.lk_s3} Lektor Kepala bergelar doktor. Calon Lektor Kepala: ${r.l_s3} Lektor bergelar doktor.`),
    );
    chart('ch-fak-detail', () => ({
      type: 'doughnut',
      data: { labels: JAB.map(([, n]) => n), datasets: [{ data: JAB.map(([k]) => r[k]), backgroundColor: JAB.map(([, , c]) => css(c)), borderColor: css('--panel'), borderWidth: 2 }] },
      options: { cutout: '60%', plugins: { legend: { position: 'right' }, tooltip: { callbacks: { label: (c) => `${c.label}: ${c.raw} (${pf(pc(c.raw, r.dosen))})` } } } },
    }));
    drawFakTable();
    if (charts['ch-fakultas']) render('ch-fakultas');
  };
  const drawFakTable = () => table('tbl-fakultas', [
    { label: 'Fakultas', key: 'kode', render: (r) => el('span', {}, el('b', {}, r.kode), el('span', { class: 'muted' }, ` ${r.nama.replace('Fakultas ', '')}`)) },
    { label: 'Dosen tetap', key: 'dosen', align: 'r', render: (r) => nf(r.dosen) },
    { label: 'Bergelar doktor', key: 'doktor_pct', render: (r) => el('div', { class: 'barcell' }, pf(r.doktor_pct), bar(r.doktor_pct, 100, [[50, '']], r.doktor_pct >= 50 ? '' : 'warn')) },
    { label: 'GB + LK', key: 'gblk_pct', render: (r) => el('div', { class: 'barcell' }, pf(r.gblk_pct), bar(r.gblk_pct, 100, [[30, '']], r.gblk_pct >= 30 ? '' : 'warn')) },
    { label: 'Guru Besar', key: 'gb', align: 'r' },
    { label: 'Lektor Kepala', key: 'lk', align: 'r' },
    { label: 'Belum berjabatan', key: 'tanpa', align: 'r' },
    { label: 'Tugas belajar', key: 'tb', align: 'r' },
    { label: 'Pensiun ≤ 2029', key: 'pensiun', align: 'r' },
  ], FS, { sortKey: 'dosen', onRow: (r) => { selFak = r.kode; drawFak(); }, selected: (r) => r.kode === selFak,
    total: ['UNJ', nf(K.dosen), pf(K.doktor_pct), pf(K.gblk_pct), String(K.gb), String(K.lk), String(K.tanpa_jabatan), String(FS.reduce((a, r) => a + r.tb, 0)), String(FS.reduce((a, r) => a + r.pensiun, 0))] });
  chart('ch-fakultas', () => ({
    type: 'bar',
    data: { labels: FS.map((r) => r.kode), datasets: [
      { label: 'Bergelar doktor', data: FS.map((r) => +r.doktor_pct.toFixed(1)), backgroundColor: FS.map((r) => (r.kode === selFak ? css('--c1') : css('--c3'))), borderRadius: 4 },
      { label: 'GB + LK', data: FS.map((r) => +r.gblk_pct.toFixed(1)), backgroundColor: FS.map((r) => (r.kode === selFak ? css('--c-accent') : css('--c4'))), borderRadius: 4 },
    ] },
    options: {
      onClick: (_e, els) => { if (els.length) { selFak = FS[els[0].index].kode; drawFak(); } },
      onHover: (e, els) => { e.native.target.style.cursor = els.length ? 'pointer' : 'default'; },
      plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false, callbacks: { title: (it) => FS[it[0].dataIndex].nama, label: (c) => `${c.dataset.label}: ${pf(c.raw)}` } },
        refLines: { lines: [{ axis: 'y', value: 50, label: 'Doktor unggul 50%', color: css('--c1') }, { axis: 'y', value: 30, label: 'GB + LK unggul 30%', color: css('--c-accent') }] } },
      scales: { x: { grid: { display: false } }, y: pctAxis(0, 70) },
    },
  }));
  drawFak();

  /* =================== 5. Jabatan =================== */
  let pembagi = 'semua';
  const jv = (r) => (pembagi === 'np' ? r.np : { gb: r.gb, lk: r.lk, l: r.l, aa: r.aa, tanpa: r.tanpa });
  const drawJab = () => {
    const V = pembagi === 'np' ? D.jabatan.tanpa_pppk : D.jabatan.semua;
    $('gblk').replaceChildren(
      el('div', { class: 'mini' }, el('b', {}, pf(pc(V.gb + V.lk, jt(V)), 2)), el('span', {}, `GB + LK · ${nf(V.gb + V.lk)} dari ${nf(jt(V))} · unggul ≥ 30%`)),
      el('div', { class: 'mini' }, el('b', {}, pf(pc(jt(V) - V.tanpa, jt(V)))), el('span', {}, `berjabatan akademik · syarat ≥ 90%`)),
    );
    table('tbl-jab-fak', [
      { label: 'Fakultas', key: 'kode', render: (r) => el('b', {}, r.kode) },
      { label: 'Dosen', key: 'n', align: 'r', sort: (r) => jt(jv(r)), render: (r) => nf(jt(jv(r))) },
      ...JAB.map(([k, n]) => ({ label: n, key: k, align: 'r', sort: (r) => pc(jv(r)[k], jt(jv(r))), render: (r) => pf(pc(jv(r)[k], jt(jv(r)))) })),
      { label: 'GB + LK', key: 'gblk', align: 'r', sort: (r) => pc(jv(r).gb + jv(r).lk, jt(jv(r))), render: (r) => el('b', {}, pf(pc(jv(r).gb + jv(r).lk, jt(jv(r))))) },
    ], FS, { sortKey: 'gblk' });
    render('ch-jabatan');
    render('ch-jab-fak');
  };
  builders['ch-jabatan'] = () => {
    const V = pembagi === 'np' ? D.jabatan.tanpa_pppk : D.jabatan.semua;
    return {
      type: 'doughnut',
      data: { labels: JAB.map(([, n]) => n), datasets: [{ data: JAB.map(([k]) => V[k]), backgroundColor: JAB.map(([, , c]) => css(c)), borderColor: css('--panel'), borderWidth: 3 }] },
      options: { cutout: '58%', plugins: { legend: { position: 'right' }, tooltip: { callbacks: { label: (c) => `${c.label}: ${nf(c.raw)} (${pf(pc(c.raw, jt(V)))})` } } } },
    };
  };
  builders['ch-jab-fak'] = () => ({
    type: 'bar',
    data: { labels: FS.map((r) => r.kode), datasets: JAB.map(([k, n, c]) => ({ label: n, data: FS.map((r) => +pc(jv(r)[k], jt(jv(r))).toFixed(1)), backgroundColor: css(c), stack: 's' })) },
    options: { indexAxis: 'y', plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false, callbacks: { label: (c) => `${c.dataset.label}: ${pf(c.raw)}` } } },
      scales: { x: { ...pctAxis(), stacked: true }, y: { stacked: true, grid: { display: false } } } },
  });
  seg('seg-pembagi', [['semua', 'Semua dosen'], ['np', 'Tanpa PPPK']], (v) => { pembagi = v; drawJab(); });
  drawJab();

  /* =================== 6. Program doktor =================== */
  const DK = D.doktor.map((r) => ({ ...r, nama: `S3 ${r.prodi}`, pct: pc(r.guru_besar, r.dosen_tetap) }));
  $('doktor-kpis').replaceChildren(
    el('div', { class: 'mini' }, el('b', {}, `${DK.filter((r) => r.guru_besar >= 2).length}/${DK.length}`), el('span', {}, 'program memiliki minimal 2 GB')),
    el('div', { class: 'mini' }, el('b', {}, `${DK.filter((r) => r.pct >= 50).length}/${DK.length}`), el('span', {}, 'program dengan porsi GB ≥ 50%')),
  );
  table('tbl-doktor', [
    { label: 'Program doktor', key: 'nama' }, { label: 'Dosen', key: 'dosen_tetap', align: 'r' }, { label: 'GB', key: 'guru_besar', align: 'r' },
    { label: 'Porsi GB', key: 'pct', align: 'r', render: (r) => el('span', { class: 'pill ' + (r.pct >= 50 ? 'ok' : 'bad') }, pf(r.pct)) },
  ], DK, { sortKey: 'pct', sortDir: 1 });
  chart('ch-doktor', () => {
    const rs = [...DK].sort((a, b) => b.pct - a.pct);
    return {
      type: 'bar',
      data: { labels: rs.map((r) => r.prodi), datasets: [{ label: 'Porsi Guru Besar', data: rs.map((r) => +r.pct.toFixed(1)), backgroundColor: rs.map((r) => (r.pct >= 50 ? css('--c1') : css('--warn'))), borderRadius: 4 }] },
      options: { indexAxis: 'y', plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${pf(c.raw)} · ${rs[c.dataIndex].guru_besar} GB dari ${rs[c.dataIndex].dosen_tetap} dosen` } },
        refLines: { lines: [{ axis: 'x', value: 50, label: '50%', color: css('--ink') }] } },
        scales: { x: pctAxis(), y: { grid: { display: false } } } },
    };
  });

  /* =================== 7. BKD =================== */
  const R = D.bkd.ringkas;
  const sel = $('sel-sem');
  sel.replaceChildren(...R.map((r) => el('option', { value: r.semester }, `Semester ${r.semester}`)));
  sel.value = R[R.length - 1].semester;
  const drawSem = () => {
    const s = sel.value; const r = R.find((x) => x.semester === s);
    $('bkd-kpis').replaceChildren(
      el('div', { class: 'mini' }, el('b', {}, pf(pc(r.memenuhi, r.dosen))), el('span', {}, `${nf(r.memenuhi)} dari ${nf(r.dosen)} dosen memenuhi BKD`)),
      el('div', { class: 'mini' }, el('b', {}, nf(r.tidak_memenuhi)), el('span', {}, 'dosen tidak memenuhi')),
      el('div', { class: 'mini' }, el('b', {}, pf(pc(r.profesor_kk, r.profesor))), el('span', {}, `kewajiban khusus profesor (${r.profesor_kk} dari ${r.profesor})`)),
    );
    const sb = D.bkd.sebab.filter((x) => x.semester === s).sort((a, b) => a.urut - b.urut);
    table('tbl-bkd-sebab', [{ label: 'Sebab', key: 'sebab' }, { label: 'Dosen', key: 'jumlah', align: 'r' }], sb.length ? sb : [{ sebab: 'Tidak ada dosen yang tidak memenuhi', jumlah: 0 }]);
    render('ch-bkd'); render('ch-bkd-fak'); render('ch-bkd-komp');
  };
  builders['ch-bkd'] = () => ({
    type: 'line',
    data: { labels: R.map((r) => r.semester.replace('/20', '/')), datasets: [{ label: 'Memenuhi BKD', data: R.map((r) => +pc(r.memenuhi, r.dosen).toFixed(1)), borderColor: css('--c1'), backgroundColor: css('--c1'),
      pointRadius: R.map((r) => (r.semester === sel.value ? 7 : 4)), pointBackgroundColor: R.map((r) => (r.semester === sel.value ? css('--c-accent') : css('--c1'))), tension: .3, fill: false }] },
    options: { onClick: (_e, els) => { if (els.length) { sel.value = R[els[0].index].semester; drawSem(); } },
      onHover: (e, els) => { e.native.target.style.cursor = els.length ? 'pointer' : 'default'; },
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `Memenuhi ${pf(c.raw)} (${nf(R[c.dataIndex].memenuhi)} dari ${nf(R[c.dataIndex].dosen)})` } } },
      scales: { x: { grid: { display: false } }, y: pctAxis(85, 100) } },
  });
  builders['ch-bkd-fak'] = () => {
    const rs = D.bkd.fakultas.filter((x) => x.semester === sel.value && x.fakultas !== 'Tidak terpetakan').map((x) => ({ ...x, p: pc(x.memenuhi, x.dosen) })).sort((a, b) => b.p - a.p);
    return {
      type: 'bar',
      data: { labels: rs.map((x) => x.fakultas), datasets: [{ label: 'Memenuhi', data: rs.map((x) => +x.p.toFixed(1)), backgroundColor: rs.map((x) => (x.p >= 97 ? css('--c1') : css('--warn'))), borderRadius: 4 }] },
      options: { indexAxis: 'y', plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${pf(c.raw)} · ${rs[c.dataIndex].tidak_memenuhi} tidak memenuhi dari ${rs[c.dataIndex].dosen}` } } },
        scales: { x: pctAxis(80, 100), y: { grid: { display: false } } } },
    };
  };
  builders['ch-bkd-komp'] = () => {
    const rs = D.bkd.komposisi.filter((x) => x.semester === sel.value);
    const parts = [['Pendidikan', 'pendidikan', '--c1'], ['Penelitian', 'penelitian', '--c-accent'], ['Pengabdian', 'pengabdian', '--c3'], ['Penunjang', 'penunjang', '--c5']];
    return {
      type: 'bar',
      data: { labels: rs.map((x) => x.kelompok.replace('Dosen dengan tugas tambahan', 'Tugas tambahan').replace('Dosen tanpa tugas tambahan', 'Tanpa tugas tambahan').replace('Seluruh dosen yang dinilai', 'Seluruh dosen')),
        datasets: parts.map(([l, k, c]) => ({ label: l, data: rs.map((x) => x[k]), backgroundColor: css(c), stack: 's' })) },
      options: { indexAxis: 'y', plugins: { legend: { position: 'bottom' }, tooltip: { mode: 'index', intersect: false, callbacks: { label: (c) => `${c.dataset.label}: ${String(c.raw).replace('.', ',')} SKS`, footer: (it) => `Dosen: ${nf(rs[it[0].dataIndex].dosen)}` } } },
        scales: { x: { stacked: true, title: { display: true, text: 'Median SKS' } }, y: { stacked: true, grid: { display: false } } } },
    };
  };
  sel.addEventListener('change', drawSem);
  drawSem();

  /* =================== 8. Tendik =================== */
  const T = D.tendik;
  const tg = (kel) => T.filter((r) => r.kelompok === kel && r.jumlah > 0).sort((a, b) => a.urut - b.urut);
  const tn = tg('Pendidikan').reduce((a, r) => a + r.jumlah, 0);
  $('tendik-kpis').replaceChildren(...[
    ['Tenaga kependidikan', nf(K.tendik), 'tetap dan tidak tetap', 'mute'],
    ['Berkualifikasi S1', pf(K.tendik_s1_pct), 'target Renstra 2026: 49%', 'ok'],
    ['Berkualifikasi S2 ke atas', pf(K.tendik_s2_pct), 'target Renstra 2026: 8%', 'warn'],
    ['Jabatan fungsional tertentu', pf(pc(K.tendik_jft, tn)), `${K.tendik_jft} orang`, 'mute'],
  ].map(([l, v, s, t]) => el('button', { type: 'button', class: 'kpi', onclick: () => { location.hash = 'tren'; } },
    el('span', { class: 'kpi-top' }, el('span', { class: 'kpi-label' }, l), el('i', { class: `dot ${t}` })), el('span', { class: 'kpi-num' }, v), el('span', { class: 'kpi-sub' }, s))));
  const donut = (id, kel) => chart(id, () => {
    const rs = tg(kel);
    const pal = ['--c1', '--c2', '--c3', '--c-accent', '--c4', '--c5', '--muted'];
    return {
      type: 'doughnut',
      data: { labels: rs.map((r) => r.kategori), datasets: [{ data: rs.map((r) => r.jumlah), backgroundColor: rs.map((_, i) => css(pal[i % pal.length])), borderColor: css('--panel'), borderWidth: 2 }] },
      options: { cutout: '55%', plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: (c) => `${c.label}: ${nf(c.raw)} (${pf(pc(c.raw, tn))})` } } } },
    };
  });
  donut('ch-t-pend', 'Pendidikan');
  donut('ch-t-status', 'Status');
  donut('ch-t-jab', 'Jabatan');

  /* =================== 9. Sumber =================== */
  $('sources').replaceChildren(...D.meta.sumber.map((s) => el('li', {}, s)));

  show(location.hash.slice(1));
})();
