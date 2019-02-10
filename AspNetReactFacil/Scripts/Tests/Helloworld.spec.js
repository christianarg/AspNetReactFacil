"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = require("../HelloWorld/HelloWorld");
it('Should not petar', function () {
    // ARRANGE
    var hello = new HelloWorld.HelloWorld({ show: true });
    // ACT
    var render = hello.render();
    // ASSERT
    expect(hello).toBeDefined();
});
//# sourceMappingURL=Helloworld.spec.js.map