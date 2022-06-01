(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open1]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    closeModalBtn1: document.querySelector('[data-modal-close1]'),
    closeModalBtn2: document.querySelector('[data-modal-close2]'),
    forwardModalBtn: document.querySelector('[data-forward-button]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    modalOrder: document.querySelector('[data-modal-order]'),
    modalContact: document.querySelector('[data-modal-contact]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);
  refs.forwardModalBtn.addEventListener('click', toogleModalChange);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function toogleModalChange() {
    refs.modalOrder.classList.toggle('not-visible');
    refs.modalContact.classList.toggle('visible');
  }
})();
