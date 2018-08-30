var a = document.querySelector('#btn1');

var b = document.querySelector('#btn2');

var c = document.querySelector('#btn3');

var d = document.querySelector('#btn4');

var e = document.querySelector('#btn5');

var yello = document.querySelector('#yellow')

var blu = document.querySelector('#blue');

var rad = document.querySelector('#red');

var gray = document.querySelector('#grey');

var gree = document.querySelector('#green')

var cnt1 = document.querySelector('#content1');

var cnt2 = document.querySelector('#content2');

var cnt3 = document.querySelector('#content3');

var cnt4 = document.querySelector('#content4');

var cnt5 = document.querySelector('#content5');

a.addEventListener('click', function(){
    blu.style.width = '160%';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    e.style.display = 'initial';
    cnt5.style.display = 'none';
    
});


b.addEventListener('click',function(){

    yello.style.width = '130%';
    a.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
    blu.style.display = 'none';
    cnt2.style.display = 'initial';
    e.style.display = 'initial';
    cnt5.style.display = 'none';
    


});


c.addEventListener('click', function(){

    blu.style.display = 'none';
    yello.style.display = 'none';
    rad.style.width = '110%';
    d.style.display = 'none';
    cnt3.style.display = 'initial';
    e.style.display = 'initial';
    cnt5.style.display = 'none';
});


d.addEventListener('click', function(){

    blu.style.display = 'none';
    yello.style.display = 'none';
    rad.style.display = 'none';
    gray.style.width = '70%';
    cnt4.style.display = 'initial';
    e.style.display = 'initial';
    cnt5.style.display = 'none';
});


e.addEventListener('click', function(){
    location.reload();
});





