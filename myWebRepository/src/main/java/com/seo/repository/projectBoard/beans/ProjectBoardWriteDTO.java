package com.seo.repository.projectBoard.beans;

import java.util.List;
import java.util.Map;

public class ProjectBoardWriteDTO {
	
	private int seq;
	private Map<String,Object> mainImgMap;
	private String subject;
	private String startDate;
	private String endDate;
	private List<String> techList;
	private List<Map<String,Object>> subImgListMap;
	private Map<String,Object> videoMap;
	private String gitAddr;
	private List<Map<String,String>> docsListMap;
	private String review;
	
	
	
	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}



	public Map<String, Object> getMainImgMap() {
		return mainImgMap;
	}



	public void setMainImgMap(Map<String, Object> mainImgMap) {
		this.mainImgMap = mainImgMap;
	}



	public String getSubject() {
		return subject;
	}



	public void setSubject(String subject) {
		this.subject = subject;
	}



	public List<String> getTechList() {
		return techList;
	}



	public void setTechList(List<String> techList) {
		this.techList = techList;
	}



	public List<Map<String, Object>> getSubImgListMap() {
		return subImgListMap;
	}



	public void setSubImgListMap(List<Map<String, Object>> subImgListMap) {
		this.subImgListMap = subImgListMap;
	}



	public Map<String, Object> getVideoMap() {
		return videoMap;
	}



	public void setVideoMap(Map<String, Object> videoMap) {
		this.videoMap = videoMap;
	}



	public String getGitAddr() {
		return gitAddr;
	}



	public void setGitAddr(String gitAddr) {
		this.gitAddr = gitAddr;
	}



	public List<Map<String, String>> getDocsListMap() {
		return docsListMap;
	}



	public void setDocsListMap(List<Map<String, String>> docsListMap) {
		this.docsListMap = docsListMap;
	}



	public String getReview() {
		return review;
	}



	public void setReview(String review) {
		this.review = review;
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

	
}
