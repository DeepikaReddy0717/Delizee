package com.onlinefood.dto;

import lombok.Data;

@Data
public class UserStatusUpdateRequestDto { 
	
	private int userId;
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	private String status;

}
