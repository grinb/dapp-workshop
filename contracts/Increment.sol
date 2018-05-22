pragma solidity ^0.4.17;

contract Increment {

  uint256 number;
  address owner;

  function Increment(address _owner) public {
      number = 1;
      owner = _owner;
  }

  function get() public view returns (uint256 _number){
    _number = number;
  }

  function inc() public {
    require(msg.sender == owner);
    number += 1;
  }
}
