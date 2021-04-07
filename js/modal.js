const projectContainer = document.querySelector('.project-items')

projectContainer.addEventListener('click', e => {

  // Ignores href link
  // e.preventDefault()

  // Only get the modal info if the "More Info" button is clicked
  const modalToggle = e.target.closest('.project-info')
  if (!modalToggle) return

  // Get the Div Tag of the Project modal
  const modal = modalToggle.parentNode.nextElementSibling

  // Modal open
  const modalOpen = _ => {
    modal.classList.add('open')
    modal.style.animation = 'modalFadeIn 400ms forwards'
    document.body.style.overflowY = 'hidden'
  }

  modalOpen();

  // Modal close
  const closeButton = modal.querySelector('.modal-close')

  const modalClose = _ => {
    modal.style.animation = 'modalFadeOut 400ms forwards'
    modal.addEventListener('animationend', modalRemove)
    document.body.style.overflowY = 'scroll'
  }

  // Finish removing the modal
  const modalRemove = _ => {
    modal.classList.remove('open')
    modal.removeEventListener('animationend', modalRemove)
  }

  // Close the modal
  closeButton.addEventListener('click', _ => {
    modalClose();
  })

  // Close the modal using ESC key
  document.addEventListener('keydown', e => {
    console.log (e.key);
    if (e.key === "Escape") {
      modalClose();
    }
  })
})