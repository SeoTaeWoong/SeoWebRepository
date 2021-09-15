

window.onload = function(){
	
	
	myCarousel(5, 1);

	let mainImgFile = document.querySelector("#mainImgFile");
	let subImgFile = document.querySelector("#subImgFile");
	let subImgArea = document.querySelector(".subImgArea");
	let carouselArea = document.querySelector("#carouselArea");

	
	
	
	mainImgFile.addEventListener("change", function(){
		let formData = new FormData();
		let files = this.files[0];
		let mainImg = document.querySelector(".mainImg");
		let reader = new FileReader();
		
		reader.onload = function(e){
			let dataURL = e.target.result;
			mainImg.src = dataURL;
	    };
		reader.readAsDataURL(files);
	});
	
	
	let subImgList = [];
	let cntChange = function(subImgCnt){
		let subImgCount = document.querySelector(".subImgCnt");
		console.log(subImgCnt);
		subImgCount.textContent = subImgCnt;
	}
	
	let delTarget = function(){
		let target = document.querySelectorAll(".delBtn");
		target = target[target.length-1];
		
		target.addEventListener("click",function(){
			let parentNode = this.parentNode;
			parentNode.parentNode.removeChild(parentNode);
			let subImgCnt = parseInt(document.querySelector(".subImgCnt").textContent);
			if(subImgCnt > 0){
				subImgCnt--;
				cntChange(subImgCnt);
			}
			myCarousel(5, 2);
		})
	};
	
	
	
	
	subImgFile.addEventListener("change", function(){
		let files = this.files;
		let subImg = document.querySelector(".subImg");	
		let subImgCnt = parseInt(document.querySelector(".subImgCnt").textContent);
		subImgCnt += files.length;
		console.log(subImgCnt);
		
		if(subImgCnt <= 15){
			Array.from(files).forEach(function(file,index,addr){
				let reader = new FileReader();
				reader.onload = function(e){
					let dataURL = e.target.result;
					subImgList.push(dataURL);
					subImgArea.insertAdjacentHTML("beforeend", "<li class='subImg carouselItem'> <span class='delBtn'>x</span> <img src='"+dataURL+"'></li>");
					delTarget();
					myCarousel(5, 2);
				}
				reader.readAsDataURL(file);
			
			})
		}else {
			alert("over");
			subImgCnt -= files.length;
		}
		
		cntChange(subImgCnt);
		this.value = "";
	});
	
	
	let addBtn = document.querySelector(".addBtn");
	let docArea = 	'<li class="docArea">'+
						'<input type="text" class="docSubjectInput" placeholder="소제목 입력">'+
						'<ul>'+
							'<li class="docContentsInput" contenteditable="true" placeholder=" 내용 입력 ">'+
							'</li>'+
							'<li class="docDelete">제거</li>'+
						'</ul>'+
					'</li>';
	
	addBtn.addEventListener("click",function(){
		console.log("error");
		let docsArea = document.querySelector(".docsArea");
		docsArea.insertAdjacentHTML("beforeend", docArea);
		
		let delBtn = document.querySelectorAll(".docDelete");
		delBtn = delBtn[delBtn.length-1];
		delBtn.addEventListener("click", function(){
			let target = this.parentNode.parentNode;
			target.parentNode.removeChild(target);
		});
	})
	
}