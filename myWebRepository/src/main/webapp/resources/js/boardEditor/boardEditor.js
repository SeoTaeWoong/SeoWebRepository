let textEdit = document.querySelector(".textEditor");
let fontSize = document.querySelector(".fontSize");
let fontWeight = document.querySelector(".fontWeight");
let textArea = document.querySelector(".textArea");
let fontUnderscore = document.querySelector(".fontUnderscore");


fontUnderscore.addEventListener("click", function(){
	let selection = document.getSelection();
	let range = selection.getRangeAt(0);
	
})

fontWeight.addEventListener("click", function(){

	let target = document.getSelection();
	let range = target.getRangeAt(0);
	let startOffset = range.startOffset;
	let endOffset = range.endOffset;
	let node = document.createElement('div');
	let text = '<span style="font-weight:bold">'+(target.toString())+"</span>";
	
	let str = range.extractContents();
	
//	node.innerHTML=text;
//	targetRange.deleteContents();
//	targetRange.insertNode(node.childNodes[0]);
})


fontSize.addEventListener("change",function(){
	let target = document.getSelection();
	let targetRange = target.getRangeAt(0);
	let startOffset = targetRange.startOffset;
	let endOffset = targetRange.endOffset;
	
	
	let node = document.createElement('span');
	let text = '<span style="font-size:'+this.value+'">'+(target.toString())+"</span>";
	node.innerHTML=text;
	targetRange.deleteContents();
	targetRange.insertNode(node.childNodes[0]);
	
	this.value="";
});
	
//carousel.style.setProperty('--carousel-img-width', carouselImageWidth+'px');
//textArea.style.


