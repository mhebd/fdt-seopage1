// Show modal and upload attachment
(function() {
  const attachmentBtn = document.querySelectorAll('.attachment-btn');
  const modal = document.querySelector('.modal');
  let targetCard;
  attachmentBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      targetCard = e.target.parentElement.parentElement.querySelector('.attachment-btn').querySelector('span');
      modal.classList.add('show');
    });
  })

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('show');
    }
  })

  const form = document.getElementById("uploadForm");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const attachments = form.attachments.files;
    const formData = new FormData();
    // Append each selected file to the FormData object
    for (let i = 0; i < attachments.length; i++) {
      formData.append('attachments', attachments[i]);
    }

    // Fetch API
    fetch('/api/v1/attachment-upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          targetCard.innerText = targetCard.innerText * 1 + data.filenames.length;
          const fileList = document.getElementById("fileList");
          data.filenames.forEach(function(filename) {
            const listItem = document.createElement("li");
            listItem.textContent = filename;
            fileList.appendChild(listItem);
          });
        } else {
          alert("File upload failed: " + data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })

})();





console.log('Hello Developer!!');