
// 160. 相交链表
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

// ------ 运行环境 ------

class ListNodeModel {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  inspect() {
    return `[ListNodeModel val=${this.val} next=${this.next}]`
  }
}

function ListNode(val, next = null) {
  return new ListNodeModel(val, next)
}

// var node1 = new ListNodeModel(5)
// console.log("node1", node1)

// var node2 = ListNode(3)
// console.log("node2", node2)


// ------ 解答 ------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {

  if (!headA) return null
  if (!headB) return null

  let nodeA = headA
  let nodeB = headB

  while (nodeA !== nodeB) {

    // console.log("iterate", nodeA, nodeB)

    if (nodeA) {
      nodeA = nodeA.next
    } else {
      nodeA = headB
    }

    if (nodeB) {
      nodeB = nodeB.next
    } else {
      nodeB = headA
    }
  }

  return nodeA
}



// ------ 测试 ------ 

intersectNode = ListNode(8, ListNode(4, ListNode(5)))

headA = ListNode(4, ListNode(1, intersectNode))

headB = ListNode(5, ListNode(0, ListNode(1, intersectNode)))

var result = getIntersectionNode(headA, headB)

console.log("result", result)
