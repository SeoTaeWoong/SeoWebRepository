window.onload=function(){
	var writeBtn = document.querySelector(".writeBtn");
	console.log(writeBtn);
	writeBtn.addEventListener("click",function(){
	
		

	});
	
	var pageBtns = document.querySelectorAll('.pageBtn');
	pageBtns.forEach(function(btn,index,arr){
		btn.addEventListener("click",function(){
			let pageNum = this.id.replace("btn","");
			if(pageNum === "Prev"){
				pageNum = parseInt(arr[1].id.replace("btn",""))-1;
			}else if(pageNum === "Next"){
				pageNum = parseInt(arr[arr.length-2].id.replace("btn",""))+1;
			}
			location.href="./projectBoardList?page="+pageNum;
		});
	});
	
	var projectItems = document.querySelectorAll(".projectItem");
	projectItems.forEach(function(project, index, arr) {
		project.addEventListener("click", function(){
			let seq = this.querySelector(".hiddenSEQ").value;
			console.log(seq);
			location.href="./projectBoardInfo";
		})
	})
};

	
