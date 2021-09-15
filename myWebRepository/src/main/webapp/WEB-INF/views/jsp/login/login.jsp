<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-calable=no">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/default/default.css">
<link rel="stylesheet" href="../css/default/default_style.css">
<link rel="stylesheet" href="../css/default/header.css">
<link rel="stylesheet" href="../css/default/menuDropDown.css">
<link rel="stylesheet" href="../css/login/login.css">

</head>
<body>
	<div id="container">
		<header>
			<jsp:include page="../default/header.jsp"/>
		</header>
		<div class="menuOver hide">
			<jsp:include page="../default/menuDropDown.jsp"/>
		</div>
		
		<main class="loginWrap">
			<form class="loginForm">
				<label>
					<span>ID</span> 
					<input type="text">
				</label>
				<label>
					<span>PW</span>
					<input type="password">
				</label>
				<button>Login</button>
			</form>
		</main>
	</div>
</body>
</html>