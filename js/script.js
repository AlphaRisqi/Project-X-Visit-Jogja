const header = document.getElementById('mheader');
const anchor = document.getElementById('explore');
const disco = document.getElementById('disco');
const link = document.querySelectorAll(".link");
const list = document.querySelectorAll(".list");
const bg = [
'../img/bg/10-things-to-do-in-yogyakarta-as-a-solo-traveler.jpg',
'../img/bg/aerial-view-of-borobudur-temple-at-sunrise-near-yogyakarta-indonesia-video.jpg',
'../img/bg/parangtritis_beach.jpg',
// '../img/bg/',
];
const bgslide = document.getElementById('bg');
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};
let indexnow = 0;

function changeBG() {
  bgslide.style.backgroundImage = `url('${bg[indexnow]}')`;
  indexnow = (indexnow + 1) % bg.length;
}

changeBG();
setInterval(changeBG, 5000);

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('scrolled');
      disco.classList.add('scrolled');
      link.forEach(link => link.classList.add('scrolled'));
      list.forEach(list => list.classList.add('scrolled'));
    } else {
      header.classList.remove('scrolled');
      disco.classList.remove('scrolled');
      link.forEach(link => link.classList.remove('scrolled'));
      list.forEach(list => list.classList.remove('scrolled'));
    }
  });
}, options);

headerObserver.observe(anchor);

