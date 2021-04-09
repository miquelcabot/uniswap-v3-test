// SPDX-License-Identifier: MIT

pragma solidity ^0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20 {
  constructor(uint256 initialSupply) ERC20("Sample Token", "SMP") {
    _mint(msg.sender, initialSupply);
  }
}
