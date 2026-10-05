(function () {
  var CDN = function (f) { return 'https://cdn.globalso.com/longtenpack/' + encodeURIComponent(f); };
  var BASE = 'https://longtenpack.com';

  var T = {
    en: {
      topbar: 'ISO 9001 certified manufacturer · Dongguan, China · Since 2010',
      quoteCta: 'Request a quote', sampleCta: 'Get free samples', eyebrow: 'Cosmetic packaging manufacturer',
      h1a: 'Glass & plastic packaging, made for ', h1em: 'beauty brands.',
      lead: 'Bottles, jars, droppers and tubes — moulded, decorated and inspected in our own Dongguan factory. One partner from design to delivery.',
      badgeA: '7 days', badgeB: 'Samples · bulk within 30 days',
      prodEyebrow: 'Our packaging', prodH2: 'Eight product lines. Thousands of stock moulds.', catalogue: 'View full catalogue →',
      whyEyebrow: 'Why LongTen', whyH2: 'A factory partner, not a middleman.',
      whyBody: 'Dongguan LongTen Package Products has manufactured cosmetic packaging since 2010. We serve skincare, fragrance, personal care, wellness and food brands with one-stop packaging solutions.',
      aboutLink: 'About the company →',
      custEyebrow: 'Customization', custH2: 'Make the stock bottle yours.',
      custBody: 'Start with a stock mould or build a new one. Our in-house decoration line handles finishing, so your packaging looks like your brand.',
      facEyebrow: 'Inside the factory', facH2: 'From mould to shipment, under one roof.',
      facBody: 'Every order passes six in-house stages, so quality and timelines stay in our control.',
      journal: 'Journal', allPosts: 'All articles →',
      quoteH2: 'Tell us about your product.', quoteBody: 'Get a price list and free samples. Our team replies within 3–6 hours, 7 days a week.',
      fName: 'Name', fEmail: 'Work email', fCompany: 'Company', fType: 'Product type', fMsg: 'Capacity, quantity, decoration, target date…', fSend: 'Send inquiry',
      fSending: 'Sending…', fError: 'Sorry, something went wrong. Please email randy.xiao@longtenpack.com or message us on WhatsApp.',
      thanksA: 'Thank you.', thanksB: "We'll reply within 3–6 hours with pricing and sample options.",
      company: 'Dongguan LongTen Package Products Co., Ltd.', address: 'Room 103, Building 2, No. 1 Guohai Road, Changping Town, Dongguan, Guangdong, China',
      fProducts: 'Products', fCompanyH: 'Company', follow: 'Follow',
      copy: '© 2010–2026 LongTen Packaging. All rights reserved.', legal: 'Privacy · Sitemap', whatsapp: 'Chat on WhatsApp'
    },
    zh: {
      topbar: 'ISO 9001 认证制造商 · 中国东莞 · 始于 2010 年',
      quoteCta: '获取报价', sampleCta: '免费索取样品', eyebrow: '化妆品包装制造商',
      h1a: '专为美妆品牌打造的', h1em: '玻璃与塑料包装。',
      lead: '瓶、罐、滴管瓶与软管——均在我们东莞自有工厂完成开模、装饰与质检。从设计到交付，一站式合作。',
      badgeA: '7 天', badgeB: '出样 · 大货 30 天内交付',
      prodEyebrow: '产品系列', prodH2: '八大产品线，数千款现成模具。', catalogue: '查看完整目录 →',
      whyEyebrow: '为什么选择 LongTen', whyH2: '工厂直供，而非中间商。',
      whyBody: '东莞 LongTen 包装制品有限公司自 2010 年起专注化妆品包装生产，为护肤、香水、个人护理、健康及食品品牌提供一站式包装解决方案。',
      aboutLink: '了解公司 →',
      custEyebrow: '定制服务', custH2: '让现成瓶型成为你的专属。',
      custBody: '可选用现成模具，也可全新开模。自有装饰产线负责表面处理，让包装呈现品牌风格。',
      facEyebrow: '走进工厂', facH2: '从模具到出货，全部在厂内完成。',
      facBody: '每笔订单都经过六道自有工序，品质与交期始终可控。',
      journal: '行业资讯', allPosts: '全部文章 →',
      quoteH2: '告诉我们你的产品需求。', quoteBody: '获取价格表与免费样品。我们的团队每周 7 天在线，3–6 小时内回复。',
      fName: '姓名', fEmail: '工作邮箱', fCompany: '公司名称', fType: '产品类型', fMsg: '容量、数量、装饰工艺、期望交期……', fSend: '发送询盘',
      fSending: '发送中…', fError: '抱歉，发送失败。请发邮件至 randy.xiao@longtenpack.com 或通过 WhatsApp 联系我们。',
      thanksA: '感谢您的询盘。', thanksB: '我们将在 3–6 小时内回复报价与样品方案。',
      company: '东莞 LongTen 包装制品有限公司', address: '中国广东省东莞市常平镇国海路 1 号 2 栋 103 室',
      fProducts: '产品', fCompanyH: '公司', follow: '关注我们',
      copy: '© 2010–2026 LongTen 包装 版权所有', legal: '隐私政策 · 网站地图', whatsapp: 'WhatsApp 咨询'
    }
  };

  var D = {
    nav: [['#products', 'Products', '产品'], ['#custom', 'Customization', '定制服务'], ['#factory', 'Factory', '工厂'], ['#journal', 'Journal', '资讯'], ['#about', 'About', '关于我们']],
    stats: [['2010', 'Manufacturing since', '创立年份'], ['ISO 9001', 'Certified factory', '认证工厂'], ['7 / 30', 'Days to sample / bulk', '出样 / 大货天数'], ['3–6 h', 'Inquiry response, 24/7', '询盘响应，全天候', '3–6 小时']],
    products: [
      ['套装3.jpg', '/glass-bottle-set/', 'Glass bottle sets', 'Skincare', '玻璃套装瓶', '护肤'],
      ['photobank-172.jpg', '/cosmetic-jar-products/', 'Cosmetic jars', 'Glass · PP', '膏霜罐', '玻璃 · PP'],
      ['IMG_9666.jpg', '/essential-oil-bottle/', 'Essential oil bottles', '5–100 ml', '精油瓶', '5–100 ml'],
      ['IMG_0370.jpg', '/glass-perfume-bottle/', 'Perfume bottles', '10–100 ml', '香水瓶', '10–100 ml'],
      ['IMG_9407.jpg', '/pepetg-bottle/', 'PE & PETG bottles', 'Lotion · spray', 'PE & PETG 瓶', '乳液 · 喷雾'],
      ['IMG_0217.jpg', '/spray-bottle-products/', 'PET bottles', 'Mist · trigger', 'PET 瓶', '细雾 · 扳机喷'],
      ['813.jpg', '/deodorant-stick/', 'Deodorant sticks', 'Refillable', '止汗棒管', '可替换'],
      ['IMG_9612.jpg', '/soft-tube-2/', 'Soft tubes', 'PE · laminate', '软管', 'PE · 复合']
    ],
    reasons: [
      ['One-stop service', 'Packaging solutions from design and mould-making through to production.', '一站式服务', '从设计、开模到生产的完整包装方案。'],
      ['Reliable quality', 'ISO 9001 certified, with functional testing and QC on every batch.', '品质可靠', 'ISO 9001 认证，每批次均经功能测试与质检。'],
      ['Factory-direct pricing', 'No trading-company markup — high quality at competitive prices.', '工厂直销价格', '无贸易商加价，高品质、高性价比。'],
      ['Free samples', 'Evaluate stock items free of charge before you commit.', '免费样品', '下单前可免费评估现货产品。'],
      ['Fast delivery', 'Samples in 7 days, bulk orders within 30 days.', '快速交付', '样品 7 天，大货 30 天内交付。'],
      ['Responsive support', '24/7 service with replies within 3–6 hours.', '及时响应', '7×24 小时服务，3–6 小时内回复。']
    ],
    customs: [
      ['Printing', 'Silk-screen, hot stamping, labels', '印刷', '丝印、烫金、贴标'],
      ['Surface', 'Frosted, spray-coated, UV, electroplated', '表面处理', '磨砂、喷涂、UV、电镀'],
      ['Colour', 'Pantone-matched glass, resin and caps', '颜色', '按潘通色号定制玻璃、树脂与瓶盖'],
      ['Closures', 'Droppers, pumps, sprayers, wood & metal lids', '配件', '滴管、泵头、喷头、木盖及金属盖']
    ],
    process: [
      ['模具1.jpg', 'Mould room', 'All new moulds are designed and manufactured in-house.', '模具车间', '所有新模具均在厂内设计制造。'],
      ['吹塑.jpg', 'Blow moulding', 'Bottles formed from fresh, inspected raw material.', '吹塑车间', '选用新鲜、经检验的原料吹制成型。'],
      ['注塑.jpg', 'Injection moulding', 'Caps, jars and components moulded to tight tolerances.', '注塑车间', '瓶盖、罐体及配件精密注塑成型。'],
      ['丝印.jpg', 'Screen printing', 'Surface finishing and decoration on our own lines.', '丝网印刷', '自有产线完成表面处理与装饰。'],
      ['测试房-2.jpg', 'Test room', 'Leak, fit and function testing before release.', '测试室', '出厂前进行密封、配合与功能测试。'],
      ['包装.jpg', 'QC & packing', 'Final inspection, packing and export shipping.', '质检与包装', '终检、包装及出口发运。']
    ],
    posts: [
      ['套装3.jpg', 'Trends', 'Glass containers lead the new trend in beauty packaging', '趋势', '玻璃容器引领美妆包装新潮流'],
      ['814.jpg', 'Sustainability', 'Plastic packaging reinvented: sustainable solutions in personal care', '可持续', '塑料包装再造：个人护理行业的可持续方案'],
      ['IMG_08241.jpg', 'Design', 'Revolutionizing beauty packaging with new designs and materials', '设计', '以新设计与新材料革新美妆包装'],
      ['JX1039-3.png', 'Materials', 'Plastic containers: the diverse world of cosmetic packaging', '材料', '塑料容器：化妆品包装的多元世界']
    ],
    footerLinks: [['/about-us/', 'About us', '关于我们'], ['#factory', 'Factory', '工厂'], ['/faqs/', 'FAQs', '常见问题'], ['/news/', 'Journal', '资讯'], ['/contact-us/', 'Contact', '联系我们']]
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var lang = 'en';

  function render() {
    var zh = lang === 'zh', t = T[lang], pick = function (en, z) { return zh ? z : en; };
    document.documentElement.lang = zh ? 'zh-CN' : 'en';
    $$('[data-t]').forEach(function (el) { if (t[el.dataset.t] != null) el.textContent = t[el.dataset.t]; });
    $$('[data-p]').forEach(function (el) { el.placeholder = t[el.dataset.p]; });
    $$('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });

    var nav = D.nav.map(function (n) { return '<a href="' + n[0] + '">' + esc(pick(n[1], n[2])) + '</a>'; }).join('');
    $('#nav').innerHTML = nav;
    $('#mnav').innerHTML = D.nav.map(function (n) { return '<a class="nl" href="' + n[0] + '">' + esc(pick(n[1], n[2])) + '</a>'; }).join('');

    $('#stats').innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(zh && s[3] ? s[3] : s[0]) + '</b><span>' + esc(pick(s[1], s[2])) + '</span></div>';
    }).join('');

    $('#pgrid').innerHTML = D.products.map(function (p) {
      var name = pick(p[2], p[4]);
      return '<a class="pcard" href="' + BASE + p[1] + '"><div class="im"><img loading="lazy" src="' + CDN(p[0]) + '" alt="' + esc(name) + '"></div><div class="meta"><b>' + esc(name) + '</b><span>' + esc(pick(p[3], p[5])) + '</span></div></a>';
    }).join('');

    $('#reasons').innerHTML = D.reasons.map(function (r, i) {
      return '<div><i>0' + (i + 1) + '</i><b>' + esc(pick(r[0], r[2])) + '</b><span>' + esc(pick(r[1], r[3])) + '</span></div>';
    }).join('');

    $('#specs').innerHTML = D.customs.map(function (c) {
      return '<div><b>' + esc(pick(c[0], c[2])) + '</b><span>' + esc(pick(c[1], c[3])) + '</span></div>';
    }).join('');

    $('#fgrid').innerHTML = D.process.map(function (p, i) {
      var title = pick(p[1], p[3]);
      return '<div class="fcard"><div class="im"><img loading="lazy" src="' + CDN(p[0]) + '" alt="' + esc(title) + '"></div><div class="b"><div class="t"><i>0' + (i + 1) + '</i><b>' + esc(title) + '</b></div><span>' + esc(pick(p[2], p[4])) + '</span></div></div>';
    }).join('');

    $('#jgrid').innerHTML = D.posts.map(function (b) {
      var title = pick(b[2], b[4]);
      return '<a class="jcard" href="' + BASE + '/news/"><div class="im"><img loading="lazy" src="' + CDN(b[0]) + '" alt=""></div><span class="tag">' + esc(pick(b[1], b[3])) + '</span><b>' + esc(title) + '</b></a>';
    }).join('');

    var sel = $('#ftype'), cur = sel.selectedIndex;
    sel.innerHTML = '<option value="">' + esc(t.fType) + '</option>' + D.products.map(function (p) {
      return '<option value="' + esc(p[2]) + '">' + esc(pick(p[2], p[4])) + '</option>';
    }).join('');
    sel.selectedIndex = Math.max(cur, 0);

    $('#fprod').innerHTML = D.products.map(function (p) { return '<a href="' + BASE + p[1] + '">' + esc(pick(p[2], p[4])) + '</a>'; }).join('');
    $('#flinks').innerHTML = D.footerLinks.map(function (l) {
      return '<a href="' + (l[0].charAt(0) === '#' ? l[0] : BASE + l[0]) + '">' + esc(pick(l[1], l[2])) + '</a>';
    }).join('');
    document.title = zh ? 'LongTen 包装 — 东莞玻璃与塑料化妆品包装制造商' : 'LongTen Packaging — Glass & Plastic Cosmetic Packaging Manufacturer, Dongguan';
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('longten-lang', l); } catch (e) {}
    render();
  }

  // init language: saved choice, else browser language
  try { var saved = localStorage.getItem('longten-lang'); if (saved === 'zh' || saved === 'en') lang = saved; else if (/^zh/i.test(navigator.language || '')) lang = 'zh'; } catch (e) {}
  render();

  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });

  // mobile menu
  var burger = $('#burger'), menu = $('#mmenu');
  function toggleMenu(open) { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); }
  burger.addEventListener('click', function () { toggleMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) toggleMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 900) toggleMenu(false); });

  // inquiry form — set INQUIRY_ENDPOINT to a form service (e.g. Formspree) or your own API.
  // Until set, the form falls back to opening the visitor's email client with the details prefilled.
  var INQUIRY_ENDPOINT = '';
  var form = $('#form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = $('#ferr'); err.style.display = 'none';
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    if (data.get('website')) return; // honeypot
    var btn = $('button[type=submit]', form), t = T[lang];
    function done() { form.hidden = true; $('#thanks').hidden = false; }
    function fail() { err.textContent = t.fError; err.style.display = 'block'; btn.disabled = false; btn.textContent = t.fSend; }
    if (!INQUIRY_ENDPOINT) {
      var body = ['Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Company: ' + data.get('company'), 'Product: ' + data.get('type'), '', data.get('message')].join('\n');
      window.location.href = 'mailto:randy.xiao@longtenpack.com?subject=' + encodeURIComponent('Website inquiry — ' + data.get('name')) + '&body=' + encodeURIComponent(body);
      done();
      return;
    }
    btn.disabled = true; btn.textContent = t.fSending;
    fetch(INQUIRY_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      .then(function (r) { r.ok ? done() : fail(); }).catch(fail);
  });

  // scroll reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.sechead,.pgrid,.reasons,.two,.fgrid,.jgrid,.qcard').forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  }
})();
