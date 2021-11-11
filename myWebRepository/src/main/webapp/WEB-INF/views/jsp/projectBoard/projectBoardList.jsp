<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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
				<button type="button" class="writeBtn">글쓰기</button>
			</form>
			<ul class="projectWrap">
				<li>
					<div class="projectTitle">
						<div>Project</div>
					</div>
					<ul class="projectList">
						<li class="projectItem">
							<div class="effect"></div>
							<input class="hiddenSEQ" type="hidden" value="1123"> 
							<figure class="mainImgWrap">
								<img>
							</figure>
							<span class="subject">projectName-1</span>
							<span class="techStack">
								<span class="tag">#java</span>
							</span>
							<span class="docArea">
								공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
								국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.
							</span>
						</li>
						<c:forEach var="dto" items="${pageData}">
							<li class="projectItem">
							<div class="effect"></div>
							<input class="hiddenSEQ" type="hidden" value="${dto.seq}"> 
							<figure class="mainImgWrap">
								<img src="${dto.filePath}">
							</figure>
							<span class="subject">${dto.subject}</span>
							<span class="techStack">
								<c:set var="tags" value="${fn:split(dto.techStack, ',')}"/>
								<c:forEach var = "tag" items="${tags}">
									<span class="tag">#${tag}</span>
								</c:forEach>
							</span>
							<span class="docArea">
								공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.
								국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.
							</span>
						</li>
						</c:forEach>
					</ul>
				</li>
			</ul>
			<ul class="pagingBtnWrap">
				${pagingST}
			</ul>				
		</main>
		
	</div>
</body>
<script src="../js/projectBoard/projectBoardList.js" ></script>
<script src="../js/default/header.js"></script>
</html>

