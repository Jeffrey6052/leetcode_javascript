
// 203. 移除链表元素
// https://leetcode-cn.com/problems/remove-linked-list-elements/

// ------ 运行环境 ------

class ListNodeModel {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  inspect() {
    return `[ListNodeModel val=${this.val} next=${this.next}]`
  }
}

function ListNode(val, next) {
  return new ListNodeModel(val, next)
}


// ------ 解答 ------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

  let newHead
  let newTail

  let nextNode = head
  while (nextNode) {

    const currentNode = nextNode
    nextNode = nextNode.next

    if (currentNode.val === val) continue

    const newNode = ListNode(currentNode.val)

    if (!newHead) {
      newHead = newNode
      newTail = newNode
    } else {
      newTail.next = newNode
      newTail = newNode
    }
  }

  return newHead
}

// ------ 测试 ------ 

const test1 = () => {
  head = ListNode(1, ListNode(2, ListNode(6, ListNode(3, ListNode(4, ListNode(5, ListNode(6)))))))
  val = 3

  const result = removeElements(head, val)

  const t1 = getLinkValues(result)

  console.log("test1 t1", t1)
}

const getLinkValues = (head) => {

  const values = []

  let nextNode = head

  while (nextNode) {
    values.push(nextNode.val)
    nextNode = nextNode.next
  }

  return values
}

test1()


