pragma solidity ^0.4.17;

contract Increment {

  uint256 number;

  function Increment() public {
      number = 1;
  }

  function get() public view returns (uint256 _number){
    _number = number;
  }

  function inc() public {
    number += 1;
  }
}
