
var carouselMove = 0;
var thisPage = 1;
var carouselCnt = true;
var carouselMoveWidth;



var myCarousel = function(cnt,opt){
	
	let nextBtn = document.querySelector('.nextBtn');
	let prevBtn = document.querySelector('.prevBtn');
	let carouselArea = document.querySelector("#carouselArea");
	let carousel = document.querySelector("#carousel");
	let item = document.querySelectorAll(".carouselItem");
	
	let itemLength = item.length;
	let page = parseInt((itemLength+cnt-1)/cnt)===0 ? 1: parseInt((itemLength+cnt-1)/cnt);
	let carouselAreaWidth = carouselArea.offsetWidth;
	let carouselWidth= carouselAreaWidth*page;
	let carouselImageWidth = parseInt((carouselAreaWidth/cnt)/100)*100
	let carouselGap = (carouselAreaWidth-(carouselImageWidth*cnt))/(cnt-1);
	    carouselWidth= carouselWidth+(carouselGap*page);
	
	
	const pageCheck = function(){
		item = document.querySelectorAll(".carouselItem");
		itemLength = item.length;
		page = parseInt((itemLength+cnt-1)/cnt)===0 ? 1: parseInt((itemLength+cnt-1)/cnt);

		if(1 === page){
			nextBtn.classList.add('hide');
			prevBtn.classList.add('hide');
		}else if(thisPage <= page){
			nextBtn.classList.remove('hide');
			prevBtn.classList.remove('hide');
			if(thisPage === 1){
				prevBtn.classList.add('hide');
			}else if(thisPage === page){
				nextBtn.classList.add('hide');
			}
		}
		if(thisPage > page){
			console.log(thisPage,",", page);
			thisPage = page;
			carouselMove = carouselMoveWidth *(-(thisPage-1));
			console.log(carouselMove);
			carousel.style.setProperty('--carousel-left', carouselMove+"px");
		}
	}
	
	pageCheck()
	
	
	
	if(opt===1){
		carousel.style.setProperty('--carousel-width', carouselWidth+'px');
		carousel.style.setProperty('--carousel-gap', carouselGap+'px');
		carousel.style.setProperty('--carousel-img-width', carouselImageWidth+'px');
		carouselMoveWidth = carouselAreaWidth+carouselGap;
		
		
		item.forEach(function(img, index, arr1){
			img.style.setProperty('--carousel-img-width', carouselImageWidth+'px');
		})
		
		if(itemLength !== 0){
			carouselArea.style.height = carouselImageWidth+"px";
		}
		
		
		const nextSlide = function(){
			carouselMove-=(carouselMoveWidth);
			carousel.style.setProperty('--carousel-left', carouselMove+"px");
			thisPage++;
			pageCheck()
		}
		
		const prevSlide = function(){
			carouselMove+=(carouselMoveWidth);
			carousel.style.setProperty('--carousel-left', carouselMove+"px");
			thisPage--;
			pageCheck()
		}
		
		nextBtn.addEventListener("click",nextSlide);
		prevBtn.addEventListener("click",prevSlide);
		carouselCnt = false;
		
		
		
	}else if(opt === 2){
		carousel.style.setProperty('--carousel-width', carouselWidth+'px');
		carousel.style.setProperty('--carousel-gap', carouselGap+'px');
		carousel.style.setProperty('--carousel-img-width', carouselImageWidth+'px');
		carouselMoveWidth = carouselAreaWidth+carouselGap;
		
		
		item.forEach(function(img, index, arr1){
			img.style.setProperty('--carousel-img-width', carouselImageWidth+'px');
		})
		
		if(itemLength !== 0){
			carouselArea.style.height = carouselImageWidth+"px";
		}else{
			carouselArea.style.height = "auto";
		}
		
	}
	
}