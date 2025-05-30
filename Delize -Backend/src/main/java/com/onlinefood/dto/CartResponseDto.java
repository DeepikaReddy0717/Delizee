package com.onlinefood.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.onlinefood.entity.Cart;

import lombok.Data;

@Data
public class CartResponseDto extends CommonApiResponse {

	private List<Cart> carts = new ArrayList<>();
	
	private BigDecimal totalCartAmount = BigDecimal.ZERO;

	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}

	public BigDecimal getTotalCartAmount() {
		return totalCartAmount;
	}

	public void setTotalCartAmount(BigDecimal totalCartAmount) {
		this.totalCartAmount = totalCartAmount;
	}

}
