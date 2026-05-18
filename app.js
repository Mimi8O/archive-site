const NOTE_MAX = 200;

// ── State ──────────────────────────────────────
let currentCat  = 'fujifilm';
let detailPhotos = [];   // photos in current category
let detailIndex  = 0;    // which photo (entry) is open
let slideIndex   = 0;    // which image within the photo's images[]

// ── Elements ───────────────────────────────────
const grid        = document.getElementById('photo-grid');
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

// ── Open / render detail ───────────────────────
function openDetail(cat, index) {
  detailPhotos = PHOTOS.filter(p => p.cat === cat);
  detailIndex  = index;
  slideIndex   = 0;
  renderDetail();
  detailView.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderDetail() {
  const photo  = detailPhotos[detailIndex];
  const images = photo.images && photo.images.length ? photo.images : [photo.src];
  const note   = photo.note || '';
  const charCount = [...note.replace(/\n/g, '')].length; // count excluding newlines

  // Image
  detailImg.src = images[slideIndex] || photo.src;
  detailImg.alt = photo.title;

  // Meta
  detailTitle.textContent  = photo.title;
  detailDate.textContent   = photo.date;
  detailCamera.textContent = photo.camera;

  // Note (truncate to 200 chars display)
  detailNote.textContent = note;

  // Page counter — show actual char count / 200
  detailPage.textContent = `${charCount}/${NOTE_MAX}`;
  detailPage.style.color = charCount > NOTE_MAX ? '#c0392b' : '';

  // Image slider buttons
  sliderPrev.style.opacity      = slideIndex === 0 ? '0.3' : '1';
  sliderPrev.style.pointerEvents= slideIndex === 0 ? 'none' : 'auto';
  sliderNext.style.opacity      = slideIndex === images.length - 1 ? '0.3' : '1';
  sliderNext.style.pointerEvents= slideIndex === images.length - 1 ? 'none' : 'auto';

  // Image counter dot indicator
  renderDots(images.length);
}

function renderDots(total) {
  let dots = document.getElementById('slide-dots');
  if (!dots) {
    dots = document.createElement('div');
    dots.id = 'slide-dots';
    dots.className = 'slide-dots';
    document.querySelector('.detail-photo-wrap').appendChild(dots);
  }
  if (total <= 1) { dots.innerHTML = ''; return; }
  dots.innerHTML = Array.from({ length: total }, (_, i) =>
    `<span class="dot ${i === slideIndex ? 'active' : ''}"></span>`
  ).join('');
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
  if (slideIndex > 0) { slideIndex--; renderDetail(); }
});

sliderNext.addEventListener('click', () => {
  const images = detailPhotos[detailIndex]?.images || [detailPhotos[detailIndex]?.src];
  if (slideIndex < images.length - 1) { slideIndex++; renderDetail(); }
});

closeBtn.addEventListener('click', closeDetail);

detailView.addEventListener('click', (e) => {
  if (e.target === detailView) closeDetail();
});

document.addEventListener('keydown', (e) => {
  if (detailView.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeDetail();
  if (e.key === 'ArrowLeft'  && slideIndex > 0) { slideIndex--; renderDetail(); }
  if (e.key === 'ArrowRight') {
    const images = detailPhotos[detailIndex]?.images || [detailPhotos[detailIndex]?.src];
    if (slideIndex < images.length - 1) { slideIndex++; renderDetail(); }
  }
});

// ── Init ───────────────────────────────────────
renderGallery('fujifilm');
