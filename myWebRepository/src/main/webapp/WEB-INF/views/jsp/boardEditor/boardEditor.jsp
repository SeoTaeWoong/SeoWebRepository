<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	
	</head>
	<body>
			<ul class="textEditor">
				<li class="fontArea">
					<select class="fontFamily">
						<option>돋움</option>
						<option>굴림</option>
					</select>
					<select class="fontSize">
						<option>8pt</option>
						<option>10pt</option>
						<option>12pt</option>
					</select>
					<span class="mark01">
						<button class="fontWeight" title="굵기">B</button>
						<button class="fontUnderscore"  title="밑줄">U</button>
						<button class="fontItalics" title="기울기">I</button>
						<button class="fontStrikeout" title="취소선">S</button>
						<button class="fontColor" title="글씨색">C</button>
						<button class="fontMark" title="배경색">M</button>
					</span>
					
					<span class="mark02">
						<img class="textAlingLeft"  title="왼쪽정렬"/>
						<img class="textAlingCenter" title="가운데정렬"/>
						<img class="textAlingRight" title="오른쪽정렬"/>
						<img class="numberList"  title="숫자리스트"/>
						<img class="circleList"  title="기본리스트"/>
						<img class="textIndent"  title="들여쓰기"/>
						<img class="textOutdent" title="내어쓰기"/>
					</span>
					
					<span class="mark03">
						<img class="lineHeight" title="줄간격"/>
					</span>
					
					<span class="mark04">
						<img class="textLink" title="링크"/>
						<img class="textSearch" title="검색/바꾸기"/>
					</span>
					
				</li>
				<li class="textArea" contenteditable="true">
				</li>
				<li class="hiddenBox">
				</li>
				
			</ul>
			<div id="tmpBackGroundArea"></div>
			
			<div class="imgClickBorder " data-imgRect></div>
			<div id="imgClickRectTop" class="imgClickRect " data-imgRect data-mouseover="top"></div>
			<div id="imgClickRectTopLeft" class="imgClickRect " data-imgRect data-mouseover="topLeft"></div>
			<div id="imgClickRectTopRight" class="imgClickRect " data-imgRect data-mouseover="topRight"></div>
			<div id="imgClickRectLeft" class="imgClickRect " data-imgRect data-mouseover="left"></div>
			<div id="imgClickRectRight" class="imgClickRect " data-imgRect data-mouseover="right"></div>
			<div id="imgClickRectBottom" class="imgClickRect " data-imgRect data-mouseover="bottom"></div>
			<div id="imgClickRectBottomLeft" class="imgClickRect " data-imgRect data-mouseover="bottomLeft"></div>
			<div id="imgClickRectBottomRight" class="imgClickRect " data-imgRect data-mouseover="bottomRight"></div>
			<div class="hiddenEventRect " data-imgRect></div>
			
	</body>
</html>