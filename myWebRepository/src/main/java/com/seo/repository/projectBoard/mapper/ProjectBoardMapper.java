package com.seo.repository.projectBoard.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.seo.repository.projectBoard.beans.ProjectBoardListDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardWriteDTO;
import com.seo.repository.projectBoard.dao.ProjectBoardDAO;

@Repository("pbwMapper")
public class ProjectBoardMapper {
	
	@Autowired
	private SqlSession session;
	
	public void projectBoardInsert(ProjectBoardWriteDTO pbwDTO) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		dao.boardWriteInsert(pbwDTO);
	}
	
	public void mainImgInsert(Map<String,Object> mainImgInfo) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		dao.mainImgInsert(mainImgInfo);
	}
	
	public void subImgInsert(ProjectBoardWriteDTO pbwDTO) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		dao.subImgInsert(pbwDTO);
	}
	
	public void videoInsert(Map<String,Object> videoInfo) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		dao.videoInsert(videoInfo);
	}
	
	public void docsInsert(ProjectBoardWriteDTO pbwDTO) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		dao.docsInsert(pbwDTO);
	}
	
	
	public List<ProjectBoardListDTO> getDataList(Map<String,Integer> rowNums) {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		List<ProjectBoardListDTO> pageData = dao.getBoardList(rowNums);
		return pageData;
	}
	
	public int getTotalCnt() {
		ProjectBoardDAO dao = session.getMapper(ProjectBoardDAO.class);
		int total = 0;
		total = dao.getTotalCnt();
		return total;
	}
}
