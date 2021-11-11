/**
 * 
 */

window.onload = function(){

	let uploadBtn = document.querySelector("#hiddenUploadBtn");
	let mainImgFile;
	uploadBtn.addEventListener("change",function(){
		mainImgFile = this.files[0];
		
		let fileArea = document.querySelector(".fileArea");
		let fileName = fileArea.querySelector(".fileName");
		let mainIMG = document.querySelector(".mainIMG");
		fileName.innerHTML = mainImgFile.name;
	})
	
	let fileDelBtn = document.querySelector(".fileDelBtn");
	fileDelBtn.addEventListener("click",function(){
		if(mainImgFile != null){
			let fileName = document.querySelector(".fileName");
			fileName.innerHTML = "null";
			mainImgFile=null;
		}
	});
	
	let memberName = document.querySelector(".memberName");
	let memNo =1;
	let memList = [];
	memberName.addEventListener("keyup",function(e){
		switch (e.key) {
		case "Enter":
			let contents = "<li>"+
								"<span>"+(memNo++)+"</span>"+
								"<span>"+this.value+"</span>"+
							"</li>";
			let memberBody = document.querySelector(".memberBody");
			memberBody.insertAdjacentHTML("beforeend", contents);
			memList.push({
				"no" : memNo,
				"name" : this.value
			});
			this.value="";
			break;
		default:
			break;
		}
	})
	
//	let editorNo = 1;
//	let addContent = document.querySelector(".addContent");
//	addContent.addEventListener("click", function(){
//		let contents = '<li class="content">'+
//							'<div class="seq">- No'+(editorNo)+'<input type="hidden" class="hiddenSeq" value="'+editorNo+'"></div>'+
//							'<input class="subject" type="text" placeholder="소제목 입력">'+
//							'<ul class="editor">'+
//								'<li class="items">'+
//									'<span class="imgBtn">이미지 추가</span>'+
//								'</li>'+
//								'<li class="textArea" contenteditable="true" placeholder="내용을 입력하세요.">'+
//								'</li>'+ 
//							'</ul>'+
//						'</li>';
//		contents =  '<li class="content">'+
//							'<div class="seq">- No'+(editorNo)+'<input type="hidden" class="hiddenSeq" value="'+editorNo+'"></div>'+
//							'<input class="subject" type="text" placeholder="소제목 입력">'+
//							'<jsp:include page="../boardEditer/boardEditer.jsp"/>'+
//						'</li>';
//		let target = document.querySelector(".contentsArea").querySelector(".contents");
//		target.insertAdjacentHTML("beforeend", contents);
//		editorNo++;
		//target.innerHTML+=contents;	
//	});
	
	let submitBtn = document.querySelector(".submitBtn");
	submitBtn.addEventListener("click",function(){
	
		let title = document.querySelector(".titleInput").value;
		let mainIMG = mainImgFile;
		let memberJSON = JSON.stringify(memList);
		let startDate = document.querySelector(".startDate").value;
		let endDate = document.querySelector(".endDate").value;
		let contentList = [];

		let contents = document.querySelectorAll(".content");
		contents.forEach(function(item, index, addr){
			let _seq = item.querySelector(".hiddenSeq").value;
			let _subject = item.querySelector(".subject").value;
			let _textArea = item.querySelector(".textArea").innerHTML;
			contentList.push({
				"seq" : _seq,
				"subject" : _subject,
				"textArea" : _textArea
			});
		})
		let contentJSON = JSON.stringify(contentList);
		
		let formData = new FormData();
		formData.append("title", title);
		formData.append("mainIMG", mainIMG);
		formData.append("memberJSON", memberJSON);
		formData.append("startDate", startDate);
		formData.append("endDate", endDate);
		formData.append("contentJSON", contentJSON);
		
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(this.status==200 && this.readyState == this.DONE){
				let data = this.responseText;
				location.href = data;
			}
		}
		xhr.open("POST","./projectBoardWrite_insert", true);
		xhr.send(formData);
	})
	
	
	
}