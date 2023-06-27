const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
const carouselW  = document.querySelector('.main-header-inner-slider').offsetWidth;

let i=0;

next.addEventListener('click',function(){
    i++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${i*carouselW}px)`;
    if(track.offsetWidth-(i*carouselW)<carouselW){
        next.classList.add('hidden');
    }

});

prev.addEventListener('click',function(){
    i--;
    next.classList.remove('hidden');
    track.style.transform = `translateX(-${i*carouselW}px)`;
    if(i === 0){
        prev.classList.remove('show');
    }

});

// middle slider


const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
const slider = document.querySelector('.middle-slider');
const liParents=document.querySelector('.controls ul');

// indicator bütün li leri tutuyor
document.querySelectorAll('.controls li').forEach(function(indicator,ind){
   
    indicator.addEventListener('click',function(){
        sectionIndex=ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform  =  'translate('+ (sectionIndex) * -20 + '%)';
        // ind li lerin index 'ini tutuyor


    });


});

var sectionIndex  = 0;


rightArrow.addEventListener('click',function(){
    sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    liParents.children[sectionIndex].classList.add('selected');
    //  liParents.children li yi tutuyor
    // sectionIndex++;
    slider.style.transform  =  'translate('+ (sectionIndex) * -20 + '%)';


    

});

leftArrow.addEventListener('click',function(){
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 4 ;
    document.querySelector('.controls .selected').classList.remove('selected');
    liParents.children[sectionIndex].classList.add('selected');
    // sectionIndex--;
    slider.style.transform  =  'translate('+ (sectionIndex) * -20 + '%)';
    

});

// belli bir süreyle birseyler yapmamızı saglıyor "setInterval" fonksiyonu.ikinci parametresi süreyi belirtiyor.

// her bir fotoraf 2 sn de geçiyor.

// sliderin sürekli geçiş halinde sürekli başa dönüyor ve 2000ms 2 sn eşit

// 

var intervalId = 0;


function autoSlide(){
    intervalId = setInterval(function(){
        sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        liParents.children[sectionIndex].classList.add('selected');
        //  liParents.children li yi tutuyor
        // sectionIndex++;
        slider.style.transform  =  'translate('+ (sectionIndex) * -20 + '%)';

    },2000);


};
autoSlide();


slider.addEventListener('mouseover',function(){
    clearInterval(intervalId);

});

slider.addEventListener('mouseout',function(){
   autoSlide();
});

rightArrow.addEventListener('mouseover',function(){
    clearInterval(intervalId);

});
rightArrow.addEventListener('mouseout',function(){
    autoSlide();
 });
 

leftArrow.addEventListener('mouseover',function(){
    clearInterval(intervalId);

});
leftArrow.addEventListener('mouseout',function(){
    autoSlide();
 });
 






