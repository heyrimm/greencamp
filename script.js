<script type="text/plain" data-filename="script.js">
(() => {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  if (!hamburger || !sidebar) return; // 페이지에 공통영역이 없으면 조용히 종료

  const toggleNav = () => {
    const isOpen = sidebar.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) sidebar.querySelector('a')?.focus?.();
  };
  hamburger.addEventListener('click', toggleNav);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });

  // 현재 페이지 링크 강조
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav#sidebar a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
</script>