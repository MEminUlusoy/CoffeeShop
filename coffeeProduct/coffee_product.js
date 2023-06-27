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

rightArrow.addEventListener('click' , function(){
    sectionIndex = (sectionIndex<3)? (sectionIndex+1) : 0;
    slider.style.transform = 'translate('+ sectionIndex * -25+'%)' ;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)'; 
});
leftArrow.addEventListener('click' , function(){
    sectionIndex = (sectionIndex>0)? (sectionIndex-1) : 3;
    slider.style.transform = 'translate('+ sectionIndex * -25+'%)' ;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' +  (sectionIndex) * -25 + '%)';
});
priceP = document.getElementById("price");
var numbers = 1;
number = document.getElementById("numbers");

function nextNum(numbers){

    if(number.value < 10){
       number.value = Number(number.value)+ 1; 
    }
    else{
        number.value = number.value;
    }

    return number.value;
}
function prevNum(numbers){

    if(number.value > 1){
        number.value = Number(number.value) - 1;  
    }
    else{
        number.value = number.value;
    }
    
    return number.value;

}

g = document.querySelectorAll('.product-gr .selected');
const gram = document.querySelector('.product-gr ul');
var sectionIndex = 0; 

document.querySelectorAll('.product-gr li').forEach(function(indicator,ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        document.querySelector('.product-gr .selected').classList.remove('selected');
        indicator.classList.add('selected');
        price(indicator.id)
    });
});


function price(indid){
    console.log(indid);
    var cost = 0;
    if(indid == 3){
        var cost = 399.90; 
        var costL = cost * number.value ;
    }
    else if(indid == 2){
        var cost = 219.90; 
        var costL = cost * number.value ;
    }
    else{
        var cost = 119.90; 
        var costL = cost * number.value;
    } 
    
    return priceP.innerHTML =  costL.toFixed(2) + " TL";
  } 

function gizleGoster(article) {
    var secilenID = document.getElementById(article);
    if (secilenID.style.display == "none") {
      secilenID.style.display = "";
    } else {
      secilenID.style.display = "none";
    }
  }

const prevCrousel = document.querySelector('.prevNum');
const nextCrousel = document.querySelector('.nextNum');
const track = document.querySelector('.track');

nextCrousel.addEventListener('click' , () => {
    track.style.transform = 'translateX(-1400px)';
});

prevCrousel.addEventListener('click' , () => {
    track.style.transform = 'translateX(-0px)';
});


