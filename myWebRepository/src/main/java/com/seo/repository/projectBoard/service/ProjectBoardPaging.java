package com.seo.repository.projectBoard.service;

public class ProjectBoardPaging {
	
	private int pageCnt;
	private int currentPage;
	private int totalPage;
	
	public void setPageCnt(int pageCnt) {
		this.pageCnt = pageCnt;
	}
	
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage=totalPage; //총페이지갯수 8페이지
	}
	
	public void createPrevBtn(StringBuffer sb) {
		sb.append("<li id='btnPrev' class='prevBtn pageBtn'> <div> < </div>   </li>");
		
	}
	
	public void createNextBtn(StringBuffer sb) {
		sb.append("<li id='btnNext' class='nextBtn pageBtn'> <div> > </div>   </li>");
	}
	
	public void createCurrentBtn(StringBuffer sb, int pageNum) {
		if(pageNum == this.currentPage) 
			sb.append("<li id='btn"+pageNum+"'class='pageBtn currentPage'><div>"+pageNum+"</div></li>");
		else
			sb.append("<li id='btn"+pageNum+"' class='pageBtn'><div>"+pageNum+"</div></li>");
	}
	
	public String createPage() {
		StringBuffer sb = new StringBuffer();
		int currentChapter = (this.currentPage+this.pageCnt-1)/this.pageCnt; //현재 챕터
		int totalChapter = (this.totalPage+this.pageCnt-1)/this.pageCnt;     //총 챕터
		
		System.out.println(currentChapter);
		System.out.println(totalChapter);
		
		
		int minPage = 1+(currentChapter-1)*this.pageCnt; //현재챕터에서 가장 작은값. 1+(currentChapter-1)*pageCnt
		int maxPage;
		if(currentChapter == totalChapter) {
			maxPage = (minPage-1)+(this.totalPage%this.pageCnt); //40페이지까지 있다고 보면 
			
		}else {
			maxPage = currentChapter*this.pageCnt;//현재챕터에서 가장 큰값 .  this.pageCnt*currentChapter
		}
		
		if(this.totalPage >= this.currentPage) {
			//총페이지보다 현재페이지값이 작거나 같을때
			if(currentChapter > 1) { //현재챕터가 1챕터보다 크면 Prev를 생성
				createPrevBtn(sb);
			}
			
			for(;minPage <= maxPage; minPage++) {
				System.out.println(minPage);
				createCurrentBtn(sb, minPage);
			}
			
			if(currentChapter < totalChapter) {
				createNextBtn(sb);
			}
			
		}
		return sb.toString();
	}
}
