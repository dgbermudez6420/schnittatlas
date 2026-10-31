'use strict';
// Progressive enhancement: the visible mailto link works without JavaScript.
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
const emailLink = document.querySelector('.email-link');
if (copyButton && copyStatus && emailLink && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailLink.getAttribute('href').slice(7));
      copyStatus.textContent = 'Kopiert!';
    } catch {
      copyStatus.textContent = 'Bitte kopiere die Adresse direkt aus dem Link.';
    }
  });
}
