function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY >= 50)header.classList.add('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

// swiper popular

var swiperPopular = new Swiper(".popular--container", {
    spaceBetween:32,
    gabCursor:true,
    centerSlides:true,
    slidesPreView:'auto',
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //value accordion

  const accordionItems =document.querySelectorAll('.value--accordion-item');

  accordionItems.forEach((item) =>{
     const accordionHeader =item.querySelector('.value--accordion-header');

     accordionHeader.addEventListener('click',()=>{
      const openItem =document.querySelector('.accordion-open')

           toggleItem(item)

           if(openItem && openItem!==item){
            toggleItem(openItem)
           }
     })
  })

  const toggleItem =(item)=>{
    const accordionContent =item.querySelector('.value--accordion-content')
    if(item.classList.contains('accordion-open')){
      accordionContent.removeAttrribute('style')
      item.classList.remove('accordion-open')
    }else{
      accordionContent.style.height =accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
  }


  //scroll esction active link


  const sections= document.querySelectorAll('section[id]')

function scrollActive(){

const scrollY = window.pageYOffset

sections.forEach(current =>{

const sectionHeight = current.offsetHeight,

sectionTop =current.offsetTop - 58,

sectionId= current.getAttribute('id')

if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){

document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')

}else{

document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.remove('active-link')

}
})
}

window.addEventListener('scroll', scrollActive);

// sow scroll up

function scrollUp() {
  const scrollup = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
      scrollup.classList.add('show-scroll');
  } else {
      scrollup.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

// dark light theme

const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';
const iconThemeMoon = 'fa-moon';  
const iconThemeSun = 'fa-sun';    

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconThemeMoon) ? iconThemeSun : iconThemeMoon;


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === iconThemeMoon ? 'add' : 'remove'](iconThemeMoon);
  themeButton.classList[selectedIcon === iconThemeSun ? 'add' : 'remove'](iconThemeSun);
}


themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  

  if (themeButton.classList.contains(iconThemeMoon)) {
    themeButton.classList.remove(iconThemeMoon);
    themeButton.classList.add(iconThemeSun);
  } else {
    themeButton.classList.remove(iconThemeSun);
    themeButton.classList.add(iconThemeMoon);
  }

  
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


// scroll reveal animation

const sr =ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:'2500',
  delay:'400',
  //rest:true
})

sr.reveal(`.home--title ,.popular--container ,.subscribe--container, .footer--container`)
sr.reveal(`.home--description ,.footer-info`,{delay:500})
sr.reveal(`.home--search`,{delay:600})
sr.reveal(`.home--value`,{delay:700})
sr.reveal(`.home--images`,{delay:800, origin:'bottom'})
sr.reveal(`.logos-img`,{interval:100})
sr.reveal(`.value--images , .contact--content`,{origin:'left'})
sr.reveal(`.value--content ,.contact--images`,{origin:'right'})