pragma solidity ^0.4.17;

import './Ownable.sol';

contract Increment is Ownable{

  uint256 number;

  function Increment(address _owner) public
  Ownable(_owner)
   {
      number = 1;
  }

  function get() public view returns (uint256 _number){
    _number = number;
  }

  function inc() public onlyOwner {
    number += 1;
  }
}
