<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<div class="topMenuWrap">
		<div id="titleArea">
			<div class="boxIcon"></div>
			<div class="title"> Taewoong Seo</div>
			<div class="jobTitle">&nbsp /&nbsp beginner developer</div>
		</div>
		
		<div class="contents">
			<div id="aboutMeBtn" class="select" onclick="location.href='./'">ABOUT ME</div>
			<div id="projectBtn" onclick="location.href='./projectBoardList'">PROJECT</div>
			<div id="contactBtn" onclick="location.href='./contact'">CONTACT</div>
		</div>
	</div>
<!-- 		var items = document.querySelectorAll(".locationItem");
		let location = window.location.href;
		let item;
		if(location.indexOf("/projectBoard")){
			item = document.querySelector("#projectBtn");
		}else if(location.indexOf("/contact")){
			item = document.querySelector("#contactBtn");
		}else{
			item = document.querySelector("#aboutMeBtn");
		}
			item.classList.add("select");
		})
 -->