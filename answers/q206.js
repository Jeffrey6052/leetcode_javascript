
// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

// 环境准备

const lodash = require("lodash")
const util = require('util')

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 快速创建链表
function createList(vals) {

    let headVal = lodash.first(vals)

    let headNode = new ListNode(headVal)
    let tailNode = headNode

    lodash.tail(vals).forEach((val) => {

        let _node = new ListNode(val)

        tailNode.next = _node
        tailNode = _node
    })

    return {
        headNode,
        tailNode
    }
}

function inspect(object, depth = 8) {
    return util.inspect(object, { depth: depth })
}

// 解题

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

    let nextNode = head
    let prevNode = null

    while (nextNode) {

        let currNode = nextNode

        // 修改nextNode, 更新循环条件
        nextNode = currNode.next

        // 修改当前节点的连接指向
        currNode.next = prevNode

        // 更新缓存的数据
        prevNode = currNode
    }

    return prevNode
}


// 测试

const test1 = function () {

    const { headNode } = createList([1, 2, 3, 4])

    const res = reverseList(headNode)
    console.log("[test1] res =", inspect(res))
}

test1()


// 递归解法
var reverseList_2 = function (head) {



}