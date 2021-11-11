package com.seo.repository.projectBoard.beans;

import java.util.Date;

public class ProjectBoardListDTO {
	private int seq;
	private String subject;
	private String techStack;
	private String rogDate;
	private String filePath;
	private String docs;
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTechStack() {
		return techStack;
	}
	public void setTechStack(String techStack) {
		this.techStack = techStack;
	}
	public String getRogDate() {
		return rogDate;
	}
	public void setRogDate(String rogDate) {
		this.rogDate = rogDate;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	
	
	
}
