<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-calable=no">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/default/reset.css">
<link rel="stylesheet" href="../css/default/default.css">
<link rel="stylesheet" href="../css/default/default_style.css">
<link rel="stylesheet" href="../css/default/header.css">
<link rel="stylesheet" href="../css/default/menuDropDown.css">
<link rel="stylesheet" href="../css/projectBoard/projectBoardWrite.css">
<link rel="stylesheet" href="../css/boardEditer/boardEditer.css">
<link rel="stylesheet" href="../css/carousel/carousel.css">
</head>
<body>
	<div id="container">
		<header>
			<jsp:include page="../default/header.jsp"/>
		</header>
		<div class="menuOver">
			<jsp:include page="../default/menuDropDown.jsp"/>
		</div>
		<main class="mainWrap">
			<div class="projectInfoWrap">
				<figure class="mainImgArea">
					<img class="mainImg" src="../image/NoImg.png" alt="메인 이미지" >
					<div class="filebox">
						<label class="mainImgBtn" for="mainImgFile">이미지 추가</label>
						<input type="file" id="mainImgFile" accept="image/*" >
					</div>
				</figure>
				<ul class="infoArea">
					<li class="projectSubject"><span><input type="text" placeholder="제목을 입력해 주세요"></span></li>
					<li class="projectTerm">
						<strong>- 프로젝트 기간  -</strong>
						<span>Start date: 
							<input type="date"/>
						</span>
						
						<span>End date: 
							<input type="date"/>
						</span>
					</li>
					<li class="technologiesUsed">
						<strong>- 기술스택 -</strong>
						<span class="inputArea">
							<input type="text" placeholder="태그 입력">
						</span>
						<span class="technologiesTag">
							<b>#javascript</b> <b>#html</b> <b>#css</b>
						</span>
					</li>
				</ul>
				<div class="subImgTitleArea">
					<div class="subImgTitle">Sub IMAGE <span>(<span class="subImgCnt">0</span>/15)</span> </div>
					<div class="subImgBtn">
						<label for="subImgFile">이미지 추가</label>
						<input type="file" id="subImgFile" multiple="multiple" accept="image/*">
					</div>
				</div>
				<div id="carouselArea">
					<ul id="carousel" class="subImgArea carousel">
					</ul>
					<div class='btn nextBtn'></div>
					<div class='btn prevBtn'></div>
				</div>
				<div class="videoArea">
					<video autoplay controls preload="metadata">
						<source src="" type="video/ogv">
						<source src="" type="video/mp4">
						<source src="" type="video/webm">
						해당 브라우저는 ogv, mp4, webm을 지원하지 않습니다.
					</video>
				</div>
				<div class="docsWrap">
					<ul class ="docsArea">
						<li class="docs">
							<span class="docsTitle">Docs</span> 
							<button class="addBtn">추가</button>
						</li>
					</ul>
				</div>
				<div class="reviewArea">
					<jsp:include page="../boardEditer/boardEditer.jsp"/>
				</div>
				<input class="complateBtn" type="button" value="작성 완료"/>
			</div>
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardWrite.js" ></script>
<script src="../js/carousel/carousel.js"></script>
</html>

