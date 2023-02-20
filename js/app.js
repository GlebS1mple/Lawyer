/* SPOILER */
const spoilerTitles = document.querySelectorAll(".block__titleblock");
spoilerTitles.forEach(item => { item.addEventListener("click", spoilerToggle) });
spoilerTitles.forEach(item => { item.addEventListener("click", arrowChangeSpoiler) });
function spoilerToggle() {
    this.nextElementSibling.classList.toggle("spoiler__active");
}
function arrowChangeSpoiler() {
    const currentBlockArrow = this.querySelector(".block__arrowblock");
    currentBlockArrow.classList.toggle("block__activearrowblock");
}
/* SWIPER */
const swiper = new Swiper('.swiper', {
    initialSlide: 5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        767: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1600: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1750: {
            slidesPerView: 4,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    slidesPerView: 4,
    slidesPerGroup: 4
});
/* ANIMATION */
const animItems = document.querySelectorAll('._anim__items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect()
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}