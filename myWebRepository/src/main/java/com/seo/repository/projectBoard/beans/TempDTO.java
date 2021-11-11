package com.seo.repository.projectBoard.beans;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class TempDTO {

	private String mainImgFile;
	private String subject;
	private String startDate;
	private String endDate;
	private List<MultipartFile> subImgList;
	
	public void setMainImgFile(String mainImgFile) {
		this.mainImgFile = mainImgFile;
	}
	
	public String getMainImgFile() {
		return this.mainImgFile;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getSubject() {
		return this.subject;
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
	
	@Override
	public String toString() {
		return this.mainImgFile+","+this.subject+","+this.startDate+","+this.endDate;
	}

	public List<MultipartFile> getSubImgList() {
		return subImgList;
	}

	public void setSubImgList(List<MultipartFile> subImgList) {
		this.subImgList = subImgList;
	}
	
}
