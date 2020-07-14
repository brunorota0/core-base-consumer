"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robotjscorebase_1 = require("robotjscorebase");
// test('test text');
// const element = createElement({
//     key: 'test',
//     element: 'div',
//     selector: 'body div',
//     text: 'test text',
//     classes: ['testclass1', 'testclass2'],
//     attrs: [
//         { testAttrKey: 'testAttrValue' },
//         { testAttrKey2: 'testAttrValue2' }
//     ],
//     children: [],
//     style: 'color: red'
// })
// console.log(element);
const component = robotjscorebase_1.r("div", "root div", [], "key1", "test text", [], "color: red;", []);
robotjscorebase_1.render(component, 'root');
