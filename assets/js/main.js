const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navList = $$('.header__icon');
const userBox = $('.header__user');
const optionBtnList = $$('.post__option-btn');
const homeBtn = $('.header__home .header__icon');
const commentBtnList = $$('.post__comment');
const darkModeBtn = $('.header__dark-mode');
const mainPage = $('html');
console.log(mainPage);
// Get parent element 
function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

// Toggle header box
for (const navItem of navList) {
    navItem.onclick = function() {
        if (userBox.querySelector('.header__box').classList.contains('active')) {
            userBox.querySelector('.header__box').classList.remove('active')
        }
        if (navItem.classList.contains('active')) {
            navItem.classList.remove('active');
            navItem.nextElementSibling.classList.remove('active');
        } else {
            const navItemActive = $('.header__icon.active');
            if (navItemActive) 
            {
                navItemActive.classList.remove('active');
                navItemActive.nextElementSibling.classList.remove('active');
            }
            if (navItem.nextElementSibling) {
                navItem.classList.toggle('active');
                navItem.nextElementSibling.classList.toggle('active');
            }
        }   
    }
}

userBox.onclick = function() {
    for (const navItem of navList) {
        if (navItem.classList.contains('active')) {
            navItem.classList.remove('active');
            navItem.nextElementSibling.classList.remove('active');
        }
    }
    userBox.querySelector('.header__box').classList.toggle('active');
}

// Toggle option box

for (const optionBtn of optionBtnList) {
    optionBtn.onclick = function() {
        if (optionBtn.nextElementSibling) {
            optionBtn.classList.toggle('active');
            optionBtn.nextElementSibling.classList.toggle('active');
        }
    }
}


// window.onscroll = function() {myFunction()};

//Home button
// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     if (scrolled === 0) 
//         homeBtn.classList.add('active');
//     else
//         homeBtn.classList.remove('active');
// }


// Toggle comment box

for (const commentBtn of commentBtnList) {
    commentBtn.onclick = function() {
        const parent = getParent(commentBtn, '.post__footer');
        const commentBox = parent.querySelector('.post__comment-box');
        commentBox.classList.toggle('active');
    }
}

// Toggle dark mode
darkModeBtn.onclick = function() {
    if (mainPage.hasAttribute('data-theme'))
        mainPage.removeAttribute('data-theme');
    else
        mainPage.setAttribute('data-theme', 'dark');
}