/* ==========================================================================
   LF CLÍNICA ESTÉTICA — MOTION & INTERACTION ENGINE (PHASE 06 & 08)
   High Performance, 60fps, Zero Jank, Reduced-Motion Respecting
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFullPageRender = window.location.search.includes('full') || window.innerHeight > 2000;

  // 1. SMART SCROLL NAVIGATION PHYSICS
  const nav = document.getElementById('siteNav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Floating border threshold
    if (currentScrollY > 30) {
      nav.classList.add('floating');
    } else {
      nav.classList.remove('floating');
    }

    // Directional hide / reveal logic
    if (currentScrollY > 120 && currentScrollY > lastScrollY) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // 2. SCROLL REVEAL (INTERSECTION OBSERVER)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (isFullPageRender || prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
    // Reveal any element in first viewport immediately
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-revealed');
        }
      });
    }, 100);
  }

  // 3. REGIONAL TOGGLE
  const toggleBtn = document.getElementById('localeToggle');
  if (toggleBtn) {
    const track = toggleBtn.querySelector('.toggle-track');
    const langSbc = toggleBtn.querySelector('.lang-label.sbc');
    const langAbc = toggleBtn.querySelector('.lang-label.abc');

    toggleBtn.addEventListener('click', () => {
      track.classList.toggle('toggled');
      if (track.classList.contains('toggled')) {
        langSbc.classList.remove('active');
        langAbc.classList.add('active');
      } else {
        langSbc.classList.add('active');
        langAbc.classList.remove('active');
      }
    });
  }

  // 4. CLINICAL PILLARS INTERACTION
  const pillars = document.querySelectorAll('.pillar-item');
  pillars.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      pillars.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 5. CAROUSEL DRAG / SCROLL INTERACTION
  const trackWrapper = document.getElementById('storiesTrack');
  if (trackWrapper) {
    let isDown = false;
    let startX;
    let scrollLeft;

    trackWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      trackWrapper.style.cursor = 'grabbing';
      startX = e.pageX - trackWrapper.offsetLeft;
      scrollLeft = trackWrapper.scrollLeft;
    });

    trackWrapper.addEventListener('mouseleave', () => {
      isDown = false;
      trackWrapper.style.cursor = 'grab';
    });

    trackWrapper.addEventListener('mouseup', () => {
      isDown = false;
      trackWrapper.style.cursor = 'grab';
    });

    trackWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - trackWrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      trackWrapper.scrollLeft = scrollLeft - walk;
    });
  }

  // 6. PROCEDURAL BIO-ELASTIC CANVAS (TILE 6 - 60FPS)
  const canvas = document.getElementById('bioWaveCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let step = 0;

    function renderWaves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const lines = [
        { y: 35, amp: 12, speed: 0.03, alpha: 0.25, stroke: '#0B2B7A' },
        { y: 65, amp: 16, speed: 0.02, alpha: 0.45, stroke: '#0B2B7A' },
        { y: 95, amp: 14, speed: 0.025, alpha: 0.65, stroke: '#0B2B7A' },
        { y: 125, amp: 10, speed: 0.035, alpha: 0.95, stroke: '#0B2B7A' }
      ];

      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.strokeStyle = line.stroke;
        ctx.globalAlpha = line.alpha;
        ctx.lineWidth = 1.6;

        for (let x = 0; x < canvas.width; x += 4) {
          const y = line.y + Math.sin(x * 0.02 + step * line.speed + i) * line.amp;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      step += 1;
      if (!prefersReducedMotion) {
        requestAnimationFrame(renderWaves);
      }
    }

    renderWaves();
  }

  // 7. STEPPED KINETIC TYPOGRAPHY PARALLAX (SCENE 06)
  const steppedGrid = document.getElementById('steppedGrid');
  if (steppedGrid && !prefersReducedMotion) {
    const cols = steppedGrid.querySelectorAll('.stepped-col');

    window.addEventListener('scroll', () => {
      const rect = steppedGrid.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * 0.06;
        cols.forEach(col => {
          const speed = parseFloat(col.dataset.speed || 0);
          col.style.transform = `translateY(${offset * speed * 25}px)`;
        });
      }
    }, { passive: true });
  }

  // 8. REAL-TIME VECTOR CURSOR TRACKING (SCENE 07 - MATERNAL EYE)
  const focalPanel = document.getElementById('focalPanel');
  const iris = document.getElementById('irisElement');
  const pupil = document.getElementById('pupilElement');

  if (focalPanel && iris && pupil && !prefersReducedMotion) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = focalPanel.getBoundingClientRect();
      const panelCenterX = rect.left + rect.width / 2;
      const panelCenterY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - panelCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - panelCenterY) / (window.innerHeight / 2);

      const maxMove = 14;
      targetX = Math.max(-maxMove, Math.min(maxMove, deltaX * maxMove));
      targetY = Math.max(-maxMove, Math.min(maxMove, deltaY * maxMove));
    });

    function smoothEyeFollow() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      iris.setAttribute('transform', `translate(${currentX * 0.6}, ${currentY * 0.6})`);
      pupil.setAttribute('transform', `translate(${currentX}, ${currentY})`);

      requestAnimationFrame(smoothEyeFollow);
    }

    smoothEyeFollow();
  }

  // 9. APPOINTMENT FORM → WHATSAPP INTEGRATION
  const appForm = document.getElementById('appointmentForm');
  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const treatment = document.getElementById('formTreatment').value;
      const message = document.getElementById('formMessage').value.trim();

      const text = `Olá, Dra. Luana Fernandes!\n\nMeu nome é *${name}* (${phone}).\nTenho interesse em: *${treatment}*.\n${message ? `Mensagem: ${message}` : ''}\n\nGostaria de verificar os horários disponíveis para uma avaliação.`;
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/5511937440619?text=${encoded}`, '_blank');
    });
  }
});
