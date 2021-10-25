let pageTitle = null;
let scrolling = false;
let returningToTop = false;

window.onscroll = function() {
  if (!returningToTop) {
    scrolling = true;
  }
}

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    scrollFunction();
  }
}, 300);

function scrollFunction() {
  if (pageTitle === null) {
    pageTitle = document.querySelector("#page-title");
    pageTitle.addEventListener('click', (e) => {
      e.target.classList.remove('link-unhidden');
      returningToTop = true;
      setTimeout(() => {
        returningToTop = false;
      }, 500);
    });
  }
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    console.log('bigger than 80');
    pageTitle.classList.add('link-unhidden');
    // pageTitle.style.opacity = '100%';
    // pageTitle.style['pointer-events'] = 'all';
  } else {
    pageTitle.classList.remove('link-unhidden');
    // pageTitle.style.opacity = '0%';
    // pageTitle.style['pointer-events'] = 'none';
  }
}