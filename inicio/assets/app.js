'use strict';
// Preview only. No checkout, purchase confirmation, or access-unlocking logic.
const lightbox = document.querySelector('.lightbox');
const previewImage = document.querySelector('.lightbox-image');
const previewTitle = document.querySelector('#preview-title');
let opener = null;
for (const button of document.querySelectorAll('.preview')) {
  button.addEventListener('click', () => {
    opener = button;
    previewImage.src = button.dataset.image;
    previewImage.alt = `Illustrative Musterseite ${button.dataset.title}`;
    previewTitle.textContent = button.dataset.title;
    lightbox.showModal();
  });
}
document.querySelector('.close-preview').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    const rect = lightbox.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
  }
});
lightbox.addEventListener('close', () => opener?.focus());
