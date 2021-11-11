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
<link rel="stylesheet" href="../css/carousel/carousel.css">
<link rel="stylesheet" href="../css/boardEditor/boardEditor.css">
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
			<div class="docTitle">Project Template</div>
			<ul class="projectWriteWrap">
				<li class="btnArea">
					<input class="submitBtn" type="button" value="submit"/>
				</li>
				<li class="titleArea">
					<span class="title">Title</span>
					<ul class="titleInputArea">
						<li><input class="titleInput" type="text" placeholder="프로젝트 제목을 입력 해 주세요."></li>
					</ul>
				</li>
				<li class="mainImageArea">
					<span class="title">Main Image</span>
					<ul class="mainImgBtnArea">
						<li class="mainImgBtn">
							<label for="hiddenUploadBtn">UPLOAD</label>
							<input id="hiddenUploadBtn" type="file">
						</li>
						<li class="fileArea">
							<span>첨부 파일 : &nbsp</span>
							<div class="fileName"> null</div>
							<div class="fileDelBtn">
								<div class="effect1"></div>
								<div class="effect2"></div>
							</div>
						</li>
						<li class="imgPreview">
							<img class="mainIMG" src="">
						</li>
					</ul>
				</li>
				<li class="teams">
					<span class="title">Team's</span>
					<ul class="memberArea">
						<li class="memberInsert">
							<span>이름 :</span>
							<input class="memberName" type="text" placeholder="이름을 입력해주세요.">
						</li>
						<li class="memberList">
							<ul class="memberHeader">
								<li class="columns">
									<span>No</span>
									<span>Name</span>
									<span>역할</span>
									<span>기여도</span>
								</li>
							</ul>
							<ul class="memberBody">
							</ul>
						</li>
					</ul>
				</li>
				<li class="projectTermArea">
					<span class="title">ProjectTerm</span>
					<ul>
						<li>
							<div>-시작일 : </div>
							<input type="date" class="startDate">
							<div>-종료일 :</div>
							<input type="date" class="endDate">
						</li>
					</ul>
				</li>
				<li class="contentsArea">
					<span class="title">Contents</span>
					<!--<div class="addContent">단락 추가</div>-->
					<ul class="contents">
						<jsp:include page="../boardEditor/boardEditor.jsp"/>
					</ul>
				</li>
				
			</ul>
		</main>
		
	</div>
</body>
<script src="../js/boardEditor/boardEditor.js" ></script>
<script src="../js/projectBoard/projectBoardWrite.js" ></script>
</html>

