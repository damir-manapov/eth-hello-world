var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld', function (accounts) {

    it("should start from zero", function () {

        var hello;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.counter.call();
            })
            .then(function (сounter) {
                assert.equal(сounter.toNumber(), 0, " initial counter should be 0");
            });

    });

    it("should increase correctly", function () {

        var hello;
        var initialCounter;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.counter.call();
            })
            .then(function (сounter) {
                initialCounter = сounter.toNumber();
            })
            .then(function () {
                return hello.increase();
            })
            .then(function () {
                return hello.counter.call();
            })
            .then(function (сounter) {
                assert.equal(сounter.toNumber(), initialCounter + 1, " after increasing counter should be 1");
            });

    });

    it("should decrease correctly", function () {

        var hello;
        var initialCounter;

        return HelloWorld.deployed().then(function (instance) {
            hello = instance;
        })
            .then(function () {
                return hello.counter.call();
            })
            .then(function (сounter) {
                initialCounter = сounter.toNumber();
            })
            .then(function () {
                return hello.decrease();
            })
            .then(function () {
                return hello.counter.call();
            })
            .then(function (сounter) {
                assert.equal(сounter.toNumber(), initialCounter - 1, " after increasing counter should be 1");
            });

    });

});
