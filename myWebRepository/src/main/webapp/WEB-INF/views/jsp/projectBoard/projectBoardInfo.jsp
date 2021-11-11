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
<link rel="stylesheet" href="../css/projectBoard/projectBoardInfo.css">
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
					<img src="??.png" alt="메인 이미지">
				</figure>
				<ul class="infoArea">
					<li class="projectSubject"><span><strong>JAVASCRIPT를 이용한 슈팅게임</strong></span></li>
					<li class="projectTerm">-  프로젝트 기간  -<span></span></li>
					<li class="technologiesUsed">- 기술스택 -<span></span></li>
				</ul>
				<div id="carouselArea">
					<ul id="carousel" class="subImgArea carousel">
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
						<li class="subImg carouselItem"> <img> </li>
					</ul>
					<div class='btn nextBtn'></div>
					<div class='btn prevBtn'></div>
				</div>
				<ul class="contentsArea">
					<li class="contentsTab">
						<ul>
							<li class="tabSelec"><span>Video</span></li>
							<li><span>Play</span></li>
							<li class="dump"></li>
						</ul>
					</li>
					<li class="contents">
						<video autoplay controls preload="metadata">
							<source src="" type="video/ogv">
							<source src="" type="video/mp4">
							<source src="" type="video/webm">
						</video>
					</li>
				</ul>
				<div class="docsWrap">
					<ul class ="docsArea">
						<li class="docs">
							<span class="docsTitle">Docs</span> 
						</li>
						<li class="docArea">
							<strong class="docSubject">게임 설명</strong>
							<ul>
								<li class="docContents">
									<p>고전게임 비행기 슈팅게임을 모티브로 제작했습니다.</p>
									<p>사용자는 적의 탄환을 피해 보스몬스터를 죽이면 게임이 끝나게 되며</p>
									<p>z키를 이용해 폭탄 스킬을 사용 할 수 있습니다.</p> 
								</li>
							</ul>
						</li>
						
						<li class="docArea">
							<strong class="docSubject">게임 설명</strong>
							<ul>
								<li class="docContents">
									<p>고전게임 비행기 슈팅게임을 모티브로 제작했습니다.</p>
									<p>사용자는 적의 탄환을 피해 보스몬스터를 죽이면 게임이 끝나게 되며</p>
									<p>z키를 이용해 폭탄 스킬을 사용 할 수 있습니다.</p> 
								</li>
							</ul>
						</li>
						
						<li class="docArea">
							<strong class="docSubject">게임 설명</strong>
							<ul>
								<li class="docContents">
									<p>고전게임 비행기 슈팅게임을 모티브로 제작했습니다.</p>
									<p>사용자는 적의 탄환을 피해 보스몬스터를 죽이면 게임이 끝나게 되며</p>
									<p>z키를 이용해 폭탄 스킬을 사용 할 수 있습니다.</p> 
								</li>
							</ul>
						</li>
						
						<li class="docArea">
							<strong class="docSubject">게임 설명</strong>
							<ul>
								<li class="docContents">
									<p>고전게임 비행기 슈팅게임을 모티브로 제작했습니다.</p>
									<p>사용자는 적의 탄환을 피해 보스몬스터를 죽이면 게임이 끝나게 되며</p>
									<p>z키를 이용해 폭탄 스킬을 사용 할 수 있습니다.</p> 
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="reviewArea">헤잉</div>
			</div>
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardInfo.js" ></script>
<script src="../js/carousel/carousel.js"></script>
</html>

