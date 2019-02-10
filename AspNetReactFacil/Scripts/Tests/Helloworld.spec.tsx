import * as React from "react";
import * as HelloWorld from '../HelloWorld/HelloWorld';

it('Should not petar', () => {
    // ARRANGE
    const hello = new HelloWorld.HelloWorld({ show: true });
    // ACT
    const render = hello.render();

    // ASSERT
    expect(hello).toBeDefined();
});