// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "hardhat/console.sol";

interface IUniSwap {
  function swapExactTokensForETH(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] calldata path,
    address to,
    uint256 deadline
  ) external returns (uint256[] memory amounts);

  function WETH() external pure returns (address);
}

interface IERC20 {
  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool);

  // function transfer(address recipient, uint256 amount) external returns (bool);

  function balanceOf(address account) external returns (uint256);

  function approve(address spender, uint256 amount) external returns (bool);
}

contract Swap {
  IUniSwap uniswap;

  constructor(address _uniswap) {
    uniswap = IUniSwap(_uniswap);
  }

  function swapTokensForETH(
    address token,
    uint256 amountIn //,
    // uint256 amountOutMin,
    // uint256 deadline
  ) external {
    console.log("Sender: %s", msg.sender);
    console.log("Address: %s", address(this));
    console.log("AmountIn: %s", amountIn);
    console.log("Balance: %s", IERC20(token).balanceOf(msg.sender));
    // console.log("WETH: %s", uniswap.WETH());
    console.log("Uniswap address: %s", address(uniswap));

    IERC20(token).approve(address(uniswap), amountIn);

    // IERC20(token).transferFrom(msg.sender, address(this), amountIn);
    // IERC20(token).transfer(address(this), amountIn);

    /*address[] memory path = new address[](2);
    path[0] = token;
    path[2] = uniswap.WETH();
    IERC20(token).approve(address(uniswap), amountIn);
    uniswap.swapExactTokensForETH(
      amountIn,
      amountOutMin,
      path,
      msg.sender,
      deadline
    );*/
  }
}
