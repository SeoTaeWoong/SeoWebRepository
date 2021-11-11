package com.seo.repository.projectBoard.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.seo.repository.projectBoard.beans.ProjectBoardListDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardWriteDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardInsertDTO;
import com.seo.repository.projectBoard.service.ProjectBoardService;


@Controller
public class ProjectBoardController {
	
	@Autowired
	ProjectBoardService pbService;
	
	@ResponseBody
	@RequestMapping(value="/projectBoardList", method=RequestMethod.GET )
	public ModelAndView projectBoardList(@RequestParam(value="page", defaultValue="1") int page) {
		ModelAndView mv = new ModelAndView();
		pbService.getPage(page, mv);
		mv.setViewName("/jsp/projectBoard/projectBoardList");
		return mv;
	}
	
	
	@RequestMapping(value="/projectBoardWrite", method=RequestMethod.GET)
	public String projectBoardWrite() {
		return "/jsp/projectBoard/projectBoardWrite";
	}
	
	@RequestMapping(value="/projectBoardWrite2", method=RequestMethod.GET)
	public String projectBoardWrite2() {
		return "/jsp/projectBoard/projectBoardWrite2";
	}

	@ResponseBody
	@RequestMapping(value="/projectBoardWrtie_insert", method=RequestMethod.POST)
	public String projectBoardInsert(ProjectBoardInsertDTO pbiDTO,
									 @RequestParam("contentJSON") String contentJSON,
									 @RequestParam("memberJSON") String memberJSON) {
		
		pbService.boardInsert(pbiDTO,contentJSON, memberJSON);
		

		return "./projectBoardList?seq=0";
	}
	
	
	@RequestMapping(value="/projectBoardInfo", method=RequestMethod.GET)
	public String projectBoardInfo() {
		
		return "/jsp/projectBoard/projectBoardInfo";
	}
	
	@RequestMapping(value="/projectBoardInfoTest", method=RequestMethod.GET)
	public String projectBoardInfoTest() {
		
		return "/jsp/projectBoard/projectBoardInfo2";
	}
	
	
	@RequestMapping(value="/projectBoardModify", method=RequestMethod.GET)
	public String projectBoardModify() {
		return "/jsp/projectBoard/projectBoardModify";
	}
}
