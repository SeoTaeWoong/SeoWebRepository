package com.seo.repository.projectBoard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ProjectBoardController {
	
	@RequestMapping(value="/projectBoardList", method=RequestMethod.GET )
	public String projectBoardList() {
		return "/jsp/projectBoard/projectBoardList";
	}
	
	
	@RequestMapping(value="/projectBoardWrite", method=RequestMethod.GET)
	public String projectBoardWrite() {
		return "/jsp/projectBoard/projectBoardWrite";
	}
	
	
	@RequestMapping(value="/projectBoardInfo", method=RequestMethod.GET)
	public String projectBoardInfo() {
		return "/jsp/projectBoard/projectBoardInfo";
	}
	
	@RequestMapping(value="/projectBoardModify", method=RequestMethod.GET)
	public String projectBoardModify() {
		return "/jsp/projectBoard/projectBoardModify";
	}
}
