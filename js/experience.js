const header = document.getElementById('mheader');
const anchor = document.getElementById('explore');
const disco = document.getElementById('disco');
const link = document.querySelectorAll(".link");
const list = document.querySelectorAll(".list");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};

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