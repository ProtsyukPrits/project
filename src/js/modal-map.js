(() => {
  const refs = {
    openMapsBtn: document.querySelector('[data-maps-open]'),
    closeMapsBtn: document.querySelector('[data-maps-close]'),
    maps: document.querySelector('[data-maps]'),
    body: document.querySelector('body'),
    openChicagoBtn: document.querySelector('[data-chicago-open]'),
    openLosAngelesBtn: document.querySelector('[data-losangeles-open]'),
    openNewYorkBtn: document.querySelector('[data-newyork-open]'),
    chicago: document.querySelector('[data-chicago]'),
    losAngeles: document.querySelector('[data-losangeles]'),
    NewYork: document.querySelector('[data-newyork]'),
  };

  refs.openMapsBtn.addEventListener('click', toggleMaps);
  refs.closeMapsBtn.addEventListener('click', toggleMaps);
  refs.openChicagoBtn.addEventListener('click', toggleChcicago);
  refs.openLosAngelesBtn.addEventListener('click', toggleLosAngeles);
  refs.openNewYorkBtn.addEventListener('click', toggleNewYork);

  function toggleMaps() {
    refs.maps.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleChcicago() {
    refs.chicago.classList.add('modal-location-list__item--active');
    refs.openChicagoBtn.classList.add('button__secondary--light');
    refs.openChicagoBtn.classList.remove('button__secondary--accent');
    refs.losAngeles.classList.remove('modal-location-list__item--active');
    refs.NewYork.classList.remove('modal-location-list__item--active');
    refs.openNewYorkBtn.classList.remove('button__secondary--light');
    refs.openLosAngelesBtn.classList.remove('button__secondary--light');
    refs.openNewYorkBtn.classList.add('button__secondary--accent');
    refs.openLosAngelesBtn.classList.add('button__secondary--accent');
  }
  function toggleLosAngeles() {
    refs.losAngeles.classList.add('modal-location-list__item--active');
    refs.openLosAngelesBtn.classList.add('button__secondary--light');
    refs.openLosAngelesBtn.classList.remove('button__secondary--accent');
    refs.chicago.classList.remove('modal-location-list__item--active');
    refs.NewYork.classList.remove('modal-location-list__item--active');
    refs.openNewYorkBtn.classList.remove('button__secondary--light');
    refs.openChicagoBtn.classList.remove('button__secondary--light');
    refs.openNewYorkBtn.classList.add('button__secondary--accent');
    refs.openChicagoBtn.classList.add('button__secondary--accent');
  }
  function toggleNewYork() {
    refs.NewYork.classList.add('modal-location-list__item--active');
    refs.openNewYorkBtn.classList.add('button__secondary--light');
    refs.openNewYorkBtn.classList.remove('button__secondary--accent');
    refs.chicago.classList.remove('modal-location-list__item--active');
    refs.losAngeles.classList.remove('modal-location-list__item--active');
    refs.openLosAngelesBtn.classList.remove('button__secondary--light');
    refs.openChicagoBtn.classList.remove('button__secondary--light');
    refs.openLosAngelesBtn.classList.add('button__secondary--accent');
    refs.openChicagoBtn.classList.add('button__secondary--accent');
  }
})();
