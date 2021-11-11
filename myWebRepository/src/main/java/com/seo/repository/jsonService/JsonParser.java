package com.seo.repository.jsonService;

import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class JsonParser {
	
	public JsonParser() {
	}
	
	public List<Map<String,String>> jsonTransformListMap(String jsonStr){
		if(jsonStr == null) {
			return null;
		}
		Gson gson = new Gson();
		List<Map<String, String>>data = gson.fromJson(jsonStr, new TypeToken<List<Map<String,String>>>(){}.getType());
		return data;
	}

}
