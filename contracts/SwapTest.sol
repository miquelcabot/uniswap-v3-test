// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

abstract contract SwapTest {
  function addLiquidityETH(
    address token,
    uint256 amountTokenDesired,
    uint256 amountTokenMin,
    uint256 amountETHMin,
    address to,
    uint256 deadline
  ) external payable {}

  function getAmountsIn(uint256 amountOut, address[] memory path)
    public
    view
    virtual
    returns (uint256[] memory amounts);

  address public WETH;

  function swapETHForExactTokens(
    uint256 amountOut,
    address[] calldata path,
    address to,
    uint256 deadline
  ) external payable virtual returns (uint256[] memory amounts);
}
