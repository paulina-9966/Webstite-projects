const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.slides-container');


prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);

let counter = 0;

function prevSlide() {
	container.animate([{opacity:'0.1'},{opacity:'1.0'}],
		{duration:500,fill:'forwards'});
	if(counter ===0) {
	counter = 3;
	}
	
	counter--;
	
	if (counter === 3 || counter === 2) {
        container.style.backgroundImage = `url(img/promo-${counter}.jpg`
    } else {
        container.style.backgroundImage = `url(img/promo-${counter}.png`
    }
	
	
}


function nextSlide() {
	container.animate([{opacity:'0.1'},{opacity:'1.0'}],
		{duration:1000,fill:'forwards'});
	if(counter ===3) {
	counter = -1;
	}
	
	counter++;
	
	if (counter === 3 || counter === 2) {
        container.style.backgroundImage = `url(img/promo-${counter}.jpg`
    } else {
        container.style.backgroundImage = `url(img/promo-${counter}.png`
    }
}
// prevBtn.style.display = "none"