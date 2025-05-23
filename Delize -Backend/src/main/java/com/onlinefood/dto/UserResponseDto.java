package com.onlinefood.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UserResponseDto extends CommonApiResponse {
	
	public List<UserDto> getUsers() {
		return users;
	}

	public void setUsers(List<UserDto> users) {
		this.users = users;
	}

	private List<UserDto> users = new ArrayList<>();

}
