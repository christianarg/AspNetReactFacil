"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });
var React = require("react");
var enzyme_1 = require("enzyme");
var HelloWorld_1 = require("../HelloWorld/HelloWorld");
it("Should work", function () {
    expect(true).toBe(true);
});
it('ShouldCoso', function () {
    debugger;
    var helloWorld = enzyme_1.shallow(React.createElement(HelloWorld_1.HelloWorld, { show: true }));
    expect(helloWorld.find('h2').text()).toEqual('Hello world Mostro!');
});
//# sourceMappingURL=HelloWorld.test.js.map