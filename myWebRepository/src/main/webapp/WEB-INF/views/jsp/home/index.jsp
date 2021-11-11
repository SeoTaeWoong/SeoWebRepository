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
		<div class="backColor">
		</div>
		<main class="mainWrap">
			<div class="profile">
				<figure class="mainImgArea">
					<img src=../image/NoImg.png/>
				</figure>
				<div class="introduce">
					<div class="lastName">Taewoong</div>
					<div class="firstName">Seo</div>
					<div class="effect"></div>
					<div class="jobTitle">B E G I N N E R &nbsp D E V E L O P E R</div>
				</div>
				<div class="profileFooter">
					<div class="callArea">
						<label>
							<span class="callIcon"></span>
							<span class="call">010-000-000</span>
						</label>
					</div>
					<div class="addrArea">
						<label>
							<span class="addrIcon"></span>
							<span class="addr">xxxxx@xxx.xxx</span>
						</label>
					</div>
				</div>
			</div>
			<div class="greetings">
				<div class="mainGreetings">Hello</div>
				<div class="links">
					<div>Here's who I am & what I do</div>
					<div class="resumeBtn">resume</div>
					<div class="projectBtn">project</div>
				</div>
				<div class="aboutMe">
					I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
				</div>
				<div class="techStack">
					STACK<br/>
					<span class="stack">
						#JAVA
					</span>
					<span class="stack">
						#JAVASCRIPT
					</span>
					<span class="stack" >
						#HTML5
					</span>
					<span class="stack">
						#CSS3
					</span>
					<span class="stack">
						#ORACLE
					</span>
					
				</div>
			</div>		
		</main>
		
	</div>
</body>
</html>