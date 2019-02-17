"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var HelloWorld_1 = require("../HelloWorld/HelloWorld");
it("Should work", function () {
    expect(true).toBe(true);
});
it('Should have an h2 with concrete text', function () {
    var helloWorld = enzyme_1.shallow(React.createElement(HelloWorld_1.HelloWorld, { show: true }));
    expect(helloWorld.find('h2').text()).toEqual('Hello world Mostro!');
});
it('Should not show When show=false', function () {
    var helloWorld = enzyme_1.shallow(React.createElement(HelloWorld_1.HelloWorld, { show: false }));
    expect(helloWorld.html()).toBeNull();
});
//# sourceMappingURL=HelloWorld.test.js.map