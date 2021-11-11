package com.seo.repository.projectBoard.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.seo.repository.fileService.SingleFileUpload;
import com.seo.repository.jsonService.JsonParser;
import com.seo.repository.projectBoard.beans.ProjectBoardListDTO;
import com.seo.repository.projectBoard.beans.ProjectBoardInsertDTO;
import com.seo.repository.projectBoard.mapper.ProjectBoardMapper;

@Service
public class ProjectBoardServiceImpl implements ProjectBoardService{

	@Autowired
	ProjectBoardMapper pbMapper;
	
	private String subImgPath = "D:\\files\\subImg";
	
	@Override
	public void boardInsert(ProjectBoardInsertDTO pbiDTO,
								 String contentJSON,
								 String memberJSON) {
		
		JsonParser jsonParser = new JsonParser();
		pbiDTO.setContentList(jsonParser.jsonTransformListMap(contentJSON));
		pbiDTO.setMemberList(jsonParser.jsonTransformListMap(memberJSON));
		String filePath = "D:\\files\\projectboard";
		SingleFileUpload fileUpload = new SingleFileUpload(pbiDTO.getMainIMG(), filePath, pbiDTO.getTitle(), "MainImg");
		System.out.println(fileUpload.isSuccess());
		System.out.println(pbiDTO);
	}
	
	@Override
	public List<Map<String,Object>> multiFileSet(List<MultipartFile> files) {
		
		List<Map<String,Object>> tmpList = new ArrayList<Map<String,Object>>();
		for(MultipartFile file : files) {
			Map<String,Object> tmpMap = new HashMap<String,Object>();
			UUID uid = UUID.randomUUID();
			String fileName = file.getOriginalFilename();
			
			try {
				File target = new File(subImgPath, uid+fileName);
				byte[] fileData = file.getBytes();
				String uuid = uid+fileName;
				String filePath = subImgPath+"\\"+uuid;
				
				tmpMap.put("originalName", fileName);
				tmpMap.put("filePath", filePath);
				tmpMap.put("uuid", uuid);
				FileCopyUtils.copy(fileData, target);
			}catch(Exception e) {
				
			}
			
			tmpList.add(tmpMap);
		}
		
		return tmpList;
	}
	
	
	
	
	@Override
	public void getPage(int page, ModelAndView mv) {
		//Item 처리
		int itemCnt = 7;
		int minR = 1+(page-1)*itemCnt;
		int maxR = page*itemCnt; // 1 7 13
		
		Map<String,Integer> rowNums = new HashMap<String, Integer>();
		rowNums.put("minR", minR);
		rowNums.put("maxR", maxR);

		//Paging처리
		int total = pbMapper.getTotalCnt();
		int pageCnt = 5;
		
		List<ProjectBoardListDTO> pageData = pbMapper.getDataList(rowNums);
		
		ProjectBoardPaging paging = new ProjectBoardPaging();
		paging.setPageCnt(pageCnt);  //출력할 페이지버튼갯수
		paging.setCurrentPage(page); //현재페이지
		paging.setTotalPage((total+itemCnt-1)/itemCnt);//총페이지
		String pagingST = paging.createPage();
		
		for(ProjectBoardListDTO dto : pageData) {
			dto.setFilePath(dto.getFilePath().replace("D:\\files\\" , "\\img\\"));
		}
		
		mv.addObject("pageData",pageData);
		mv.addObject("pagingST",pagingST);
	}
	
}
