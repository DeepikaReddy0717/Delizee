package com.onlinefood.dto;

import java.util.ArrayList;
import java.util.List;

import com.onlinefood.entity.Food;

import lombok.Data;

@Data
public class FoodResponseDto extends CommonApiResponse {
	
	public List<Food> getFoods() {
		return foods;
	}

	public void setFoods(List<Food> foods) {
		this.foods = foods;
	}

	private List<Food> foods = new ArrayList<>();

}
