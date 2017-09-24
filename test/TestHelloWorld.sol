pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/HelloWorld.sol";

contract TestHelloWorld {

  function testIncreasing() {

    HelloWorld hello = new HelloWorld();

    Assert.equal(hello.getCounter(), 0, "Initial counter should be 0");

    hello.increase();

    Assert.equal(hello.getCounter(), 1, "After increasing counter should be 1");

  }

  function testIncreasingAndDecreasing() {

    HelloWorld hello = new HelloWorld();

    Assert.equal(hello.getCounter(), 0, "Initial counter should be 0");

    hello.increase();

    Assert.equal(hello.getCounter(), 1, "After increasing counter should be 1");

    hello.decrease();

    Assert.equal(hello.getCounter(), 0, "After decreasing counter should be 0 again");

  }

}
