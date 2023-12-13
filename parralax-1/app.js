

// let pic =  document.getElementById('pic');

// window.addEventListener('scroll',() =>{
//     let val = window.scrollY;

//     pic.style.top = val * -2.5+ 'px'
// });


// version two with scroll stop at the bottom of the image
let pic = document.getElementById('pic');
let fig = document.querySelector('.fig');

window.addEventListener('scroll', () => {
    let val = window.scrollY;
    let figTop = fig.getBoundingClientRect().top;
    let picHeight = pic.offsetHeight-170;
    let windowHeight = window.innerHeight;

    let maxScroll = figTop + picHeight - windowHeight;

    if (val <= maxScroll) {
        pic.style.top = val * -2.5 + 'px';
    } else {
        pic.style.top = maxScroll ;
    }
});
