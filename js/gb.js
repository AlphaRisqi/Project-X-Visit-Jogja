const header = document.getElementById('mheader');
const anchor = document.getElementById('explore');
const disco = document.getElementById('disco');
const link = document.querySelectorAll(".link");
const list = document.querySelectorAll(".list");
const gb = document.getElementById('gb');
const summarycontent = document.getElementById('summarycontent');
const after = document.getElementById('aftersubmit')
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};

// Header
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

// GB Summary
gb.addEventListener('submit', function(event) {
  alert("Thank you for submitting the guest book");

  after.classList.remove('gb');
  after.classList.add('gb' ,'aftersubmit');

  event.preventDefault();
  const form = new FormData(event.target);
  const name = form.get('fullname');
  const email = form.get('email');
  const work = form.get('work') ||  "Not Specified";
  const exp = form.get('experience') || "-";

  gb.reset();

  summarycontent.classList.remove('gbplaceholder');
  summarycontent.classList.add('summarycontent-active');

  summarycontent.innerHTML = `
    <div class="item"><strong>Name:</strong> ${escapeHTML(name)}</div>
    <div class="item"><strong>Email:</strong> ${escapeHTML(email)}</div>
    <div class="item"><strong>work:</strong> ${escapeHTML(work)}</div>
    <div class="item"><strong>Your Experiences:</strong> ${escapeHTML(exp)}</div>
  `;
});

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
  tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
};

const aboutme = document.getElementById('aboutme');
const profile = document.getElementById('profile');
const close = document.getElementById('close');
aboutme.addEventListener('click', () =>{
  profile.style.display = 'flex';
});
close.addEventListener('click', () =>{
  profile.style.display = 'none';
});