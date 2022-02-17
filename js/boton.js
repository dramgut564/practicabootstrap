let  botonSubir = document.getElementById('botonSubir');
botonSubir.addEventListener("click", funcionScroll);

window.onscroll = function(){
    funcionScroll();
}

function funcionScroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
      }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}