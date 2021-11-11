

window.onload = function(){
	
	
	myCarousel(5, 1);

	let mainImgFile = document.querySelector("#mainImgFile");
	let subImgFile = document.querySelector("#subImgFile");
	let subImgArea = document.querySelector(".subImgArea");
	let carouselArea = document.querySelector("#carouselArea");

	mainImgFile.addEventListener("change", function(){
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
		subImgCount.textContent = subImgCnt;
	}
	
	let delTarget = function(){
		let target = document.querySelectorAll(".delBtn");
		target = target[target.length-1];
		
		target.addEventListener("click",function(){
			let parentNode = this.parentNode;
			let tmpNode = parentNode;
			let _i = 0;
			while((tmpNode = tmpNode.previousElementSibling) != null){
				_i++;
			}
			subImgList.splice(_i,1)
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
		
		if(subImgCnt <= 15){
			Array.from(files).forEach(function(file,index,addr){
				let reader = new FileReader();
				reader.onload = function(e){
					let dataURL = e.target.result;
					subImgList.push(file);
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
	
	let videoFile = document.querySelector("#videoFile");
	videoFile.addEventListener("change", function(){
		let file = this.files;
		let reader = new FileReader();
		let fileName ="";
		reader.onload = function(e){
			let dataURL = e.target.result;
			fileName=dataURL;
			let videoPreview = document.querySelector(".videoPreview");
			videoPreview.insertAdjacentHTML("beforeend", 	'<video controls preload="metadata">'+
																'<source src="'+fileName+'" type="video/ogv">'+
																'<source src="'+fileName+'" type="video/mp4">'+
																'<source src="'+fileName+'" type="video/webm">'+
															'</video>');
		}
		reader.readAsDataURL(file[0]);
	});
	
	
	
	
	let addBtn = document.querySelector(".addBtn");
	let docArea = 	'<li class="docArea">'+
						'<input type="text" class="docSubjectInput" placeholder="소제목 입력" >'+
						'<ul>'+
							'<li class="docContentInput" contenteditable="true" placeholder=" 내용 입력 " >'+
							'</li>'+
							'<li class="docDelete">제거</li>'+
						'</ul>'+
					'</li>';
	
	addBtn.addEventListener("click",function(){
		let docsArea = document.querySelector(".docsArea");
		docsArea.insertAdjacentHTML("beforeend", docArea);
		
		let delBtn = document.querySelectorAll(".docDelete");
		delBtn = delBtn[delBtn.length-1];
		delBtn.addEventListener("click", function(){
			
			let target = this.parentNode.parentNode;
			target.parentNode.removeChild(target);
		});
	})
	
	let techTagList = [];
	let techTagInput = document.querySelector(".techTagInput");
	techTagInput.addEventListener("keyup", function(e){
		if(e.code === "Enter"){
			let text = techTagInput.value;
			techTagList.push(text);
			let tag = 	"<span class='tag'>"+
							"<span class='tagName'>#"+text+"</span>"+
							"<span class='delTag'>x</span>"+
						"</span>";
			let technologiesTag = document.querySelector(".technologiesTag");
			technologiesTag.insertAdjacentHTML("beforeend",tag);
			let delTarget = document.querySelectorAll(".delTag");
			delTarget = delTarget[delTarget.length-1]; 
			delTarget.addEventListener("click",function(){
				let parent = this.parentNode;
				console.log(parent);
				let tmp = parent;
				let _i = 0;
				while((tmp = tmp.previousElementSibling)!= null){
					_i++;
				}
				techTagList.splice(_i,1);
				parent.parentNode.removeChild(parent);
			});
			this.value="";
		}
	});
	
	
	let complateBtn = document.querySelector(".complateBtn");
	complateBtn.addEventListener("click", function(){
		//데이터 입력 확인은 나중에하자
		let formData = new FormData();
		let _mainImgFile = mainImgFile.files[0];
		let _subject = document.querySelector("#subject").value;
		let _startDate = document.querySelector("#startDate").value;
		let _endDate = document.querySelector("#endDate").value;
		let _techList = techTagList;
		let _videoFile = videoFile.files[0]
		let _gitAddr = document.querySelector("#gitAddr").value;
		let _docArea = document.querySelectorAll(".docArea");
		let _docsList = []// List에 Map을 담아서
		_docArea.forEach(function(docs, index, arr1){
			console.log(index);
			let __subject = docs.querySelector(".docSubjectInput").value;
			let __content = docs.querySelector(".docContentInput").innerHTML;
			_docsList.push({
							'docSubject' : __subject,
							'docContent' : __content
				});
		});
		
		let _review = document.querySelector(".textArea").innerHTML;
		
		formData.append("mainImgFile", _mainImgFile);
		formData.append("subject", _subject);
		formData.append("startDate", _startDate);
		formData.append("endDate", _endDate);
		formData.append("techList", _techList);
		formData.append("videoFile", _videoFile);
		formData.append("gitAddr", _gitAddr);
		formData.append("jDocs", JSON.stringify(_docsList));
		formData.append("review", _review);
		subImgList.forEach(function(img,index,arr1){
			formData.append("subImgFile",img);
			
		});
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function(){
			if(this.status==200 && this.readyState == this.DONE){
				let data = this.responseText;
				location.href = data;
			}
		}
		
		
		xhr.open("POST","./projectBoardWriteInsert", true);
		xhr.send(formData);
	});
	
	
}