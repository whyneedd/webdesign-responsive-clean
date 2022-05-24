const humbger = document.querySelector(".humbger");
const humbgermenu = document.querySelector(".humbgermenu");


humbger.onclick = function() {
    humbger.classList.toggle("active");
    humbgermenu.classList.toggle("active");
    
}