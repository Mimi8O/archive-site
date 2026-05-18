// ── State ──────────────────────────────────────
let currentCat = 'fujifilm';
let detailPhotos = [];   // photos in current category
let detailIndex = 0;     // which photo is open

// ── Elements ───────────────────────────────────
const grid        = document.getElementById('photo-grid');
const galleryView = document.getElementById('gallery-view');
const detailView  = document.getElementById('detail-view');
const detailImg   = document.getElementById('detail-img');
const detailTitle = document.getElementById('detail-title');
const detailDate  = document.getElementById('detail-date');
const detailCamera= document.getElementById('detail-camera');
const detailNote  = document.getElementById('detail-note');
const detailPage  = document.getElementById('detail-page');
const sliderPrev  = document.getElementById('slider-prev');
const sliderNext  = document.getElementById('slider-next');
const closeBtn    = document.getElementById('close-detail');
const navTabs     = document.querySelectorAll('.nav-tab');

// ── Render gallery ─────────────────────────────
function renderGallery(cat) {
  currentCat = cat;
  const filtered = PHOTOS.filter(p => p.cat === cat);

  grid.innerHTML = '';
  filtered.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy"
             onerror="this.parentElement.style.background='#e0ddd8'">
      </div>
      <div class="card-meta">
        ${photo.title}<br/>${photo.date}<br/>${photo.camera}
      </div>
    `;
    card.addEventListener('click', () => openDetail(cat, i));
    grid.appendChild(card);
  });
}

// ── Open detail view ───────────────────────────
function openDetail(cat, index) {
  detailPhotos = PHOTOS.filter(p => p.cat === cat);
  detailIndex = index;
  renderDetail();
  detailView.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderDetail() {
  const photo = detailPhotos[detailIndex];
  detailImg.src = photo.src;
  detailImg.alt = photo.title;
  detailTitle.textContent = photo.title;
  detailDate.textContent = photo.date;
  detailCamera.textContent = photo.camera;
  detailNote.textContent = photo.note;
  detailPage.textContent = photo.page;

  // Show/hide nav buttons
  sliderPrev.style.opacity = detailIndex === 0 ? '0.3' : '1';
  sliderPrev.style.pointerEvents = detailIndex === 0 ? 'none' : 'auto';
  sliderNext.style.opacity = detailIndex === detailPhotos.length - 1 ? '0.3' : '1';
  sliderNext.style.pointerEvents = detailIndex === detailPhotos.length - 1 ? 'none' : 'auto';
}

function closeDetail() {
  detailView.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Events ─────────────────────────────────────
navTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    navTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderGallery(tab.dataset.cat);
  });
});

sliderPrev.addEventListener('click', () => {
  if (detailIndex > 0) {
    detailIndex--;
    renderDetail();
  }
});

sliderNext.addEventListener('click', () => {
  if (detailIndex < detailPhotos.length - 1) {
    detailIndex++;
    renderDetail();
  }
});

closeBtn.addEventListener('click', closeDetail);

// Close on background click
detailView.addEventListener('click', (e) => {
  if (e.target === detailView) closeDetail();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (detailView.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeDetail();
  if (e.key === 'ArrowLeft' && detailIndex > 0) { detailIndex--; renderDetail(); }
  if (e.key === 'ArrowRight' && detailIndex < detailPhotos.length - 1) { detailIndex++; renderDetail(); }
});

// ── Init ───────────────────────────────────────
renderGallery('fujifilm');
