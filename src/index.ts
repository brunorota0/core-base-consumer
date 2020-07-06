import { test, createElement, updateNode, removeNode, createNode } from 'robotjscorebase'

test('test text');

const element = createElement({
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
})

console.log(element);