pragma solidity ^0.4.17;

import './Ownable.sol';

contract Titles is Ownable{
  // That's the data
  string[] titles;

  // constructor
  function Titles(address _owner) public
  Ownable(_owner)
  {
  }

  //
  function addTitle(string title) public onlyOwner {
    titles.push(title);
  }

  function getTitle(uint256 idx) public view returns (string) {
    return titles[idx];
  }

  function getTitlesCount() public view returns (uint256) {
    return titles.length;
  }

}
