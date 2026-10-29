/* Dashboard profil SDM UNJ: membaca window.SDM_DATA (data/data.js) dan menggambar seluruh bagian. */
(() => {
  const D = window.SDM_DATA;
  const $ = (id) => document.getElementById(id);
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const nf = (x) => Number(x).toLocaleString('id-ID');
  const pf = (x, d = 1) => `${Number(x).toFixed(d).replace('.', ',')}%`;
  const pc = (x, n) => (n ? (100 * x) / n : 0);
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') e.className = v;
      else if (k === 'style') e.setAttribute('style', v);
      else e.setAttribute(k, v);
    });
    kids.flat().forEach((k) => e.append(k instanceof Node ? k : document.createTextNode(k ?? '')));
    return e;
  };
  const pill = (text) => {
    const tone = /^Memenuhi/.test(text) ? 'ok' : /Belum memenuhi|Tidak memenuhi/.test(text) ? 'bad' : /Tidak ada ambang|Belum ada data/.test(text) ? 'mute' : 'warn';
    return el('span', { class: `pill ${tone}` }, text);
  };
  const bar = (value, max = 100, marks = [], tone = '') => {
    const b = el('div', { class: 'bar' }, el('span', { class: tone, style: `width:${Math.min(100, (value / max) * 100)}%` }));
    marks.forEach(([v, cls]) => b.append(el('i', { class: cls || '', style: `left:calc(${(v / max) * 100}% - 1px)` })));
    return b;
  };
  const table = (id, head, rows, alignRight = []) => {
    const t = $(id);
    t.replaceChildren(
      el('thead', {}, el('tr', {}, head.map((h, i) => el('th', { class: alignRight.includes(i) ? 'r' : '' }, h)))),
      el('tbody', {}, rows.map((r) => {
        const cls = r._class || '';
        const cells = r._cells || r;
        return el('tr', { class: cls }, cells.map((c, i) => el('td', { class: alignRight.includes(i) ? 'r' : '' }, c)));
      })),
    );
  };
  const JAB = [['gb', 'Guru Besar', '--j-gb'], ['lk', 'Lektor Kepala', '--j-lk'], ['l', 'Lektor', '--j-l'], ['aa', 'Asisten Ahli', '--j-aa'], ['tanpa', 'Belum berjabatan', '--j-tanpa']];
  const stack = (vals, thin) => {
    const s = el('div', { class: `stack${thin ? ' thin' : ''}`, role: 'img' });
    const total = JAB.reduce((a, [k]) => a + vals[k], 0);
    s.setAttribute('aria-label', JAB.map(([k, n]) => `${n} ${pf(pc(vals[k], total))}`).join(', '));
    JAB.forEach(([k, n, c]) => { if (vals[k]) s.append(el('span', { style: `flex:${vals[k]};background:var(${c})`, title: `${n}: ${nf(vals[k])} (${pf(pc(vals[k], total))})` })); });
    return s;
  };
  const seg = (id, options, onChange) => {
    const box = $(id);
    let cur = options[0][0];
    const draw = () => box.replaceChildren(...options.map(([v, label]) => {
      const b = el('button', { type: 'button', role: 'tab', 'aria-selected': String(v === cur) }, label);
      b.addEventListener('click', () => { cur = v; draw(); onChange(v); });
      return b;
    }));
    draw();
    onChange(cur);
  };

  if (!D) { $('lead').textContent = 'Data tidak dapat dimuat.'; return; }
  const K = D.kpi;
  $('asof').textContent = `Data per ${D.meta.diperbarui}`;

  // Ringkasan
  $('lead').replaceChildren(
    'Universitas Negeri Jakarta memiliki ', el('b', {}, `${nf(K.dosen)} dosen tetap`), ' dan ', el('b', {}, `${nf(K.tendik)} tenaga kependidikan`), '. ',
    'Sebanyak ', el('b', {}, pf(K.doktor_pct)), ' dosen tetap bergelar doktor dan ', el('b', {}, pf(K.gblk_pct)), ' berjabatan Guru Besar atau Lektor Kepala. ',
    'Proporsi dosen berjabatan akademik ', el('b', {}, pf(K.ja_pct)), ` karena ${K.cpns25} dosen CPNS angkatan 2025 belum memperoleh jabatan pertama. `,
    'Dosen yang memenuhi BKD naik dari ', el('b', {}, pf(K.bkd_awal_pct)), ` pada ${K.bkd_awal_sem} menjadi `, el('b', {}, pf(K.bkd_pct)), ` pada ${K.bkd_sem}.`,
  );
  const kpis = [
    ['Dosen tetap', nf(K.dosen), 'PNS, PPPK, dan tetap PTNBH'],
    ['Bergelar doktor', pf(K.doktor_pct), `${nf(K.doktor)} dosen · syarat unggul 50%`],
    ['Guru Besar + Lektor Kepala', pf(K.gblk_pct), `${K.gb} GB dan ${K.lk} LK · syarat unggul 30%`],
    ['Berjabatan akademik', pf(K.ja_pct), `${K.tanpa_jabatan} belum berjabatan · syarat 90%`],
    ['Memenuhi BKD', pf(K.bkd_pct), `Semester ${K.bkd_sem}`],
    ['Tenaga kependidikan', nf(K.tendik), `S1 ${pf(K.tendik_s1_pct)} · S2 ke atas ${pf(K.tendik_s2_pct)}`],
  ];
  $('kpis').replaceChildren(...kpis.map(([l, n, s]) => el('div', { class: 'kpi' }, el('span', { class: 'kpi-label' }, l), el('span', { class: 'kpi-num' }, n), el('span', { class: 'kpi-sub' }, s))));

  // Indikator
  table('tbl-indikator', ['Indikator', 'Capaian UNJ', 'Terakreditasi', 'Unggul', 'Syarat terakreditasi', 'Syarat unggul', 'LKPT'],
    D.indikator.map((r) => [el('b', {}, r.indikator), el('span', { class: 'wrapcell' }, r.capaian), pill(r.status_terakreditasi), pill(r.status_unggul),
      el('span', { class: 'muted' }, r.ambang_terakreditasi), el('span', { class: 'muted' }, r.ambang_unggul), el('span', { class: 'muted' }, r.tabel_lkpt)]));

  // Renstra
  const rb = $('renstra-bars');
  rb.replaceChildren(...D.renstra.map((r) => {
    const t26 = r.target['2026'];
    const t29 = r.target['2029'];
    const max = Math.max(60, Math.ceil((Math.max(r.capaian, t29) + 5) / 10) * 10);
    const ok = r.capaian >= t26;
    return el('div', { class: 'prog' },
      el('div', { class: 'prog-name' }, r.indikator, el('small', {}, `${r.rujukan} · target 2026 ${t26}% · 2029 ${t29}%`)),
      bar(r.capaian, max, [[t26, ''], [t29, 't29']], ok ? '' : 'warn'),
      el('div', { class: 'prog-val' }, pf(r.capaian), el('small', {}, ok ? 'Memenuhi target 2026' : `Kurang ${pf(t26 - r.capaian)} poin`)));
  }), el('div', { class: 'prog-legend' }, el('span', {}, el('i'), 'Target 2026'), el('span', {}, el('i', { class: 't29' }), 'Target 2029')));
  table('tbl-kebutuhan', ['Tahun', 'Tambahan doktor', 'Tambahan Guru Besar', 'Tambahan Lektor Kepala'],
    D.kebutuhan.map((r) => [String(r.tahun), `+${r.s3}`, `+${r.gb}`, `+${r.lk}`]), [1, 2, 3]);

  // Grafik
  const charts = [];
  const baseOpts = () => ({
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { labels: { color: css('--muted'), boxWidth: 12, font: { family: css('--font') } } }, tooltip: { mode: 'index', intersect: false } },
    scales: {
      x: { ticks: { color: css('--muted') }, grid: { display: false } },
      y: { ticks: { color: css('--muted') }, grid: { color: css('--line') } },
    },
  });
  const chart = (id, cfg) => { if (!window.Chart) return null; const c = new Chart($(id), cfg); charts.push(c); return c; };

  chart('ch-pensiun', {
    type: 'bar',
    data: { labels: D.pensiun.map((r) => r.label), datasets: [
      { label: 'Dosen tetap', data: D.pensiun.map((r) => r.dosen), backgroundColor: css('--j-gb') },
      { label: 'Guru Besar', data: D.pensiun.map((r) => r.guru_besar), backgroundColor: css('--j-l') },
      { label: 'Tendik tetap', data: D.pensiun.map((r) => r.tendik_tetap), backgroundColor: css('--accent') },
    ] },
    options: baseOpts(),
  });

  const tj = D.tren.jabatan;
  const jaPct = tj.map((r) => { const n = r.guru_besar + r.lektor_kepala + r.lektor + r.asisten_ahli + r.belum_berjabatan; return +(pc(n - r.belum_berjabatan, n)).toFixed(1); });
  const gblkPct = tj.map((r) => { const n = r.guru_besar + r.lektor_kepala + r.lektor + r.asisten_ahli + r.belum_berjabatan; return +(pc(r.guru_besar + r.lektor_kepala, n)).toFixed(1); });
  const trenOpts = baseOpts();
  trenOpts.scales.x.stacked = true;
  trenOpts.scales.y.stacked = true;
  trenOpts.scales.y.title = { display: true, text: 'Jumlah dosen', color: css('--muted') };
  trenOpts.scales.y2 = { position: 'right', min: 0, max: 100, ticks: { color: css('--muted'), callback: (v) => `${v}%` }, grid: { display: false } };
  trenOpts.plugins.tooltip.callbacks = { footer: (items) => `Sumber: ${tj[items[0].dataIndex].sumber}` };
  const F = { gb: 'guru_besar', lk: 'lektor_kepala', l: 'lektor', aa: 'asisten_ahli', tanpa: 'belum_berjabatan' };
  chart('ch-tren', {
    data: { labels: tj.map((r) => r.periode), datasets: [
      ...JAB.map(([k, n, c]) => ({ type: 'bar', label: n, data: tj.map((r) => r[F[k]]), backgroundColor: css(c), stack: 'j', order: 2 })),
      { type: 'line', label: 'Berjabatan akademik (%)', data: jaPct, yAxisID: 'y2', borderColor: css('--accent'), backgroundColor: css('--accent'), tension: .25, order: 1 },
      { type: 'line', label: 'GB + LK (%)', data: gblkPct, yAxisID: 'y2', borderColor: css('--ink'), backgroundColor: css('--ink'), borderDash: [4, 3], tension: .25, order: 1 },
    ] },
    options: trenOpts,
  });
  table('tbl-tren-doktor', ['Periode', 'Dosen tetap', 'Doktor', 'Porsi doktor'],
    D.tren.doktor.map((r) => [r.periode, nf(r.dosen), nf(r.doktor), el('div', { class: 'barcell' }, pf(pc(r.doktor, r.dosen)), bar(pc(r.doktor, r.dosen), 100, [[50, '']], 'warn'))]), [1, 2]);

  let chTendik = null;
  seg('seg-tendik', [['Status', 'Status'], ['Pendidikan', 'Pendidikan'], ['Jabatan', 'Jabatan']], (kel) => {
    const rows = D.tren.tendik.filter((r) => r.kelompok === kel);
    const kats = [...new Set(rows.sort((a, b) => a.urut - b.urut).map((r) => r.kategori))];
    const get = (per) => kats.map((k) => (rows.find((r) => r.kategori === k && r.periode === per) || { jumlah: 0 }).jumlah);
    if (chTendik) chTendik.destroy();
    const opt = baseOpts();
    opt.indexAxis = 'y';
    opt.scales = { x: { ticks: { color: css('--muted') }, grid: { color: css('--line') } }, y: { ticks: { color: css('--muted') }, grid: { display: false } } };
    chTendik = chart('ch-tren-tendik', { type: 'bar', data: { labels: kats, datasets: [
      { label: 'Januari 2025', data: get('Jan 2025'), backgroundColor: css('--j-aa') },
      { label: 'Oktober 2026', data: get('Okt 2026'), backgroundColor: css('--brand') },
    ] }, options: opt });
  });

  // Fakultas
  const fs = D.fakultas;
  const tot = (k) => fs.reduce((a, r) => a + r[k], 0);
  table('tbl-fakultas', ['Fakultas', 'Dosen tetap', 'Bergelar doktor', 'Guru Besar + Lektor Kepala', 'Guru Besar', 'Lektor Kepala', 'Tugas belajar'],
    [...fs.map((r) => {
      const d = pc(r.doktor, r.dosen);
      const g = pc(r.gb + r.lk, r.dosen);
      return [el('span', { title: r.nama }, el('b', {}, r.kode), el('span', { class: 'muted' }, ` ${r.nama.replace('Fakultas ', '')}`)), nf(r.dosen),
        el('div', { class: 'barcell' }, pf(d), bar(d, 100, [[50, '']], d >= 50 ? '' : 'warn')),
        el('div', { class: 'barcell' }, pf(g), bar(g, 100, [[30, '']], g >= 30 ? '' : 'warn')), String(r.gb), String(r.lk), String(r.tb)];
    }), { _class: 'total', _cells: ['UNJ', nf(K.dosen), pf(K.doktor_pct), pf(K.gblk_pct), String(K.gb), String(K.lk), String(tot('tb'))] }], [1, 4, 5, 6]);

  // Jabatan
  const J = D.jabatan;
  const jt = (v) => JAB.reduce((a, [k]) => a + v[k], 0);
  $('stacks-unj').replaceChildren(...[['Semua dosen tetap', J.semua], ['Tanpa dosen PPPK', J.tanpa_pppk]].map(([lab, v]) => {
    const n = jt(v);
    return el('div', { class: 'stack-row' }, el('b', {}, lab), stack(v), el('small', {}, `${nf(n)} dosen · GB + LK ${pf(pc(v.gb + v.lk, n), 2)}`));
  }));
  $('legend-jab').replaceChildren(...JAB.map(([k, n, c]) => el('span', {}, el('i', { style: `background:var(${c})` }), `${n} `, el('b', {}, `${pf(pc(J.semua[k], jt(J.semua)))} · ${pf(pc(J.tanpa_pppk[k], jt(J.tanpa_pppk)))}`))));
  seg('seg-pembagi', [['semua', 'Semua dosen tetap'], ['np', 'Tanpa PPPK']], (mode) => {
    table('tbl-jab-fak', ['Fakultas', 'Dosen', 'Sebaran', 'GB', 'LK', 'Lektor', 'AA', 'Belum berjabatan'], fs.map((r) => {
      const v = mode === 'np' ? r.np : { gb: r.gb, lk: r.lk, l: r.l, aa: r.aa, tanpa: r.tanpa };
      const n = jt(v);
      return [el('b', {}, r.kode), nf(n), stack(v, true), ...JAB.map(([k]) => pf(pc(v[k], n)))];
    }), [1, 3, 4, 5, 6, 7]);
  });

  // Program doktor
  table('tbl-doktor', ['Program doktor', 'Dosen tetap', 'Guru Besar', 'Porsi Guru Besar', 'Minimal 2 GB', 'Porsi 50% (unggul)'],
    D.doktor.map((r) => {
      const p = pc(r.guru_besar, r.dosen_tetap);
      return [`S3 ${r.prodi}`, String(r.dosen_tetap), String(r.guru_besar), el('div', { class: 'barcell' }, pf(p), bar(p, 100, [[50, '']], p >= 50 ? '' : 'warn')),
        pill(r.guru_besar >= 2 ? 'Memenuhi' : 'Belum memenuhi'), pill(p >= 50 ? 'Memenuhi' : 'Belum memenuhi')];
    }), [1, 2]);

  // BKD
  const R = D.bkd.ringkas;
  const bOpts = baseOpts();
  bOpts.scales.y.min = 85;
  bOpts.scales.y.max = 100;
  bOpts.scales.y.ticks.callback = (v) => `${v}%`;
  bOpts.plugins.legend.display = false;
  bOpts.plugins.tooltip.callbacks = { label: (c) => `Memenuhi ${pf(c.raw)} (${nf(R[c.dataIndex].memenuhi)} dari ${nf(R[c.dataIndex].dosen)})` };
  chart('ch-bkd', { type: 'line', data: { labels: R.map((r) => r.semester.replace('/20', '/')), datasets: [
    { data: R.map((r) => +pc(r.memenuhi, r.dosen).toFixed(1)), borderColor: css('--brand'), backgroundColor: css('--brand'), pointRadius: 4, tension: .25, fill: false },
  ] }, options: bOpts });
  const sel = $('sel-sem');
  sel.replaceChildren(...R.map((r) => el('option', { value: r.semester }, `Semester ${r.semester}`)));
  sel.value = R[R.length - 1].semester;
  const drawSem = () => {
    const s = sel.value;
    const r = R.find((x) => x.semester === s);
    $('bkd-kpis').replaceChildren(
      el('div', { class: 'mini' }, el('b', {}, pf(pc(r.memenuhi, r.dosen))), el('span', {}, `${nf(r.memenuhi)} dari ${nf(r.dosen)} dosen memenuhi`)),
      el('div', { class: 'mini' }, el('b', {}, nf(r.tidak_memenuhi)), el('span', {}, 'tidak memenuhi')),
      el('div', { class: 'mini' }, el('b', {}, pf(pc(r.profesor_kk, r.profesor))), el('span', {}, `kewajiban khusus profesor (${r.profesor_kk} dari ${r.profesor})`)),
    );
    table('tbl-bkd-fak', ['Fakultas', 'Dosen', 'Memenuhi', 'Tidak memenuhi'],
      D.bkd.fakultas.filter((x) => x.semester === s && x.fakultas !== 'Tidak terpetakan').map((x) => {
        const p = pc(x.memenuhi, x.dosen);
        return [el('b', {}, x.fakultas), nf(x.dosen), el('div', { class: 'barcell' }, pf(p), bar(p, 100, [], p >= 97 ? '' : 'warn')), String(x.tidak_memenuhi)];
      }), [1, 3]);
    const sks = (v) => (v == null ? '–' : String(Math.round(v * 100) / 100).replace('.', ','));
    table('tbl-bkd-komp', ['Kelompok', 'Dosen', 'Pendidikan', 'Penelitian', 'Pengabdian', 'Penunjang', 'Total'],
      D.bkd.komposisi.filter((x) => x.semester === s).map((x) => [x.kelompok, nf(x.dosen), sks(x.pendidikan), sks(x.penelitian), sks(x.pengabdian), sks(x.penunjang), sks(x.kinerja)]), [1, 2, 3, 4, 5, 6]);
    const sb = D.bkd.sebab.filter((x) => x.semester === s).sort((a, b) => a.urut - b.urut);
    table('tbl-bkd-sebab', ['Sebab', 'Dosen'], sb.length ? sb.map((x) => [x.sebab, String(x.jumlah)]) : [['Tidak ada dosen yang tidak memenuhi', '0']], [1]);
  };
  sel.addEventListener('change', drawSem);
  drawSem();

  // Tendik
  const T = D.tendik;
  const tg = (kel) => T.filter((r) => r.kelompok === kel && r.jumlah > 0).sort((a, b) => a.urut - b.urut);
  const tn = tg('Pendidikan').reduce((a, r) => a + r.jumlah, 0);
  $('tendik-kpis').replaceChildren(
    el('div', { class: 'mini' }, el('b', {}, nf(K.tendik)), el('span', {}, 'tenaga kependidikan, tetap dan tidak tetap')),
    el('div', { class: 'mini' }, el('b', {}, pf(K.tendik_s1_pct)), el('span', {}, 'berkualifikasi S1 · target Renstra 2026: 49%')),
    el('div', { class: 'mini' }, el('b', {}, pf(K.tendik_s2_pct)), el('span', {}, 'berkualifikasi S2 ke atas · target 2026: 8%')),
    el('div', { class: 'mini' }, el('b', {}, pf(pc(K.tendik_jft, tn))), el('span', {}, `jabatan fungsional tertentu (${K.tendik_jft} orang)`)),
  );
  const hbars = (id, rows) => {
    const max = Math.max(...rows.map((r) => r.jumlah), 1);
    $(id).replaceChildren(...rows.map((r) => el('div', { class: 'hbar' }, el('span', {}, r.kategori), bar(r.jumlah, max), el('span', { class: 'v' }, `${nf(r.jumlah)} (${pf(pc(r.jumlah, tn))})`))));
  };
  hbars('hb-pend', tg('Pendidikan'));
  hbars('hb-status', tg('Status'));

  // Sumber
  $('sources').replaceChildren(...D.meta.sumber.map((s) => el('li', {}, s)));

  // Halaman: satu bagian per halaman, dipilih lewat menu, tombol, atau tombol panah
  const links = [...document.querySelectorAll('.nav a')];
  const sections = [...document.querySelectorAll('main .page')];
  const pages = [...new Set(sections.map((s) => s.dataset.page))];
  const titles = Object.fromEntries(sections.filter((s) => s.dataset.title).map((s) => [s.dataset.page, s.dataset.title]));
  const pager = $('pager');
  const pageLink = (p, cls, dir) => el('a', { href: `#${p}`, class: cls },
    el('small', {}, dir === 'prev' ? '← Sebelumnya' : 'Berikutnya →'), el('b', {}, titles[p]));
  let current = null;
  const show = (page, scroll = true) => {
    if (!pages.includes(page)) page = pages[0];
    if (page === current) return;
    current = page;
    sections.forEach((s) => s.classList.toggle('active', s.dataset.page === page));
    links.forEach((a) => {
      const on = a.getAttribute('href') === `#${page}`;
      a.classList.toggle('on', on);
      if (on) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center' }); } else a.removeAttribute('aria-current');
    });
    const i = pages.indexOf(page);
    pager.replaceChildren(
      i > 0 ? pageLink(pages[i - 1], 'prev', 'prev') : el('span'),
      el('span', { class: 'count' }, `Halaman ${i + 1} dari ${pages.length}`, el('span', { class: 'hint' }, 'Tombol panah ← → untuk berpindah')),
      i < pages.length - 1 ? pageLink(pages[i + 1], 'next', 'next') : el('span'),
    );
    document.title = `${titles[page]} · Profil SDM Universitas Negeri Jakarta`;
    if (scroll) window.scrollTo({ top: 0 });
    requestAnimationFrame(() => charts.forEach((c) => c.resize()));
  };
  const fromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const sec = id && document.getElementById(id);
    show(sec && sec.dataset.page ? sec.dataset.page : pages[0]);
  };
  window.addEventListener('hashchange', fromHash);
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    const i = pages.indexOf(current);
    if (e.key === 'ArrowRight' && i < pages.length - 1) location.hash = pages[i + 1];
    if (e.key === 'ArrowLeft' && i > 0) location.hash = pages[i - 1];
  });
  fromHash();

  // Warna grafik mengikuti tema sistem
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => location.reload());
})();
