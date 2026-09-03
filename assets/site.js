
(function(){
  const cfg = window.GTD_CONFIG || {};
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click',()=>{
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-campaign-status]').forEach(el=>el.textContent = cfg.campaignStatus || "Pre-Launch");
  document.querySelectorAll('[data-planned-start]').forEach(el=>el.textContent = cfg.plannedStart || "Early April 2027");
  document.querySelectorAll('[data-mileage]').forEach(el=>el.textContent = Number(cfg.trailMilesCompleted || 0).toLocaleString());
  document.querySelectorAll('[data-pledged]').forEach(el=>el.textContent = "$" + Number(cfg.pledgedSupport || 0).toLocaleString());
  document.querySelectorAll('[data-received]').forEach(el=>el.textContent = "$" + Number(cfg.donationsReceived || 0).toLocaleString());
  document.querySelectorAll('[data-location]').forEach(el=>el.textContent = cfg.currentLocation || "Pre-Hike");
  document.querySelectorAll('[data-email]').forEach(el=>{
    el.textContent = cfg.contactEmail || "goingthedistancecampaign@gmail.com";
    if(el.tagName === "A") el.href = "mailto:" + (cfg.contactEmail || "goingthedistancecampaign@gmail.com");
  });

  const modalBg = document.querySelector('[data-modal]');
  const modalClose = document.querySelector('[data-modal-close]');
  function openModal(){
    if(!modalBg) return;
    modalBg.classList.add('open');
    modalBg.setAttribute('aria-hidden','false');
    const btn = modalBg.querySelector('button');
    if(btn) btn.focus();
  }
  function closeModal(){
    if(!modalBg) return;
    modalBg.classList.remove('open');
    modalBg.setAttribute('aria-hidden','true');
  }
  if(modalClose) modalClose.addEventListener('click', closeModal);
  if(modalBg) modalBg.addEventListener('click', e=>{ if(e.target===modalBg) closeModal();});
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

  document.querySelectorAll('[data-rallyup]').forEach(el=>{
    if(cfg.rallyUpUrl){
      el.href = cfg.rallyUpUrl;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.href = "#";
      el.addEventListener('click', e=>{e.preventDefault(); openModal();});
    }
  });

  const total2026 = 2197.9;
  const current = Number(cfg.trailMilesCompleted || 0);
  const pct = Math.max(0, Math.min(100, (current/total2026)*100));
  document.querySelectorAll('[data-route-progress]').forEach(el=>el.style.width = pct + "%");
})();
