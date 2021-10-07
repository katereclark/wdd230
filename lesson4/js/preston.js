document.querySelector('.bar-icon').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('responsive');
}, false);

window.onresize = () => {
    if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
};

const date = new Date(Date.now());

document.querySelector("#preston-copyright-year").textContent = date.getFullYear();

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector("#current-date").textContent = date.toLocaleDateString('en-UK', options);