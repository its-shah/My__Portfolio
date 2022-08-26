/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabcontent = document.querySelectorAll('[data-content]')

      tabs.forEach (tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            tabcontent.forEach(tabcontents => {
                tabcontents.classList.remove("skills__active")
            })
            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })
            tab.classList.add('skills__active')
        })
      })

      

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkwork = document.querySelectorAll('.work__item')

function activework() { 
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener("click", activework))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElemnt);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    console.log(portfolioItem);
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}



/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent= this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// get all sections that have an id defined 

const sections = document.querySelectorAll("section[id]");

// add ann event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let srollY = window.pageYOffset;
    // Now we loop through sections to get height, wop and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        secitonId = current.getAttribute("id");
        // If our current scrll position enters the space where current section on screen is odd .active class to corresponding navigation link, else remove it
        // -To know which link needs on active class, we use secitonId variable we are getting while looping through sections as an selector

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + secitonId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + secitonId + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/

