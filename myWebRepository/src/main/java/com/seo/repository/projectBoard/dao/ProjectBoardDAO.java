package com.seo.repository.projectBoard.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seo.repository.projectBoard.beans.ProjectBoardListDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardWriteDTO;

public interface ProjectBoardDAO {

	public int boardWriteInsert(ProjectBoardWriteDTO pbwDTO);
	public void mainImgInsert(Map<String,Object> mainImgInfo);
	public void subImgInsert(ProjectBoardWriteDTO pbwDTO);
	public void videoInsert(Map<String,Object> videoInfo);
	public void docsInsert(ProjectBoardWriteDTO pbwDTO);
	
	public List<ProjectBoardListDTO> getBoardList(Map<String,Integer> rowNums);
	public int getTotalCnt();
	
	public String test();
	
}
