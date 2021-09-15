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
<link rel="stylesheet" href="../css/projectBoard/projectBoardList.css">
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

			<form method="get" action="./projectBoardWrite">
				<input type="submit" class="writeBtn" value="글쓰기">
			</form>
			<ul class="projectWrap">
				<li>Project
					<ul class="projectList">
						<li class="projectItem">
							<figure>
								<img src="keke.jpg">
							</figure>								
						</li>
						<li class="projectItem">
							<a href="./projectBoardInfo">1번프로젝트</a>
						</li>
						<li class="projectItem">
							1번프로젝트
						</li>
					</ul>
				</li>
			</ul>				
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardList.js" ></script>
</html>

