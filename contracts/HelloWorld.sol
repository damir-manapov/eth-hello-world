pragma solidity ^0.4.13;

contract HelloWorld {

    uint256 public counter = 0;

    function increase() public {
        counter++;
    }

    function decrease() public {
        counter--;
    }
}