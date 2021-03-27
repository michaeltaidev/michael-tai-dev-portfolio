const projectContainer = document.querySelector('.project-items')

projectContainer.addEventListener('click', e => {

  e.preventDefault()

  const modalToggle = e.target.closest('.project-info')
  if (!modalToggle) return

  // Get the Project modal Div
  const modal = modalToggle.parentNode.nextElementSibling

  // Modal open
  const modalOpen = _ => {
    modal.classList.add('open')
    modal.style.animation = 'modalFadeIn 400ms forwards'
    document.body.style.overflowY = 'hidden'
  }

  modalOpen();

  // Modal closing
  const closeButton = modal.querySelector('.modal-close')

  const modalClose = _ => {
    modal.style.animation = 'modalFadeOut 400ms forwards'
    modal.addEventListener('animationend', modalRemove)
    document.body.style.overflowY = 'scroll'
  }

  const modalRemove = _ => {
    modal.classList.remove('open')
    modal.removeEventListener('animationend', modalRemove)
  }

  closeButton.addEventListener('click', _ => {
    modalClose();
  })

  document.addEventListener('keydown', e => {
    console.log (e.key);
    if ( e.key === "Escape" ) {
      modalClose();
    }
  })
})