const text = "Python Django Developer | Cloud Enthusiast";
let i = 0;
function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,50);
  }
}
typing();

// smooth scroll & active link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior:'smooth'});
    // close mobile menu if open
    document.querySelector('nav').classList.remove('open');
  });
});

window.addEventListener('scroll', ()=>{
  const sections = document.querySelectorAll('section');
  const top = window.scrollY;
  sections.forEach(sec=>{
    if(top >= sec.offsetTop - 100 && top < sec.offsetTop + sec.offsetHeight) {
      document.querySelector(`nav a[href="#${sec.id}"]`)
              .classList.add('active');
    } else {
      document.querySelector(`nav a[href="#${sec.id}"]`)
              .classList.remove('active');
    }
  });
  // back-to-top visibility
  const btn = document.querySelector('.back-to-top');
  if(top > 300){ btn.style.display = 'block'; } else { btn.style.display = 'none'; }
});

// mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
menuToggle && menuToggle.addEventListener('click',()=>{
  document.querySelector('nav').classList.toggle('open');
});

// section fade-in observer
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);
document.querySelectorAll('section').forEach(sec=>observer.observe(sec));

// back to top click
const backBtn = document.querySelector('.back-to-top');
if(backBtn){
  backBtn.addEventListener('click', e=>{
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
}