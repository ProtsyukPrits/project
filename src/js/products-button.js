
// Block
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}




//Batoon & menu


let menuBtn = document.querySelector('.products__button');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let menuBtnB = document.querySelector('.products__btn');
let menuB = document.querySelector('.menuB');
menuBtnB.addEventListener('click', function(){
	menuBtnB.classList.toggle('activeB');
	menuB.classList.toggle('activeB');
})

let menuBtnC = document.querySelector('.products__but');
let menuC= document.querySelector('.menuC');
menuBtnC.addEventListener('click', function(){
	menuBtnC.classList.toggle('activeC');
	menuC.classList.toggle('activeC');
})