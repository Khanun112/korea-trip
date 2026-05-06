// ============================================================
// app.js — render engine สำหรับตารางทริป
// ไม่ต้องแก้ไขไฟล์นี้ · แก้ข้อมูลที่ data.js
// ============================================================

(function () {
  const tabBar = document.getElementById('tabs');
  const panels = document.getElementById('panels');

  // ── helpers ──────────────────────────────────────────────
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function mapBtn(name, mapKey) {
    const key = mapKey || name;
    const url = mapsUrl(key);
    return `<a class="map-btn" href="${url}" target="_blank" rel="noopener" title="เปิดแผนที่: ${name}">📍</a>`;
  }

  function tagHtml(tags) {
    return tags.map(t => `<span class="tag ${t}">${labelOf(t)}</span>`).join('');
  }

  function labelOf(t) {
    return { history:'ประวัติศาสตร์', protest:'ชุมนุม', culture:'วัฒนธรรม',
             transit:'transit', food:'อาหาร', nk:'DMZ/NK', conf:'conf',
             speaker:'🎙️ SPEAKER' }[t] || t;
  }

  // ── table builder ─────────────────────────────────────────
  function buildTable(rows) {
    const tbl = el('table','tbl');
    tbl.innerHTML = `<thead><tr>
      <th>เวลา</th><th>สถานที่ / กิจกรรม</th>
      <th title="เปิดแผนที่">📍</th>
      <th title="เช็คลิสต์">✓</th>
      <th>ใช้จ่าย</th>
      <th>โน้ต</th>
    </tr></thead>`;
    const tbody = el('tbody');
    rows.forEach(r => {
      const tr = el('tr');
      // time
      const tdT = el('td', `tc-time ${r.tc}`); tdT.textContent = r.time;
      // name+note+tags
      const tdN = el('td','tc-name', `
        <div class="slot-name">${r.name}</div>
        ${r.note ? `<div class="slot-note">${r.note}</div>` : ''}
        <div class="tags">${tagHtml(r.tags)}</div>
      `);
      // map
      const tdM = el('td','tc-map');
      if (r.mapKey !== null) {
        tdM.innerHTML = mapBtn(r.name, r.mapKey);
      }
      // check
      const tdC = el('td','tc-check');
      const cb = el('input'); cb.type = 'checkbox';
      tdC.appendChild(cb);
      // spend
      const tdS = el('td','tc-spend');
      const si = el('input','spend-in'); si.type = 'text'; si.placeholder = '₩ / ฿';
      tdS.appendChild(si);
      // note
      const tdNo = el('td','tc-note');
      const ta = el('textarea','note-in'); ta.rows = 2; ta.placeholder = 'โน้ต…';
      tdNo.appendChild(ta);

      tr.append(tdT, tdN, tdM, tdC, tdS, tdNo);
      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    return tbl;
  }

  // ── hotel card ────────────────────────────────────────────
  function buildHotel(h) {
    const d = el('div', 'hotel-card' + (h.highlight ? ' highlight' : ''));
    d.innerHTML = `<h4>${h.title}</h4><p>${h.body}</p>`;
    return d;
  }

  // ── section label ─────────────────────────────────────────
  function buildSecLabel(txt) {
    const d = el('div','sec-label'); d.textContent = txt; return d;
  }

  // ── day footer ────────────────────────────────────────────
  function buildFooter(gwangju) {
    const d = el('div','day-footer');
    d.innerHTML = `<span>${gwangju ? '🏨 UTOP Boutique — กวางจู' : '🏨 โรงแรม — ฮงแด'}</span>
                   <span style="color:var(--text3)">เติมค่าใช้จ่าย + โน้ตได้ทุก slot</span>`;
    return d;
  }

  // ── main render ───────────────────────────────────────────
  window.DAYS.forEach((day, i) => {
    // tab
    const tab = el('button', 'tab' + (day.gwangju ? ' gwangju' : '') + (i === 0 ? ' active' : ''));
    tab.textContent = day.label;
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('p-' + day.id).classList.add('active');
    });
    tabBar.appendChild(tab);

    // panel
    const panel = el('div', 'panel' + (i === 0 ? ' active' : ''));
    panel.id = 'p-' + day.id;

    // header
    const hdr = el('div','day-hdr');
    hdr.innerHTML = `<span class="dt">${day.date}</span><span class="dtitle">${day.title}</span>`;
    panel.appendChild(hdr);

    // sections
    day.sections.forEach(sec => {
      if (sec.label) panel.appendChild(buildSecLabel(sec.label));
      if (sec.hotel) panel.appendChild(buildHotel(sec.hotel));
      panel.appendChild(buildTable(sec.rows));
    });

    panel.appendChild(buildFooter(day.gwangju));
    panels.appendChild(panel);
  });
})();
