
// 83. 删除排序链表中的重复元素
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

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

    let tmpNode = headNode

    lodash.tail(vals).forEach((val) => {

        let _node = new ListNode(val)

        tmpNode.next = _node

        tmpNode = _node

    })

    return headNode
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
const deleteDuplicates = function (head) {

    if (!head) return null

    let cacheNode = head
    let cacheVal = cacheNode.val

    let nextNode = head.next
    while (nextNode) {

        let sampleNode = nextNode
        let sampleVal = sampleNode.val

        // 提前处理好下次循环条件
        nextNode = nextNode.next

        if (sampleVal === cacheVal) {
            // 值相同时, 断开原有连接
            cacheNode.next = null
        } else {
            // 值不相同时,建立新连接
            cacheVal = sampleVal
            cacheNode.next = sampleNode
            cacheNode = sampleNode
        }
    }

    // 因为是直接在原对象上修改的, 所以返回原对象即可
    return head

}

// 测试

const test1 = function () {
    const head = createList([1, 1, 2, 3, 3])
    const res = deleteDuplicates(head)

    console.log("test1", util.inspect(res, { depth: Infinity }))
}

test1()
