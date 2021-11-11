package com.seo.repository.projectBoard.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.seo.repository.projectBoard.beans.ProjectBoardWriteDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardInsertDTO;

public interface ProjectBoardService {
	
	public void boardInsert(ProjectBoardInsertDTO pbwiDTO, String contentJSON, String memberJSON);
	
	public List<Map<String,Object>> multiFileSet(List<MultipartFile> files);
	
	public void getPage(int page, ModelAndView mv); 
}
