<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	
	</head>
	<body>
		<ul class="textEditer">
						<li class="fontArea">
							<div id="underscore"></div>
							<select class="fontFamily">
								<option>글꼴</option>
								<option>돋움</option>
								<option>굴림</option>
							</select>
							<select class="fontSize">
								<option>크기</option>
								<option>8pt</option>
								<option>10pt</option>
								<option>12pt</option>
							</select>
							<span class="mark01">
								<img class="fontWeight" src="as.jpg" title="굵기"/>
								<img class="fontUnderscore" src="as.jpg" title="밑줄"/>
								<img class="fontItalics" src="as.jpg" title="기울기"/>
								<img class="fontStrikeout" src="as.jpg" title="취소선"/>
								<img class="fontColor" src="as.jpg" title="글씨색"/>
								<img class="fontMark" src="as.jpg" title="배경색"/>
							</span>
							
							<span class="mark02">
								<img class="textAlingLeft" src="as.jpg" title="왼쪽정렬"/>
								<img class="textAlingCenter" src="as.jpg" title="가운데정렬"/>
								<img class="textAlingRight" src="as.jpg" title="오른쪽정렬"/>
								<img class="numberList" src="as.jpg" title="숫자리스트"/>
								<img class="circleList" src="as.jpg" title="기본리스트"/>
								<img class="textIndent" src="as.jpg" title="들여쓰기"/>
								<img class="textOutdent" src="as.jpg" title="내어쓰기"/>
							</span>
							
							<span class="mark03">
								<img class="lineHeight" src="as.jpg" title="줄간격"/>
							</span>
							
							<span class="mark04">
								<img class="textLink" src="as.jpg" title="링크"/>
								<img class="textSearch" src="as.jpg" title="검색/바꾸기"/>
							</span>
							
						</li>
						<li class="textWrap">
							<div class="textArea" contenteditable="true">
								<p>hi</p>
							</div>
						</li>
					</ul>
	</body>
</html>