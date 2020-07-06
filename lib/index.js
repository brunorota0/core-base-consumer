"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robotjscorebase_1 = require("robotjscorebase");
robotjscorebase_1.test('test text');
const element = robotjscorebase_1.createElement({
    key: 'test',
    element: 'div',
    selector: 'body div',
    text: 'test text',
    classes: ['testclass1', 'testclass2'],
    attrs: [
        { testAttrKey: 'testAttrValue' },
        { testAttrKey2: 'testAttrValue2' }
    ],
    children: [],
    style: 'color: red'
});
console.log(element);
