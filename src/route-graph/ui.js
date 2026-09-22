// ===================================================================== samples (fabricated addresses)
const SAMPLES = {
  mac: `Routing tables

Internet:
Destination        Gateway            Flags               Netif Expire
default            192.168.1.1        UGScg                 en0
127                127.0.0.1          UCS                   lo0
127.0.0.1          127.0.0.1          UH                    lo0
169.254            link#12            UCS                   en0      !
192.168.1/24       link#12            UCS                   en0      !
192.168.1.1/32     link#12            UCS                   en0      !
192.168.1.1        a4:2b:8c:11:22:33  UHLWIir               en0   1150
192.168.1.20       link#12            UHRLWI                en0      !
192.168.1.42/32    link#12            UCS                   en0      !
192.168.1.42       f0:18:98:aa:bb:cc  UHLWI                 lo0
192.168.1.77       3c:22:fb:44:55:66  UHLWI                 en0   1002
192.168.1.130      dc:a6:32:77:88:99  UHLWIi                en0    871
224.0.0/4          link#12            UmCS                  en0      !
224.0.0.251        1:0:5e:0:0:fb      UHmLWI                en0
255.255.255.255/32 link#12            UCS                   en0      !

Internet6:
Destination                             Gateway                                 Flags               Netif Expire
default                                 fe80::a62b:8cff:fe11:2233%en0           UGcg                  en0
default                                 fe80::%utun0                            UGcIg               utun0
default                                 fe80::%utun1                            UGcIg               utun1
::1                                     ::1                                     UHL                   lo0
2001:db8:4f00:1::/64                    link#12                                 UC                    en0
2001:db8:4f00:1::1c2f                   f0:18:98:aa:bb:cc                       UHL                   lo0
2001:db8:4f00:1:8d3e:1f0a:9c77:2b41     f0:18:98:aa:bb:cc                       UHL                   lo0
2001:db8:4f00:1::7a3                    dc:a6:32:77:88:99                       UHLWI                 en0
fe80::%lo0/64                           fe80::1%lo0                             UcI                   lo0
fe80::1%lo0                             link#1                                  UHLI                  lo0
fe80::%en0/64                           link#12                                 UCI                   en0
fe80::1c8a:2f3b:4d5e:6f70%en0           f0:18:98:aa:bb:cc                       UHLI                  lo0
fe80::a62b:8cff:fe11:2233%en0           a4:2b:8c:11:22:33                       UHLWIir               en0
fe80::dea6:32ff:fe77:8899%en0           dc:a6:32:77:88:99                       UHLWIi                en0
fe80::%utun0/64                         fe80::c1d2:e3f4:a5b6:c7d8%utun0         UcI                 utun0
fe80::c1d2:e3f4:a5b6:c7d8%utun0         link#15                                 UHLI                  lo0
fe80::%utun1/64                         fe80::1a2b:3c4d:5e6f:7a8b%utun1         UcI                 utun1
fe80::1a2b:3c4d:5e6f:7a8b%utun1         link#16                                 UHLI                  lo0
ff00::/8                                ::1                                     UmCI                  lo0
ff00::/8                                link#12                                 UmCI                  en0
ff01::%lo0/32                           ::1                                     UmCI                  lo0
ff01::%en0/32                           link#12                                 UmCI                  en0
ff02::%lo0/32                           ::1                                     UmCI                  lo0
ff02::%en0/32                           link#12                                 UmCI                  en0
`,
  linux: `Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
10.8.0.0        0.0.0.0         255.255.255.0   U         0 0          0 tun0
10.10.0.0       10.8.0.1        255.255.0.0     UG        0 0          0 tun0
169.254.0.0     0.0.0.0         255.255.0.0     U         0 0          0 eth0
172.17.0.0      0.0.0.0         255.255.0.0     U         0 0          0 docker0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0
192.168.1.1     0.0.0.0         255.255.255.255 UH        0 0          0 eth0
192.168.50.0    192.168.1.254   255.255.255.0   UG        0 0          0 eth0
Kernel IPv6 routing table
Destination                    Next Hop                   Flag Met Ref Use If
::1/128                        ::                         U    256 2     0 lo
2001:db8:1::/64                ::                         U    256 1     0 eth0
fe80::/64                      ::                         U    256 1     0 eth0
::/0                           fe80::1                    UG   1024 3    0 eth0
ff00::/8                       ::                         U    256 1     0 eth0
`,
  linuxvpn: `Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         10.8.0.1        128.0.0.0       UG        0 0          0 tun0
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
10.8.0.0        0.0.0.0         255.255.255.0   U         0 0          0 tun0
10.10.0.0       10.8.0.1        255.255.0.0     UG        0 0          0 tun0
128.0.0.0       10.8.0.1        128.0.0.0       UG        0 0          0 tun0
169.254.0.0     0.0.0.0         255.255.0.0     U         0 0          0 eth0
172.17.0.0      0.0.0.0         255.255.0.0     U         0 0          0 docker0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0
192.168.1.1     0.0.0.0         255.255.255.255 UH        0 0          0 eth0
192.168.50.0    192.168.1.254   255.255.255.0   UG        0 0          0 eth0
203.0.113.9     192.168.1.1     255.255.255.255 UGH       0 0          0 eth0
Kernel IPv6 routing table
Destination                    Next Hop                   Flag Met Ref Use If
::1/128                        ::                         U    256 2     0 lo
2001:db8:1::/64                ::                         U    256 1     0 eth0
fe80::/64                      ::                         U    256 1     0 eth0
::/0                           fe80::1                    UG   1024 3    0 eth0
ff00::/8                       ::                         U    256 1     0 eth0
`,
  windows: `===========================================================================
Interface List
 12...00 1c 42 00 00 08 ......Intel(R) PRO/1000 MT Network Connection
  1...........................Software Loopback Interface 1
===========================================================================

IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1     192.168.1.5     25
        127.0.0.0        255.0.0.0         On-link       127.0.0.1    331
        127.0.0.1  255.255.255.255         On-link       127.0.0.1    331
  127.255.255.255  255.255.255.255         On-link       127.0.0.1    331
      192.168.1.0    255.255.255.0         On-link     192.168.1.5    281
      192.168.1.5  255.255.255.255         On-link     192.168.1.5    281
    192.168.1.255  255.255.255.255         On-link     192.168.1.5    281
        224.0.0.0        240.0.0.0         On-link       127.0.0.1    331
        224.0.0.0        240.0.0.0         On-link     192.168.1.5    281
  255.255.255.255  255.255.255.255         On-link       127.0.0.1    331
  255.255.255.255  255.255.255.255         On-link     192.168.1.5    281
===========================================================================
Persistent Routes:
  None

IPv6 Route Table
===========================================================================
Active Routes:
 If Metric Network Destination      Gateway
  1    331 ::1/128                  On-link
 12    281 fe80::/64                On-link
 12    281 fe80::1c2b:3e4f:5a6b:7c8d/128
                                    On-link
 12     25 ::/0                     fe80::1
  1    331 ff00::/8                 On-link
 12    281 ff00::/8                 On-link
===========================================================================
Persistent Routes:
  None
`,
};

