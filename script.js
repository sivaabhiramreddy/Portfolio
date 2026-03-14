// typing animation
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

// smooth scroll and active link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    document.querySelector('nav').classList.remove('open');
  });
});

window.addEventListener('scroll', ()=>{
  const top = window.scrollY;
  document.querySelectorAll('section').forEach(sec=>{
    if(top >= sec.offsetTop - 150){
      sec.classList.add('visible');
    }
    if(top >= sec.offsetTop - 100 && top < sec.offsetTop + sec.offsetHeight){
      document.querySelector(`nav a[href="#${sec.id}"]`).classList.add('active');
    } else {
      document.querySelector(`nav a[href="#${sec.id}"]`).classList.remove('active');
    }
  });
  // back to top
  const btn = document.querySelector('.back-to-top');
  if(top > 300) btn.style.display='block'; else btn.style.display='none';
});

// mobile menu
const menuToggle = document.querySelector('.menu-toggle');
menuToggle && menuToggle.addEventListener('click',()=>{
  document.querySelector('nav').classList.toggle('open');
});

// back to top click
const backBtn = document.querySelector('.back-to-top');
if(backBtn){
  backBtn.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});
}
