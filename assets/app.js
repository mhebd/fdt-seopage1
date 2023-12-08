// Show modal
(function() {
  const attachmentBtn = document.querySelectorAll('.attachment-btn');
  const modal = document.querySelector('.modal');

  attachmentBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
    });
  })

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('show');
    }
  })
})();

console.log('Hello Developer!!');