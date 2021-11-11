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
<link rel="stylesheet" href="../css//defaultdefault_style.css">
<link rel="stylesheet" href="../css/default/header.css">
<link rel="stylesheet" href="../css/default/menuDropDown.css">
<link rel="stylesheet" href="../css/projectBoard/projectBoardInfo2.css">
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
					<img>
				</figure>
				<div class="projectTitle">제목을 입력하세요</div>
				<div class="projectMember">Seo</div>
				<div class="whiteSpace"></div>
				<div class="projectTerm">2021/09/12 ~ 2021/09/25</div>
			</div>
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardInfo.js" ></script>
<script src="../js/carousel/carousel.js"></script>
</html>

