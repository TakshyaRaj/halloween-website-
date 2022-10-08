let homeSwiper = new Swiper(".home-swiper", {

    spaceBetween: 30,

    loop: 'true',

    

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

      },

})

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){

    const header = document.getElementById('header')

    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/

let newSwiper = new Swiper(".new-swiper", {

    centeredSlides: true,

    slidesPerView: "auto",

    loop: 'true',

    spaceBetween: 16,

});
