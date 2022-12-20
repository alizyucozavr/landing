document.addEventListener("mousemove", parallax)

function parallax(e) {
    this.querySelectorAll(".img").forEach(img => {
        const speed = img.getAttribute("data-speed");

        const x =(window.innerHeight - e.pageX * speed) / 100;
        const y =(window.innerHeight - e.pageY * speed) / 100;

        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

let tabs = document.querySelector('.tarifs_tabs'),
    tabsTitle = document.querySelectorAll('.tarifs_tabs_title')
    tariPrice = document.querySelectorAll('.number')
    tariDuring = document.querySelectorAll('.during')

tabs.addEventListener('click', e => {
    tabsTitle.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');

    if (e.target.dataset.time === 'year') {
        tariPrice.forEach(price => price.innerHTML *=12);
        tariDuring.forEach(during => during.innerHTML = "/year");
    }
    
    if (e.target.dataset.time === 'month') {
        tariPrice.forEach(price => price.innerHTML /=12);
        tariDuring.forEach(during => during.innerHTML = "/month");
    }

});

/* -=- Scroll yo -=- */
let btnUP = document.querySelector('.scrollTop');

btnUP.addEventListener('click', function(){
    scrollToY(0)
})

document.addEventListener('scroll', function(){
    let cl = btnUP.classList;
    let threshold = window.innerHeight / 2;
    window.scrollY > threshold ? cl.add('buttonUP-open') : cl.remove('buttonUP-open');
});

function scrollToY(top){
    window.scrollTo({
        top,
        behavior: "smooth"
    })
}
