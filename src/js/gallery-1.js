var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
  itemSelector: '.grid__wrap',
  columnWidth: 5,
  gutter: 2,
  fitWidth: true,
  transitionDuration: '0.35s',
});

grid.addEventListener('click', function (event) {
  if (!matchesSelector(event.target, '.grid__img')) {
    return;
  }
  var itemContent = event.target;
  var itemElem = itemContent.parentNode;
  itemElem.classList.toggle('is-expanded');
  msnry.layout();
});
