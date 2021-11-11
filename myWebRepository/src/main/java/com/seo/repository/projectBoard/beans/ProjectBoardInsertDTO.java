package com.seo.repository.projectBoard.beans;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public class ProjectBoardInsertDTO {
	private String title;
	private MultipartFile mainIMG;
	private List<Map<String, String>> memberList;
	private String startDate;
	private String endDate;
	private List<Map<String, String>> contentList;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public MultipartFile getMainIMG() {
		return mainIMG;
	}
	public void setMainIMG(MultipartFile mainIMG) {
		this.mainIMG = mainIMG;
	}
	public List<Map<String, String>> getMemberList() {
		return memberList;
	}
	public void setMemberList(List<Map<String, String>> memberList) {
		this.memberList = memberList;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public List<Map<String, String>> getContentList() {
		return contentList;
	}
	public void setContentList(List<Map<String, String>> contentList) {
		this.contentList = contentList;
	}
	
	@Override
	public String toString() {
		
		return this.title + ", " + this.mainIMG + ", " + this.memberList + ", " + this.startDate + ", " + this.endDate + ", " + this.contentList;
	}
	
	
}
