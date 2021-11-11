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
		
			<div class="mainTitle">Project - 글쓰기</div>
			<div class="projectInfoWrap">
				<figure class="mainImgArea">
					<img class="mainImg" src="../image/NoImg.png" alt="메인 이미지" >
					<div class="mainImgBtn">
						<label class="mainImgBtn" for="mainImgFile">이미지 추가</label>
						<input type="file" id="mainImgFile" accept="image/*" >
					</div>
				</figure>
				<ul class="infoArea">
					<li class="projectSubject"><span><input type="text" placeholder="제목을 입력해 주세요" id="subject"></span></li>
					<li class="projectTerm">
						<strong>- 프로젝트 기간  -</strong>
						<span>Start date: 
							<input type="date" id="startDate"/>
						</span>
						
						<span>End date: 
							<input type="date" id="endDate"/>
						</span>
					</li>
					<li class="technologiesUsed">
						<strong>- 기술스택 -</strong>
						<span class="inputArea">
							<input class="techTagInput" type="text" placeholder="태그 입력">
						</span>
						<span class="technologiesTag">
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
				<ul class="contentsArea">
					<li class="contents">
						<div>- 비디오 파일 -</div>
						<ul>
							<li class="videoFileBtn">
								<label class="videoFile" for="videoFile">업로드</label>
								<input type="file" accept="video/*" id="videoFile">
							</li>
							<li class="videoPreview">
								
							</li>
						</ul>
					</li>
					<li class="contents">
						<div>- gitHub address -</div>
						<ul>
							<li>
								<input type="url" id="gitAddr">
							</li>
						</ul>
					</li>
				</ul>
				<div class="docsWrap">
					<ul class ="docsArea">
						<li class="docs">
							<span class="docsTitle">Docs</span> 
							<button class="addBtn">추가</button>
						</li>
					</ul>
				</div>
				<div class="reviewArea">
					<jsp:include page="../boardEditor/boardEditor.jsp"/>
				</div>
				<input class="complateBtn" type="button" value="작성 완료"/>
			</div>
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardWrite.js"  ></script>
<script src="../js/carousel/carousel.js"></script>
<script src="../js/boardEditer/boardEditer.js"></script> 
</html>

