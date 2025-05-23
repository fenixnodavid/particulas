window.human = false;

var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticulas = 30;
var pointerX = 0;
var pointesY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxtouchPoints) ? 'touchstart' :
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCancasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2 ;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContesxt('2d').scale(2,2);
}
