package com.seo.repository.fileService;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

public class SingleFileUpload {
	
	private String originalName;
	private String uuid;
	private String filePath;
	private boolean success;
	
	public SingleFileUpload(MultipartFile file, String filePath) {
		
		this.originalName = file.getOriginalFilename();
		UUID uid = UUID.randomUUID();
		this.uuid = uid+this.originalName;
		this.filePath = filePath;
		
		try {
			File target = new File(this.filePath, this.uuid);
			byte[] fileData = file.getBytes();
			FileCopyUtils.copy(fileData, target);
			this.success = true;
		}catch(Exception e) {
			this.success = false;
		}
	}
	
	public SingleFileUpload(MultipartFile file, String filePath, String ...directoryNames) {
		
		this.originalName = file.getOriginalFilename();
		UUID uid = UUID.randomUUID();
		this.uuid = uid+this.originalName;
		this.filePath = filePath;
		makeDirectory(directoryNames);
		try {
			File target = new File(this.filePath, this.uuid);
			byte[] fileData = file.getBytes();
			FileCopyUtils.copy(fileData, target);
			this.success = true;
		}catch(Exception e) {
			this.success = false;
		}
	}
	
	private void makeDirectory(String ...directoryNames) {
		String filePath = this.filePath;
		for(String directoryName : directoryNames) {
			filePath += "\\"+directoryName;
			File file = new File(filePath);
			file.mkdir();
		}
		this.filePath = filePath;
	}
	
	
	public String getUUID() {
		return this.uuid;
	}

	public String getOriginFileName() {
		return this.originalName;
	}
	
	public String getFilePath() {
		return this.filePath;
	}
	
	public boolean isSuccess() {
		return this.success;
	}
}