//클립보드 붙여넣기 이벤트 시작

	let target = document.querySelector(".textAlingLeft");
	let seq = 0;
	const asyncGetImgData = function(file){
		
		return new Promise(function(resolve, reject) { 
			let reader = new FileReader();
			let newIMG = document.createElement("img");
			reader.onerror = function(){
				reader.abort();
				reject(new DOMException("Problem parsing input file"));
			}
			
			reader.onload = function(e){
				let dataURL = e.target.result;
				newIMG.src = dataURL;
				newIMG.tabIndex = "0";
				resolve(newIMG);
			}				
			reader.readAsDataURL(file);
		});
	}
	
	document.querySelector(".fontMark").addEventListener("click", function(){
		let sel = document.getSelection();
		let node = sel.anchorNode;
		let elem = document.querySelector("#test121");
		let range = sel.getRangeAt(0);
		let parent = document.createElement('b');
		let tmpArea = document.querySelector("#tmpBackGroundArea");
		tmpArea.innerHTML = "<div>안녕반가워</div>";
		console.log(tmpArea.childNodes[0]);
		range.insertNode(tmpArea.childNodes[0]);
	})
	
	
	

	//--------------------------------------------------------------------------------------------------------------------
	
	textArea.addEventListener("focus",function(){
		let aa = document.createElement("span");
		textArea.appendChild(aa);
		aa.focus();
		let imgRect = document.querySelectorAll("[data-imgRect]");
		imgRect.forEach(function(rect, index, arr){
			rect.classList.add("imgRectHide");
		});
	})
	
	const hiddenEventRect = document.querySelector(".hiddenEventRect");
	const rectBorder = document.querySelector(".imgClickBorder");
	const miniRectSize = {
			width : hiddenEventRect.offsetWidth,
			height : hiddenEventRect.offsetHeight
	}
	var selectIMG;
	
	let miniRectTop = document.querySelector("#imgClickRectTop");
	let miniRectRight = document.querySelector("#imgClickRectRight");
	let miniRectBottom = document.querySelector("#imgClickRectBottom");
	let miniRectLeft = document.querySelector("#imgClickRectLeft");
	let miniRectTopRight = document.querySelector("#imgClickRectTopRight");
	let miniRectTopLeft = document.querySelector("#imgClickRectTopLeft");
	let miniRectBottomRight = document.querySelector("#imgClickRectBottomRight");
	let miniRectBottomLeft = document.querySelector("#imgClickRectBottomLeft");
	
	const imgClickFunc = function(self){
		let imgRect = document.querySelectorAll("[data-imgRect]");
		document.addEventListener("keyup",function(){
			if(event.keyCode == 46){
				self.remove();
				imgRect.forEach(function(rect, index, arr){
					rect.classList.add("imgRectHide");
				});
			}
		});
		imgRect.forEach(function(rect, index, arr){
			rect.classList.remove("imgRectHide");
		});
		selectIMG = self;
		const width = self.width;
		const height = self.height;
		const minX = self.offsetLeft + textEdit.offsetLeft;
		const minY = self.offsetTop + textEdit.offsetTop;
		
		const location = {
				top : { x : minX+(width/2)-(miniRectSize.width/2), y: minY-(miniRectSize.height/2) },
				bottom : { x : minX+(width/2)-(miniRectSize.width/2), y: minY+height-(miniRectSize.height/2) },
				left : { x : minX-(miniRectSize.width/2), y: minY+(height/2)-(miniRectSize.height/2) },
				right : { x : minX+width-(miniRectSize.width/2), y: minY+(height/2)-(miniRectSize.height/2) },
				topLeft : { x : minX-(miniRectSize.width/2), y: minY-(miniRectSize.height/2) },
				topRight : { x : minX+width-(miniRectSize.width/2), y: minY-(miniRectSize.height/2) },
				bottomLeft : { x : minX-(miniRectSize.width/2), y: minY+height-(miniRectSize.height/2) },
				bottomRight : { x : minX+width-(miniRectSize.width/2), y: minY+height-(miniRectSize.height/2) }
		}

		rectBorder.style.width = width+"px";
		rectBorder.style.height = height+"px";
		rectBorder.style.setProperty("--imgClickBorderMinX", minX+"px");
		rectBorder.style.setProperty("--imgClickBorderMinY", minY+"px");
		miniRectTop.style.setProperty("--imgClickRectTopMinX", location.top.x+"px");
		miniRectTop.style.setProperty("--imgClickRectTopMinY", location.top.y+"px");
		miniRectBottom.style.setProperty("--imgClickRectBottomMinX", location.bottom.x+"px");
		miniRectBottom.style.setProperty("--imgClickRectBottomMinY", location.bottom.y+"px");
		miniRectLeft.style.setProperty("--imgClickRectLeftMinX", location.left.x+"px");
		miniRectLeft.style.setProperty("--imgClickRectLeftMinY", location.left.y+"px");
		miniRectRight.style.setProperty("--imgClickRectRightMinX", location.right.x+"px");
		miniRectRight.style.setProperty("--imgClickRectRightMinY", location.right.y+"px");
		miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinX", location.topLeft.x+"px");
		miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinY", location.topLeft.y+"px");
		miniRectTopRight.style.setProperty("--imgClickRectTopRightMinX", location.topRight.x+"px");
		miniRectTopRight.style.setProperty("--imgClickRectTopRightMinY", location.topRight.y+"px");
		miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinX", location.bottomLeft.x+"px");
		miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinY", location.bottomLeft.y+"px");
		miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinX", location.bottomRight.x+"px");
		miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinY", location.bottomRight.y+"px");		
	}
	
	let mouseovertarget = {
			target:null,
			direction : null
	};
	
	document.addEventListener("mouseover", function(event){
		if(event.target.dataset.mouseover != undefined && mouseovertarget != event.target){
			if(mouseovertarget != null && hiddenEventRect.classList.contains(mouseovertarget.id)){
				hiddenEventRect.classList.remove(mouseovertarget.id);
			}

			mouseovertarget.target = event.target;
			mouseovertarget.direction = event.target.dataset.mouseover;
			hiddenEventRect.style.visibility= "visible";	
			hiddenEventRect.style.setProperty("--hiddenClickMiniRectMinX", mouseovertarget.target.offsetLeft +"px");
			hiddenEventRect.style.setProperty("--hiddenClickMiniRectMinY", mouseovertarget.target.offsetTop + "px");
		}
	})
	
	
	hiddenEventRect.addEventListener("mousedown", function(){
		event.preventDefault();
		let moveEvent = function(){
			let moveY = event.pageY - (miniRectSize.height /2);
			let moveX = event.pageX - (miniRectSize.width /2);
			let minWidth = textEdit.offsetLeft + textArea.offsetLeft + (miniRectSize.width/2);
			let minHeight = textEdit.offsetTop + textArea.offsetTop + (miniRectSize.height/2);
			let maxWidth = textEdit.offsetLeft + textArea.offsetLeft + textArea.offsetWidth -30;
			let maxHeight = textEdit.offsetTop + textArea.offsetTop + textArea.offsetHeight -5;
			
			if(moveX > minWidth && moveX < maxWidth &&
			   moveY > minHeight && moveY < maxHeight){
				hiddenEventRect.style.setProperty("--hiddenClickMiniRectMinY", moveY + "px");
				hiddenEventRect.style.setProperty("--hiddenClickMiniRectMinX", moveX +"px");
				let rectBorderHeight;
				let rectBorderWidth;
				let tmpX;
				let tmpY;
				let ratio = selectIMG.offsetWidth/selectIMG.offsetHeight;
				
				switch (mouseovertarget.direction) {
				case "top":					
					rectBorderHeight = miniRectBottom.offsetTop-moveY;
					if(rectBorderHeight < 30) break;
					
					rectBorder.style.height = rectBorderHeight + "px";
					rectBorder.style.setProperty("--imgClickBorderMinY", moveY+4 + "px");
					miniRectTop.style.setProperty("--imgClickRectTopMinY",moveY + "px");
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinY",moveY +"px");
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinY",moveY +"px");
					
					miniRectRight.style.setProperty("--imgClickRectRightMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					break;
					
				case "right":
					rectBorderWidth = moveX - rectBorder.offsetLeft + (miniRectSize.width/2);
					if(rectBorderWidth < 30) break;
					
					miniRectRight.style.setProperty("--imgClickRectRightMinX", moveX+"px");
					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinX", moveX+"px");
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinX", moveX+"px");					
					miniRectBottom.style.setProperty("--imgClickRectBottomMinX", rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectTop.style.setProperty("--imgClickRectTopMinX", rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					rectBorder.style.width = rectBorderWidth +"px"; 
					
					break;
				
				case "bottom":
					rectBorderHeight = moveY - rectBorder.offsetTop + (miniRectSize.height/2);
					if(rectBorderHeight < 30) break;
					
					miniRectBottom.style.setProperty("--imgClickRectBottomMinY",moveY + "px");
					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinY",moveY +"px");
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinY",moveY +"px");
					miniRectRight.style.setProperty("--imgClickRectRightMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					rectBorder.style.height = rectBorderHeight + "px";
					break;
					
				case "left":
					rectBorderWidth = miniRectRight.offsetLeft-moveX;
					if(rectBorderWidth < 30) break;
					
					rectBorder.style.width = rectBorderWidth + "px";
					rectBorder.style.setProperty("--imgClickBorderMinX", moveX+4 + "px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinX",moveX + "px");
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinX",moveX +"px");
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinX",moveX +"px");
					
					miniRectTop.style.setProperty("--imgClickRectTopMinX",rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectBottom.style.setProperty("--imgClickRectBottomMinX"	,rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					break;
				
				case "topLeft":
					
					rectBorderWidth = miniRectBottomRight.offsetLeft-moveX;
					rectBorderHeight = miniRectBottomRight.offsetTop-moveY;
					if(rectBorderWidth < 30 || rectBorderHeight < 30) break;
					
					if(rectBorderWidth >= (rectBorderHeight*ratio)){
						rectBorderHeight = (rectBorderWidth*(selectIMG.offsetHeight/selectIMG.offsetWidth));
						tmpX = moveX;
						tmpY = miniRectBottomRight.offsetTop - rectBorderHeight;
					}else{
						rectBorderWidth = (rectBorderHeight*ratio);
						tmpX = miniRectBottomRight.offsetLeft - rectBorderWidth;
						tmpY = moveY;
					}
					rectBorder.style.setProperty("--imgClickBorderMinX", tmpX+4 + "px");
					rectBorder.style.setProperty("--imgClickBorderMinY", tmpY+4 + "px");
					
					rectBorder.style.width = rectBorderWidth + "px";
					rectBorder.style.height = rectBorderHeight + "px";
					
					
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinX",tmpX +"px");
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinX",tmpX +"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinX",tmpX + "px");
					
					
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinY", tmpY +"px");
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinY", tmpY +"px");
					miniRectTop.style.setProperty("--imgClickRectTopMinY",tmpY + "px");

					miniRectTop.style.setProperty("--imgClickRectTopMinX",rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2) + "px");
					miniRectRight.style.setProperty("--imgClickRectRightMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectBottom.style.setProperty("--imgClickRectBottomMinX"	,rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					
					break;
				case "topRight":
					
					rectBorderWidth = moveX - rectBorder.offsetLeft + (miniRectSize.width/2);
					rectBorderHeight = miniRectBottomLeft.offsetTop-moveY;
					if(rectBorderWidth < 30 || rectBorderHeight < 30) break;
					
					if(rectBorderWidth >= (rectBorderHeight*ratio)){
						rectBorderHeight = (rectBorderWidth*(selectIMG.offsetHeight/selectIMG.offsetWidth));
						tmpX = moveX;
						tmpY = miniRectBottomRight.offsetTop - rectBorderHeight;
					}else{
						rectBorderWidth = (rectBorderHeight*ratio);
						tmpX = miniRectBottomLeft.offsetLeft + rectBorderWidth;
						tmpY = moveY
					}

					rectBorder.style.setProperty("--imgClickBorderMinY", tmpY+4 + "px");
					
					rectBorder.style.width = rectBorderWidth + "px";
					rectBorder.style.height = rectBorderHeight + "px";
					
					
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinX",tmpX +"px");
					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinX",tmpX +"px");
					miniRectRight.style.setProperty("--imgClickRectRightMinX",tmpX + "px");
					
					
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinY",tmpY +"px");
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinY", tmpY +"px");
					miniRectTop.style.setProperty("--imgClickRectTopMinY",tmpY + "px");
					miniRectTop.style.setProperty("--imgClickRectTopMinX",rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectRight.style.setProperty("--imgClickRectRightMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2) + "px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectBottom.style.setProperty("--imgClickRectBottomMinX"	,rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					break;
					
				case "bottomLeft":
					
					rectBorderWidth = miniRectTopRight.offsetLeft-moveX;
					rectBorderHeight = moveY- rectBorder.offsetTop;
					if(rectBorderWidth < 30 || rectBorderHeight < 30) break;
					
					if(rectBorderWidth >= (rectBorderHeight*ratio)){
						rectBorderHeight = (rectBorderWidth*(selectIMG.offsetHeight/selectIMG.offsetWidth));
						tmpY = rectBorder.offsetTop + rectBorderHeight -4;
						tmpX = moveX;
					}else{
						rectBorderWidth = (rectBorderHeight*ratio);
						tmpX = miniRectTopRight.offsetLeft - rectBorderWidth;
						tmpY = moveY-4;
					}
					
					rectBorder.style.setProperty("--imgClickBorderMinX", tmpX+4 + "px");

					rectBorder.style.width = rectBorderWidth + "px";
					rectBorder.style.height = rectBorderHeight + "px";
					
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinX",tmpX +"px");
					miniRectTopLeft.style.setProperty("--imgClickRectTopLeftMinX",tmpX +"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinX",tmpX + "px");
					
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinY", tmpY +"px");
					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinY",tmpY +"px");
					miniRectBottom.style.setProperty("--imgClickRectBottomMinY", tmpY + "px");
					
					miniRectBottom.style.setProperty("--imgClickRectBottomMinX",rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2) + "px");
					miniRectRight.style.setProperty("--imgClickRectRightMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectTop.style.setProperty("--imgClickRectTopMinX"	,rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					break;
					
				case "bottomRight":
					
					rectBorderWidth = moveX - rectBorder.offsetLeft;
					rectBorderHeight = moveY - rectBorder.offsetTop;
					if(rectBorderWidth < 30 || rectBorderHeight < 30) break;
					
					if(rectBorderWidth >= (rectBorderHeight*ratio)){
						rectBorderHeight = (rectBorderWidth*(selectIMG.offsetHeight/selectIMG.offsetWidth));
						tmpX = moveX-4;
						tmpY = rectBorder.offsetTop + rectBorderHeight -4;
					}else{
						rectBorderWidth = (rectBorderHeight*ratio);
						tmpX = miniRectBottomLeft.offsetLeft + rectBorderWidth;
						tmpY = moveY-4;
					}
					rectBorder.style.width = rectBorderWidth + "px";
					rectBorder.style.height = rectBorderHeight + "px";
					
					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinX",tmpX +"px");
					miniRectTopRight.style.setProperty("--imgClickRectTopRightMinX",tmpX +"px");
					miniRectRight.style.setProperty("--imgClickRectRightMinX",tmpX + "px");

					miniRectBottomRight.style.setProperty("--imgClickRectBottomRightMinY", tmpY +"px");
					miniRectBottomLeft.style.setProperty("--imgClickRectBottomLeftMinY",tmpY +"px");
					miniRectBottom.style.setProperty("--imgClickRectBottomMinY",tmpY + "px");

					miniRectBottom.style.setProperty("--imgClickRectBottomMinX",rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					miniRectRight.style.setProperty("--imgClickRectRightMinY",rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2) + "px");
					miniRectLeft.style.setProperty("--imgClickRectLeftMinY"	,rectBorder.offsetTop + ((rectBorderHeight-miniRectSize.height)/2)+"px");
					miniRectTop.style.setProperty("--imgClickRectTopMinX"	,rectBorder.offsetLeft + ((rectBorderWidth-miniRectSize.width)/2)+"px");
					
					break;
				default:
					break;
				}
				
			}else{
				document.removeEventListener("mousemove",moveEvent);
				hiddenEventRect.style.visibility = "hidden";
				selectIMG.style.width = rectBorder.style.width;
				selectIMG.style.height = rectBorder.style.height;
				imgClickFunc(selectIMG);
			}
			
		};
		
		document.addEventListener("mousemove",moveEvent); 

		hiddenEventRect.addEventListener("mouseup", function(){
			document.removeEventListener("mousemove", moveEvent);
			this.style.visibility = "hidden";
			selectIMG.style.width = rectBorder.style.width;
			selectIMG.style.height = rectBorder.style.height;
			imgClickFunc(selectIMG);
		});
	})
	
	hiddenEventRect.addEventListener("dragstart", function(){
		return false;
	});
	

	//------------------------------------------------------------------------------------------------------------------
	const currentCursor = (function(){
		return function(){
			
			const selection = document.getSelection();
			const range = selection.getRangeAt(0);
			const start = range.startOffset;
			const end = range.endOffset
			const text = textArea.textContent;
			const before = text.slice(0, start);
			const after = text.slice(end);
			
		}
	})
	
	textArea.addEventListener("paste",async function(e){
		e.preventDefault();
		const clipboardData = e.clipboardData;
		const types = clipboardData.types;
		let getData={
				type: "",
				data: "",
				result: "",
		};
		types.every(function(type, index, addr){
			if(type === "text/html"){
				getData.type="text/html";
				getData.data = clipboardData.getData("text/html");
				return false;								
			}else if(type === "Files"){
				getData.type="Files";
				getData.data=clipboardData.items[0].getAsFile();
				return false;				
			}
			return true;				
		});
		
		if(getData.type ==="text/html"){
			let rmStr = {
					remark1 : /<!--StartFragment-->/,
					remark2 : /<!--EndFragment-->/,
			}
			getData.result = ((getData.data.replace(rmStr.remark1, "<span class='unique_clip_num_"+seq+"'>")).replace(rmStr.remark2, "</span>"));
			let tmpElement  = document.querySelector("#tmpBackGroundArea");
			tmpElement.innerHTML = getData.result;
			let tmpNode = tmpElement.children[0];
			if(tmpNode.querySelectorAll(".textEditor")[0]){
				let _tmpNode = tmpNode.querySelectorAll(".textEditor")[0];
				if(_tmpNode.querySelectorAll(".textArea")[0]){
					let __tmpNode = _tmpNode.querySelectorAll(".textArea")[0]
					while(__tmpNode.firstChild){
						tmpNode.insertBefore(__tmpNode.firstChild,null)
					}
					tmpNode.removeChild(_tmpNode);
				}
			}
			if(!document.getSelection().getRangeAt(0).collapsed){
				document.getSelection().getRangeAt(0).deleteContents();
			}
			document.getSelection().getRangeAt(0).insertNode(tmpNode);
			document.getSelection().collapseToStart();
		
			let imgsTag = this.querySelector(".unique_clip_num_"+seq).querySelectorAll("img");
			seq++
			if(typeof imgsTag === 'undefined'){
				return ;
			}

			
			imgsTag.forEach(function(img,index,arr){
				img.tabIndex = "0";
				img.addEventListener("focus",imgClickFunc(img));
			});
			
		}else if(getData.type ==="Files"){
			try{
				getData.result = await asyncGetImgData(getData.data);
				document.getSelection().getRangeAt(0).insertNode(getData.result);
				textArea.insertAdjacentElement("beforeend", getData.result);
				getData.result.addEventListener("focus",imgClickFunc(this))
			} catch (e) {
			}
		}
		
	})


//클립보드 붙여넣기 이벤트 종료