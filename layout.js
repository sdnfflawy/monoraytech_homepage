/* ===== 공통 상단바 + 푸터 (모든 페이지에서 이 파일 하나를 참조) =====
   메뉴를 바꾸려면 아래 MENU 만 수정하면 전체 페이지에 반영됩니다. */
(function () {
  var MENU = [
    { label: 'Solutions', items: [
      ['제조',     '/Solutions/Manufacturing/'],
      ['물류',     '/Solutions/Logistics/'],
      ['유통',     '/Solutions/Distribution/'],
      ['안전관리', '/Solutions/Safety/']
    ]},
    { label: 'Consulting', items: [
      ['WMS',                 '/Consulting/WMS/'],
      ['DMS',                 '/Consulting/DMS/'],
      ['DPC/DPS/DAS',         '/Consulting/DPC-DPS-DAS/'],
      ['출하문서관리_키오스크', '/Consulting/Kiosk/'],
      ['ESL',                 '/Consulting/ESL/'],
      ['안전관리 시스템',      '/Consulting/Safety/']
    ]},
    { label: 'Services', items: [
      ['물류',     '/Services/Logistics/'],
      ['안전관리', '/Services/Safety/']
    ]},
    { label: 'About Us', items: [
      ['회사소개', '/About/CompanyProfile/'],
      ['오시는길', '/About/Location/']
    ]}
  ];

  var FOOTER =
    '상호 : 주식회사 모노래이테크 &nbsp;&nbsp;&nbsp; 대표이사 : 백민하<br>' +
    '본사 : 서울특별시 구로구 디지털로27길 24, 7층 701-2호(구로동, 벽산디지털밸리1차)<br>' +
    '사업자등록번호 : 113-86-90156 &nbsp;&nbsp;&nbsp; Tel : 02-857-3332<br>' +
    'Copyright &copy; monoraytech. Corp. All rights reserved';

  function norm(p) { return p.replace(/index\.html$/i, '').replace(/\/?$/, '/'); }
  var here = norm(location.pathname);

  var html = '<header class="site-header"><div class="wrap header-inner">' +
    '<a href="/" class="brand"><img src="/image/logo.png" alt="MONORAYTECH"></a>' +
    '<button class="nav-toggle" type="button" aria-label="메뉴">&#9776;</button>' +
    '<nav><ul class="menu">';
  MENU.forEach(function (m) {
    var on = m.items.some(function (i) { return norm(i[1]) === here; });
    html += '<li' + (on ? ' class="on"' : '') + '><a class="menu-title" href="' + m.items[0][1] + '">' + m.label + '</a><ul class="submenu">';
    m.items.forEach(function (i) {
      html += '<li><a href="' + i[1] + '"' + (norm(i[1]) === here ? ' class="here"' : '') + '>' + i[0] + '</a></li>';
    });
    html += '</ul></li>';
  });
  html += '</ul></nav></div></header>';
  document.body.insertAdjacentHTML('afterbegin', html);

  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend',
      '<footer class="site-footer"><div class="wrap footer-inner"><div class="footer-info">' + FOOTER + '</div></div></footer>');
  });

  // 모바일 햄버거 버튼
  document.addEventListener('click', function (e) {
    if (e.target.closest('.nav-toggle')) document.querySelector('.site-header nav').classList.toggle('open');
  });
})();
