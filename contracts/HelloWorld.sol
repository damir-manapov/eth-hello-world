pragma solidity ^0.4.4;

contract HelloWorld {

    uint256 counter = 0;

    function increase() {
        counter++;
    }

    function decrease() {
        counter--;
    }

    function getCounter() constant returns(uint256) {
        return counter;
    }
}