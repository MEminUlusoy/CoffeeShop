const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;



document.querySelectorAll('.controls li').forEach(function(indicator,ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)';
    });
});


rightArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)';
}); 


leftArrow.addEventListener('click',function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;

    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)';
}); 


var intervalId = 0;
function autoSlide(){
    intervalId = setInterval(function(){
        sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicatorParents.children[sectionIndex].classList.add('selected');
        slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)';
    },2000);
};

autoSlide();

slider.addEventListener('mouseover',function(){
    clearInterval(intervalId);
});


leftArrow.addEventListener('mouseover',function(){
    clearInterval(intervalId);
});

rightArrow.addEventListener('mouseover',function(){
    clearInterval(intervalId);
});

slider.addEventListener('mouseout',function(){
    autoSlide();
});