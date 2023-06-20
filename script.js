let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

const searchBox = document.getElementById('search-box');
const boxes = document.querySelectorAll('.box');


function searchElements(){
  const searchTerm=searchBox.value.toLowerCase();

  boxes.forEach((box)=>{
    const title = box.querySelector('h3').innerText.toLowerCase();
    if (title.includes(searchTerm)){
      box.style.display = 'block';
    }
  });
}
searchBox.addEventListener('input', searchElements);


menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


let section=document.querySelector('section');
let navLinks=document.querySelector('header .navbar a')

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec=>{
      let top=window.scrollY;
      let height=sec.offsetHeight;
      let offset=sec.offsetTop-150;
      let id=sec.getAttribure('id');

      if(top=>offset && top<offset+height){
        navLinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    
    loop:true,
    breakpoints:{
      0:{
        slidePerView:1,
      },
      640:{
        slidePerView:2,
      },
      768:{
        slidePerView:2,
      },
      1024:{
        slidePerView:3,
      },
    },
  });
  
