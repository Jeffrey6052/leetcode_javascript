
// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/


// 环境准备

const lodash = require("lodash")

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {

    if (!l1) return l2
    if (!l2) return l1

    let n1 = l1
    let n2 = l2

    let nt = new ListNode()
    let nx = nt

    while (true) {
        if (n1 && n2) {
            if (n2.val <= n1.val) {
                nx.next = n2
                nx = n2
                n2 = n2.next
            } else {
                nx.next = n1
                nx = n1
                n1 = n1.next
            }
        } else if (n1) {
            nx.next = n1
            break
        } else if (n2) {
            nx.next = n2
            break
        }
    }

    return nt.next
}


// 测试



const l1 = createList([1, 2, 4])
const l2 = createList([1, 3, 4])

// console.log("l1", l1)
// console.log("l2", l2)

const result = mergeTwoLists(l1, l2)

console.log("result", result)