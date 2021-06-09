
// 141. 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/

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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    if (!head) return false

    // 使用快慢指针
    let fastCur = head
    let slowCur = head

    let res = false

    // 慢指针暂停移动标识
    let pause = true

    while (fastCur.next) {

        // 慢指针移动
        if (!pause) {
            slowCur = slowCur.next
        }

        fastCur = fastCur.next

        // 快慢指针相遇说明有环
        if (slowCur === fastCur) {
            res = true
            break
        }

        pause = !pause
    }

    return res
}


// 测试

const test1 = function () {

    const { headNode, tailNode } = createList([3, 2, 0, -4])

    const res1 = hasCycle(headNode)
    console.log("test1: res1 = ", res1)

    // 创建一个环
    tailNode.next = headNode.next

    // console.log("headNode", inspect(headNode))
    // console.log("tailNode", inspect(tailNode))

    const res2 = hasCycle(headNode)
    console.log("test1: res2 = ", res2)


}

test1()