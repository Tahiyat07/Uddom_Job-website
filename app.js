//swiper'
var swiper = new Swiper(".My",
    {
        loop:true,
        autoplay:{
            delay:3500,
            disableOnIntrection: false,
        },
        slidePerView:1,
        spaceBetween:10,
        pagination:{
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            640:{
                slidesPerView:2,
                spaceBetween:20,
            },
            768:{
                slidePerView:3,
                spaceBetween:40,
            },
            1024:{
                slidePerView:3,
                spaceBetween:50,
            }
        }
    })