// ===================================================================== page
(function () {
  'use strict';
  const COL = { host: 0, iface: 1, net: 2, neighbor: 3, self: 3, remote: 4, default: 4 };
  const COLS = ['this host', 'interfaces', 'connected prefixes', 'next hops & neighbors', 'remote prefixes'];
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let D = null, N = {}, R = [];
  const state = { f: { fam4: true, fam6: true, neighbors: true, linklocal: false, loopback: true, multicast: false, bookkeeping: false },
                  pinned: null, match: new Set(), forced: new Set(), vis: new Set(), pos: {}, added: new Set() };
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } } };

  $('#legend').innerHTML = [['host', 'this host'], ['iface', 'interface'], ['net', 'connected prefix'], ['neighbor', 'neighbor / next hop'],
    ['self', 'own address'], ['remote', 'remote prefix']].map(([k, t]) => `<span><i style="--c:var(--${k})"></i>${t}</span>`).join('') +
    `<span><i class="line" style="--c:var(--def)"></i>default route</span><span><i class="line dash" style="--c:var(--edge)"></i>unresolved / reject</span>` +
    `<span><i class="line" style="--c:var(--match)"></i>traced path</span>`;

  // ---------------------------------------------------------------- visibility
  function passes(n) {
    if (state.forced.has(n.id)) return true;
    const f = state.f, t = n.tags;
    if (n.family === 4 && !f.fam4) return false;
    if (n.family === 6 && !f.fam6) return false;
    if ((n.kind === 'neighbor' || n.kind === 'self') && !f.neighbors && !t.includes('router')) return false;
    if (!f.loopback && (n.kind === 'self' || t.includes('loopback') || (n.kind === 'iface' && isLo(n.label)))) return false;
    if (!f.linklocal && t.includes('linklocal')) return false;
    if (!f.multicast && t.includes('multicast')) return false;
    if (!f.bookkeeping && t.includes('bookkeeping')) return false;
    return true;
  }
  function computeVisible() {
    const vis = new Set();
    (function walk(id) {
      const n = N[id];
      let keep = passes(n) && n.kind !== 'iface' && !(n.kind === 'neighbor' && !n.routes.length);
      for (const c of n.children) keep = walk(c) || keep;
      if (keep || id === 'host') vis.add(id);
      return keep;
    })('host');
    state.vis = vis; return vis;
  }

  // ---------------------------------------------------------------- layout: tidy tree, one column per kind
  function layout(vis) {
    const pitch = 46, gap = 64, charW = 7.2, widths = [90, 90, 90, 90, 90];
    for (const id of vis) { const n = N[id], c = COL[n.kind]; widths[c] = Math.max(widths[c], Math.min(300, Math.round(Math.max(n.label.length * charW, n.sub.length * 6.4)) + 22)); }
    const xs = []; let x = 16; widths.forEach((w) => { xs.push(x); x += w + gap; });
    const pos = {}; let slot = 0;
    (function place(id) {
      const n = N[id], kids = n.children.filter((c) => vis.has(c)); let y;
      if (kids.length) { const ys = kids.map(place); y = (ys[0] + ys[ys.length - 1]) / 2; } else { y = 44 + slot * pitch; slot += 1; }
      const c = COL[n.kind], h = n.sub ? 38 : 26; pos[id] = { x: xs[c], y: y - h / 2, w: widths[c], h }; return y;
    })('host');
    state.pos = pos;
    return { pos, W: x - gap + 16, H: 44 + Math.max(slot, 1) * pitch, cols: xs.map((xx, i) => [xx, widths[i]]) };
  }
  function scrollTo(id) {
    const p = state.pos[id], box = $('#graph'); if (!p) return;
    box.scrollTo({ left: Math.max(0, p.x + p.w / 2 - box.clientWidth / 2), top: Math.max(0, p.y + p.h / 2 - box.clientHeight / 2), behavior: 'smooth' });
  }
  function ancestors(id) { const out = []; for (let n = N[id]; n; n = n.parent ? N[n.parent] : null) out.push(n.id); return out; }
  function highlightIds(ids) { const all = []; ids.forEach((id) => { if (N[id]) all.push(...ancestors(id)); }); setClass(all, 'hl', all.length > 0); const svg = $('#graph svg'); if (svg) svg.classList.toggle('faded', all.length > 0 || state.match.size > 0); }
  function bitsHtml(bits, plen, fam) {
    const g = fam === 4 ? 8 : 16, parts = [];
    for (let i = 0; i < bits.length; i += g) { const chunk = bits.slice(i, i + g); const cut = Math.min(Math.max(plen - i, 0), g); parts.push((cut > 0 ? `<b>${chunk.slice(0, cut)}</b>` : '') + chunk.slice(cut)); }
    return parts.join(' ');
  }
  function subtree(id) { const out = []; (function w(i) { out.push(i); N[i].children.forEach(w); })(id); return out; }

  // ---------------------------------------------------------------- render
  function render() {
    const vis = computeVisible(), { pos, W, H, cols } = layout(vis);
    const s = [`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`];
    cols.forEach(([x, w], i) => { if (i % 2) s.push(`<rect class="lane" x="${x - 12}" y="0" width="${w + 24}" height="${H}"/>`); s.push(`<text class="col" x="${x}" y="20">${esc(COLS[i].toUpperCase())}</text>`); });
    for (const id of vis) for (const c of N[id].children) {
      if (!vis.has(c)) continue;
      const a = pos[id], b = pos[c], k = N[c], ax = a.x + a.w, ay = a.y + a.h / 2, bx = b.x, by = b.y + b.h / 2, mx = (ax + bx) / 2;
      const cls = ['edge', k.kind === 'default' ? 'default' : '', k.tags.includes('reject') || k.tags.includes('unresolved') ? 'dashed' : ''].join(' ');
      s.push(`<path class="${cls}" data-from="${id}" data-to="${c}" d="M${ax} ${ay} C${mx} ${ay} ${mx} ${by} ${bx} ${by}"/>`);
    }
    for (const id of vis) {
      const n = N[id], p = pos[id], dim = n.tags.includes('reject') || n.tags.includes('unresolved') || n.tags.includes('blackhole');
      s.push(`<g class="node ${n.kind}${dim ? ' dim' : ''}" data-id="${esc(id)}"><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}"/>`);
      const maxc = Math.floor((p.w - 16) / 7.2);
      if (n.sub) s.push(`<text x="${p.x + 9}" y="${p.y + 15}">${esc(n.label.slice(0, maxc))}</text><text class="sub" x="${p.x + 9}" y="${p.y + 30}">${esc(n.sub.slice(0, Math.floor(maxc * 1.15)))}</text>`);
      else s.push(`<text x="${p.x + 9}" y="${p.y + 17}">${esc(n.label.slice(0, maxc))}</text>`);
      if (state.added.has(id)) s.push(`<text class="badge" x="${p.x + p.w - 6}" y="${p.y + 12}" text-anchor="end">NEW</text>`);
      s.push('</g>');
    }
    s.push('</svg>');
    $('#graph').innerHTML = s.join('');
    const svg = $('#graph svg');
    svg.addEventListener('mouseover', (e) => { const g = e.target.closest('g.node'); if (g) { hover(g.dataset.id); showTip(g.dataset.id, e); } });
    svg.addEventListener('mousemove', moveTip);
    svg.addEventListener('mouseout', (e) => { if (e.target.closest('g.node')) { hover(null); $('#tip').hidden = true; } });
    svg.addEventListener('click', (e) => { const g = e.target.closest('g.node'); state.pinned = g && state.pinned !== g.dataset.id ? g.dataset.id : null; hover(null); });
    renderTable(); applyMatch(); hover(null);
  }
  function setClass(ids, cls, on) {
    const set = new Set(ids);
    document.querySelectorAll('#graph g.node').forEach((g) => g.classList.toggle(cls, on && set.has(g.dataset.id)));
    document.querySelectorAll('#graph .edge').forEach((p) => p.classList.toggle(cls, on && set.has(p.dataset.from) && set.has(p.dataset.to)));
    document.querySelectorAll('#routes tr[data-node]').forEach((tr) => tr.classList.toggle(cls, on && set.has(tr.dataset.node)));
  }
  function hover(id) {
    const target = id || state.pinned, ids = target ? ancestors(target).concat(subtree(target)) : [];
    setClass(ids, 'hl', !!target);
    const svg = $('#graph svg'); if (svg) svg.classList.toggle('faded', !!target || state.match.size > 0);
  }
  function showTip(id, e) {
    const n = N[id], tip = $('#tip');
    let h = `<div class="t">${esc(n.label)}${n.sub ? ' · ' + esc(n.sub) : ''}</div>`;
    if (n.note) h += `<div class="n">${esc(n.note)}</div>`;
    if (n.cls && n.kind !== 'iface') h += `<div class="n"><span class="tag">${esc(n.cls.label)}</span> ${esc(n.cls.note)}</div>`;
    if ((n.kind === 'net' || n.kind === 'remote') && n.abits) { const a = anatomy(n.abits, n.plen, n.family); h += `<div class="n">mask ${esc(a.mask)} \u00b7 ${esc(a.first)} to ${esc(a.last)} \u00b7 ${esc(a.count)}</div><div class="bits">${bitsHtml(n.abits, n.plen, n.family)}</div>`; }
    if (n.kind === 'iface' && n.addrs && n.addrs.length) h += `<div class="n">addresses: ${esc(n.addrs.join(', '))}</div>`;
    for (const i of n.routes) { const r = R[i]; h += `<pre>${esc(r.raw.trim())}\n<span class="f">${esc(r.flags_explained.join('\n'))}</span></pre>`; }
    if (!n.routes.length && n.kind === 'neighbor') h += '<div class="n">no entry of its own: it appears only as the gateway of other routes</div>';
    tip.innerHTML = h; tip.hidden = false; moveTip(e);
  }
  function moveTip(e) {
    const tip = $('#tip'); if (tip.hidden) return;
    const w = tip.offsetWidth, hgt = tip.offsetHeight; let x = e.clientX + 16, y = e.clientY + 16;
    if (x + w > window.innerWidth - 8) x = Math.max(8, e.clientX - w - 16);
    if (y + hgt > window.innerHeight - 8) y = Math.max(8, e.clientY - hgt - 16);
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }

  // ---------------------------------------------------------------- routes table
  function meaning(r) {
    if (!r.ok) return 'not understood';
    const t = r.tags;
    let m = { default: 'default route: everything not matched elsewhere, via ' + (r.gw.ip || r.gateway), remote: 'forward to next hop ' + (r.gw.ip || r.gateway),
              connected: 'directly attached: resolve MAC on the link, no router', neighbor: r.gw.mac ? 'cached neighbor, MAC ' + r.gw.mac : 'host route on the link',
              self: "this host's own address, delivered locally" }[r.kind];
    if (t.includes('unresolved')) m = 'neighbor without a MAC yet (ARP/NDP incomplete)';
    if (t.includes('reject')) m += '; REJECT (unreachable)';
    if (t.includes('multicast')) m += '; multicast';
    if (t.includes('linklocal')) m += '; link-local (never routed)';
    if (t.includes('broadcast')) m = 'broadcast address';
    if (t.includes('bookkeeping') && r.kind === 'connected') m = 'host-sized prefix the OS keeps for itself';
    if (t.includes('scoped')) m = 'per-interface duplicate default route, only for sockets bound to ' + r.iface;
    if (t.includes('static')) m += '; static';
    return m;
  }
  function renderTable() {
    $('#routes tbody').innerHTML = R.map((r, i) => {
      const hidden = r.node ? !state.vis.has(r.node) : false;
      return `<tr data-i="${i}" ${r.node ? `data-node="${esc(r.node)}"` : ''} class="${hidden ? 'hidden-route' : ''}"><td>${esc(r.ok ? r.cidr + (r.scope ? '%' + r.scope : '') : r.dest)}</td><td>${esc(r.gateway)}</td><td>${esc(r.flags)}</td><td>${esc(r.iface)}</td><td>${esc(r.expire || '')}</td><td class="meaning">${r.cls ? `<span class="tag">${esc(r.cls.label)}</span> ` : ''}${esc(meaning(r))}</td></tr>`;
    }).join('');
    $('#routes-details summary').textContent = `All routes (${R.length})${R.some((r) => r.node && !state.vis.has(r.node)) ? ' — grey rows are hidden by the filters above' : ''}`;
    const tb = $('#routes tbody');
    tb.onmouseover = (e) => { const tr = e.target.closest('tr[data-node]'); if (tr) hover(tr.dataset.node); };
    tb.onmouseout = () => hover(null);
    tb.onclick = (e) => {
      const tr = e.target.closest('tr[data-node]'); if (!tr) return; const id = tr.dataset.node;
      if (!state.vis.has(id)) { ancestors(id).forEach((a) => state.forced.add(a)); render(); }
      state.pinned = id; hover(null); scrollTo(id);
    };
  }

  // ---------------------------------------------------------------- longest-prefix match
  function trace(text) {
    const box = $('#explain'); text = text.trim();
    state.match = new Set(); state.forced = new Set();
    const ip = text ? addrBits(text) : { bits: null };
    $('#walk').hidden = true;
    if (!ip.bits) { box.hidden = !text; box.textContent = text ? `"${text}" is not an IPv4 or IPv6 address` : ''; render(); return; }
    const cands = R.filter((r) => r.ok && r.family === ip.fam && ip.bits.startsWith(r.bits)).sort((a, b) => b.plen - a.plen);
    const lines = [`packet to ${text}`];
    if (!cands.length) lines.push('  no route matches: the kernel would fail with "No route to host"');
    else {
      const w = cands[0];
      lines.push(`  ${cands.length} route${cands.length === 1 ? '' : 's'} contain${cands.length === 1 ? 's' : ''} it; the longest prefix wins:`);
      for (const r of cands) lines.push(`  ${r === w ? '->' : '  '} ${(r.cidr + (r.scope ? '%' + r.scope : '')).padEnd(30)} ${r.gateway.padEnd(24)} ${r.flags.padEnd(10)} ${r.iface}`);
      const ties = cands.filter((r) => r.plen === w.plen);
      if (ties.length > 1) lines.push(`  (${ties.length} tie on prefix length; the first in table order wins${ties.some((r) => r.os === 'bsd' && r.flags.includes('I')) ? '; I-flagged ones are interface-scoped and only apply to sockets bound to that interface' : ''})`);
      const net = cands.find((r) => ['connected', 'remote', 'default'].includes(r.kind));
      if (w.kind === 'remote' || w.kind === 'default') lines.push(`  => out ${w.iface} to next hop ${w.gw.ip || w.gateway}, which forwards it toward ${w.cidr}`);
      else if (w.kind === 'connected') lines.push(`  => ${text} is directly on ${w.iface}: resolve its MAC with ARP/NDP and send it there`);
      else if (w.kind === 'neighbor') lines.push(`  => ${text} is a host on ${w.iface}; MAC ${w.gw.mac ? w.gw.mac + ' already cached' : 'not resolved yet'}${net ? ', cloned from ' + net.cidr : ''}`);
      else if (w.kind === 'self') lines.push(`  => that is this host itself; delivered over ${w.iface}`);
      if (w.node) ancestors(w.node).forEach((a) => { state.match.add(a); state.forced.add(a); });
      $('#walk').innerHTML = walkHtml(text, ip, w, cands) + intervalsHtml(ip, cands);
    }
    $('#walk').hidden = !cands.length;
    box.innerHTML = `<button class="close" type="button" id="clear-trace">clear</button>${esc(lines.join('\n'))}`;
    box.hidden = false; $('#clear-trace').onclick = () => { $('#addr').value = ''; trace(''); };
    render();
  }
  function walkHtml(text, ip, w, cands) {
    const fam = ip.fam, iface = N['if:' + w.iface] || { addrs: [] }, isV6 = fam === 6;
    const own = iface.addrs.find((a) => (isV6 ? a.includes(':') && !a.startsWith('fe80:') : !a.includes(':'))) || iface.addrs.find((a) => (isV6 ? a.includes(':') : !a.includes(':')));
    const srcIp = own ? own.split('/')[0] : `(${w.iface}'s address)`, srcMac = iface.info && iface.info.ether ? iface.info.ether : `(${w.iface}'s MAC)`;
    const steps = [`<b>1. Longest-prefix match.</b> ${cands.length === 1 ? 'Only one route contains' : cands.length + ' routes contain'} ${esc(text)}; <code>${esc(w.cidr)}</code> on <code>${esc(w.iface)}</code> is the most specific, so it wins.`];
    if (w.kind === 'self') {
      steps.push(`<b>2. Delivery.</b> That is one of this host's own addresses: the packet is handed to the loopback path and never reaches the wire.`);
      return `<div class="steps">${steps.map((t) => `<p>${t}</p>`).join('')}</div>`;
    }
    const remote = w.kind === 'remote' || w.kind === 'default', nextHop = remote ? w.gw.ip : text;
    steps.push(`<b>2. Next hop.</b> ${remote ? `<code>${esc(w.cidr)}</code> is not on a local link, so the next hop is the route's gateway <code>${esc(nextHop)}</code>` : `<code>${esc(w.cidr)}</code> is directly connected, so the next hop is the destination itself`}. The IP header will still say <code>${esc(text)}</code>; only the frame is addressed to the hop.`);
    const nb = N[`nb:${fam}:${w.iface}:${nextHop}`] || N[`self:${fam}:${w.iface}:${nextHop}`];
    let dstMac = '?';
    if (nb && nb.mac) { dstMac = nb.mac; steps.push(`<b>3. ${isV6 ? 'NDP' : 'ARP'} cache hit.</b> <code>${esc(nextHop)}</code> is at <code>${esc(nb.mac)}</code>${nb.expire ? `, ${esc(nb.expire)} s before the entry must be re-verified` : ''}${nb.macFlags && nb.macFlags.random ? ' (a randomized MAC)' : ''}.`); }
    else if (isV6) { const tail = ip.bits.slice(104); const sn = 'ff02::1:ff' + parseInt(tail.slice(0, 8), 2).toString(16).padStart(2, '0') + ':' + parseInt(tail.slice(8), 2).toString(16).padStart(4, '0'); steps.push(`<b>3. NDP.</b> No cached MAC for <code>${esc(nextHop)}</code>: a Neighbor Solicitation goes to the solicited-node multicast group <code>${esc(sn)}</code>; the packet waits for the advertisement.`); }
    else steps.push(`<b>3. ARP.</b> ${nb ? 'The cache entry is incomplete' : 'No cache entry'} for <code>${esc(nextHop)}</code>: the kernel clones a host route and broadcasts <code>who has ${esc(nextHop)}? tell ${esc(srcIp)}</code> to <code>ff:ff:ff:ff:ff:ff</code>. The packet waits; if nobody answers, the entry is marked R and the send fails with "host is down".`);
    steps.push(`<b>4. The frame leaves ${esc(w.iface)}.</b> Two addresses on the outside, two on the inside:`);
    const hdr = `<div class="frame"><div class="hdr eth"><span class="lbl">Ethernet</span><span><small>dst MAC</small>${esc(dstMac)}</span><span><small>src MAC</small>${esc(srcMac)}</span><span><small>type</small>${isV6 ? '0x86DD (IPv6)' : '0x0800 (IPv4)'}</span></div>` +
      `<div class="hdr ip"><span class="lbl">${isV6 ? 'IPv6' : 'IPv4'}</span><span><small>src IP</small>${esc(srcIp)}</span><span><small>dst IP</small>${esc(text)}</span><span><small>${isV6 ? 'hop limit' : 'TTL'}</small>64</span></div><div class="hdr pl"><span class="lbl">payload</span><span>TCP / UDP / ICMP ...</span></div></div>`;
    steps.push(`${remote ? `The router at <code>${esc(nextHop)}</code> strips the Ethernet header, looks up <code>${esc(text)}</code> in its own table, and repeats the whole dance with its next hop. The IP addresses survive every hop${fam === 4 && w.cidr === '0.0.0.0/0' && /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(srcIp) ? ', except that a NAT router rewrites the private source address to its public one' : ''}; the MACs are rewritten at each one.` : 'Delivered in one hop: the destination is on this link.'}`);
    return `<div class="steps">${steps.slice(0, 4).map((t) => `<p>${t}</p>`).join('')}${hdr}<p>${steps[4]}</p></div>`;
  }
  function intervalsHtml(ip, cands) {
    const rows = [...cands].sort((a, b) => a.plen - b.plen), max = FAMILY_MAX[ip.fam];
    const frac = (bits, start) => { const k = Math.min(24, max - start); return k <= 0 ? 0 : parseInt(bits.slice(start, start + k).padEnd(k, '0'), 2) / 2 ** k; };
    const body = rows.map((r, i) => {
      const next = rows[i + 1]; let child = '';
      if (next) child = `<i class="child" style="left:${(frac(next.bits.padEnd(max, '0'), r.plen) * 100).toFixed(2)}%;width:${Math.max(100 / 2 ** Math.min(next.plen - r.plen, 30), 0.5).toFixed(2)}%"></i>`;
      return `<div class="row${i === rows.length - 1 ? ' win' : ''}"><span class="lbl">${esc(r.cidr)}</span><span class="bar">${child}<i class="pt" style="left:${(frac(ip.bits, r.plen) * 100).toFixed(2)}%"></i></span><span class="w">${r.plen === 0 ? 'everything' : `2<sup>${max - r.plen}</sup> addresses`}</span></div>`;
    }).join('');
    const w = rows[rows.length - 1];
    return `<div class="intervals"><p class="cap">Why the longest prefix wins: each bar is one matching prefix's range, the dot is ${esc(ip.fam === 4 ? fmt4(ip.bits) : fmt6(ip.bits))}, and the shaded slice is where the next, more specific prefix sits inside it. Smaller range, more specific, wins.</p>${body}<p class="cap bits">${bitsHtml(ip.bits, w.plen, ip.fam)} <span>first ${w.plen} bits match ${esc(w.cidr)}</span></p></div>`;
  }
  function applyMatch() { setClass([...state.match], 'match', state.match.size > 0); if (state.match.size) scrollTo([...state.match].pop()); }

  // ---------------------------------------------------------------- observations, changes
  function renderObservations() {
    const list = $('#obs');
    list.innerHTML = D.observations.map((o, i) => `<li class="${o.level}" data-i="${i}">${esc(o.text)}</li>`).join('');
    list.onmouseover = (e) => { const li = e.target.closest('li'); if (li) highlightIds(D.observations[li.dataset.i].ids); };
    list.onmouseout = () => hover(null);
  }
  function renderChanges() {
    const sec = $('#changes'); sec.hidden = !D.diff; if (!D.diff) return;
    const row = (r) => `<tr><td>${esc(r.ok ? r.cidr : r.dest)}</td><td>${esc(r.gateway)}</td><td>${esc(r.flags)}</td><td>${esc(r.iface)}</td></tr>`;
    $('#changes-body').innerHTML = `<ul>${D.diffNotes.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` +
      (D.diff.added.length ? `<h4>Added (${D.diff.added.length})</h4><table class="mini added">${D.diff.added.map(row).join('')}</table>` : '') +
      (D.diff.removed.length ? `<h4>Removed (${D.diff.removed.length})</h4><table class="mini removed">${D.diff.removed.map(row).join('')}</table>` : '');
  }
  const b64u = (bytes) => { let s = ''; for (let i = 0; i < bytes.length; i += 8192) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64u = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));
  async function encodeShare(text) {
    const bytes = new TextEncoder().encode(text);
    try { if ('CompressionStream' in window) { const cs = new CompressionStream('deflate-raw'), wr = cs.writable.getWriter(); wr.write(bytes); wr.close(); return 'z' + b64u(new Uint8Array(await new Response(cs.readable).arrayBuffer())); } } catch (e) { /* fall through */ }
    return 'p' + b64u(bytes);
  }
  async function decodeShare(s) {
    const bytes = unb64u(s.slice(1)); if (s[0] !== 'z') return new TextDecoder().decode(bytes);
    const ds = new DecompressionStream('deflate-raw'), wr = ds.writable.getWriter(); wr.write(bytes); wr.close();
    return new TextDecoder().decode(await new Response(ds.readable).arrayBuffer());
  }
  $('#share').addEventListener('click', async () => {
    if (!D) return; const btn = $('#share');
    const parts = ['t=' + await encodeShare($('#netstat').value), 'h=' + encodeURIComponent($('#hostname').value.trim())];
    if ($('#ifcfg').value.trim()) parts.push('i=' + await encodeShare($('#ifcfg').value));
    if ($('#before').value.trim()) parts.push('b=' + await encodeShare($('#before').value));
    const url = location.origin + location.pathname + '#' + parts.join('&');
    try { await navigator.clipboard.writeText(url); btn.textContent = 'link copied'; } catch (e) { history.replaceState(null, '', '#' + parts.join('&')); btn.textContent = 'link is in the address bar'; }
    setTimeout(() => { btn.textContent = 'copy link'; }, 2500);
  });
  async function loadFromHash() {
    if (!location.hash.startsWith('#t=')) return false;
    try {
      const q = {}; location.hash.slice(1).split('&').forEach((kv) => { const i = kv.indexOf('='); q[kv.slice(0, i)] = kv.slice(i + 1); });
      $('#netstat').value = await decodeShare(q.t); $('#ifcfg').value = q.i ? await decodeShare(q.i) : ''; $('#before').value = q.b ? await decodeShare(q.b) : '';
      $('#hostname').value = q.h ? decodeURIComponent(q.h) : 'this host';
      return draw(false);
    } catch (e) { return false; }
  }

  // ---------------------------------------------------------------- input panel
  function draw(fromUser) {
    const text = $('#netstat').value, err = $('#err');
    try {
      D = buildModel(text, $('#ifcfg').value, $('#hostname').value.trim() || 'this host');
    } catch (e) { err.textContent = e.message; err.hidden = false; return false; }
    err.hidden = true; N = D.nodes; R = D.routes; D.diff = null; state.added = new Set();
    const beforeText = $('#before').value;
    if (beforeText.trim()) {
      try { const B = parseNetstat(beforeText); classify(B.routes); D.diff = diffRoutes(B.routes, R); D.diffNotes = diffObservations(D.diff, B.routes, R); D.diff.added.forEach((r) => { if (r.node) state.added.add(r.node); }); }
      catch (e) { err.textContent = 'earlier table: ' + e.message; err.hidden = false; }
    }
    state.pinned = null; state.match = new Set(); state.forced = new Set(); $('#explain').hidden = true; $('#walk').hidden = true; $('#addr').value = '';
    const n4 = R.filter((r) => r.ok && r.family === 4).length, n6 = R.filter((r) => r.ok && r.family === 6).length;
    $('#host').textContent = D.hostname;
    $('#meta').textContent = `${D.os} format · ${n4} IPv4 + ${n6} IPv6 routes${fromUser === 'sample' ? ' · example data' : ''}`;
    const gl = Object.keys(D.glossary).sort();
    $('#flags').innerHTML = gl.map((k) => `<dt>${esc(k)}</dt><dd>${esc(D.glossary[k].name)} — ${esc(D.glossary[k].meaning)}</dd>`).join('');
    $('#glossary').hidden = !gl.length;
    if (fromUser) { store.set('routeviz-netstat', text); store.set('routeviz-ifcfg', $('#ifcfg').value); store.set('routeviz-before', $('#before').value); store.set('routeviz-host', $('#hostname').value); $('#input').open = false; }
    renderObservations(); renderChanges(); render(); return true;
  }
  document.querySelectorAll('.chip[data-sample]').forEach((b) => b.addEventListener('click', () => {
    const k = b.dataset.sample; $('#netstat').value = SAMPLES[k]; $('#ifcfg').value = ''; $('#before').value = k === 'linuxvpn' ? SAMPLES.linux : '';
    $('#hostname').value = { mac: 'laptop', linux: 'server', linuxvpn: 'server', windows: 'desktop' }[k]; draw('sample');
  }));
  $('#clear').addEventListener('click', () => { $('#netstat').value = ''; $('#ifcfg').value = ''; $('#before').value = ''; $('#err').hidden = true; $('#netstat').focus(); });
  $('#draw').addEventListener('click', () => draw(true));
  $('#netstat').addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) draw(true); });
  document.querySelectorAll('#controls input[type=checkbox]').forEach((cb) => {
    cb.checked = state.f[cb.dataset.f];
    cb.addEventListener('change', () => { state.f[cb.dataset.f] = cb.checked; if (D) render(); });
  });
  $('#lookup').addEventListener('submit', (e) => { e.preventDefault(); if (D) trace($('#addr').value); });
  $('#addr').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); if (D) trace($('#addr').value); } });
  const themes = ['auto', 'light', 'dark'];
  const embedded = document.querySelector('.rg').hasAttribute('data-embedded');  // inside a site that owns the theme
  if (!embedded) $('#theme').addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme || 'auto', next = themes[(themes.indexOf(cur) + 1) % 3];
    if (next === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = next;
    $('#theme').textContent = '◐ ' + next; store.set('routeviz-theme', next);
  });
  const t = embedded ? null : store.get('routeviz-theme'); if (t && t !== 'auto') { document.documentElement.dataset.theme = t; $('#theme').textContent = '\u25d0 ' + t; }

  // first paint: the viewer's last table if this browser remembers one, else the macOS example
  (async () => {
    if (await loadFromHash()) { $('#input').open = false; return; }
    const saved = store.get('routeviz-netstat');
    if (saved && saved.trim()) {
      $('#netstat').value = saved; $('#ifcfg').value = store.get('routeviz-ifcfg') || ''; $('#before').value = store.get('routeviz-before') || ''; $('#hostname').value = store.get('routeviz-host') || 'this host';
      if (draw(false)) { $('#input').open = false; return; }
    }
    document.querySelector('.chip[data-sample="mac"]').click();
  })();
})();
