import { test, r, updateNode, removeNode, createNode, render, VirtualNode } from 'robotjscorebase'

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

const component = r("div", [], [
    r("button", [], [], undefined, undefined, "Button text"),
    r("h1", [], [])
])

render(component, 'root')
