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
<link rel="stylesheet" href="../css/home/index.css">
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
			<ul class="projectWrap">
				<li>Project
					<ul class="projectList">
						<li class="projectItem">
							<figure>
								<img>
							</figure>								
						</li>
						<li class="projectItem">
							1번프로젝트
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
</html>