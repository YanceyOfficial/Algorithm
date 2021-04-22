---
id: 23-merge-k-lists
title: 合并k个升序链表
sidebar_label: 23. 合并k个升序链表
keywords:
  - 链表
  - Divide and Conquer
---

:::success Tips
题目类型: 链表, 合并链表, Divide and Conquer

相关题目:

- [21. 合并两个有序链表](/leetcode/easy/21-merge-two-lists)

:::

## 题目

将多个链表合并成一个, 并保证新生成的链表按从小到大排序.

:::info 示例

输入: `[1->4->5, 1->3->4, 2->6]`

输出: `1->1->2->3->4->4->5->6`
:::

## 题解

### 方法一: 优先队列

完了, 现在写排序先想到的是优先队列, 这里用个小顶堆即可, 代码很简单, 直接看注释.

```ts
export function mergeKLists(lists) {
  const pq = new PriorityQueue()

  for (let head of lists) {
    while (head) {
      pq.offer([head.val, head])
      head = head.next
    }
  }

  const dummy = new ListNode(-1)
  let root = dummy
  while (pq.size()) {
    const curr = pq.poll()
    root.next = curr[1]
    root = root.next
  }

  root.next = null

  return dummy.next
}
```

#### 测试数据

```ts
const l1 = new ListNode(1)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

const l3 = new ListNode(2)
l3.next = new ListNode(6)

const res = mergeKLists([l1, l2, l3])

console.log(res)
console.log(res.next)
console.log(res.next.next)
console.log(res.next.next.next)
console.log(res.next.next.next.next)
console.log(res.next.next.next.next.next)
console.log(res.next.next.next.next.next.next)
console.log(res.next.next.next.next.next.next.next)
console.log(res.next.next.next.next.next.next.next.next)
```

### 分治

这道题让我们合并 k 个有序链表, 但是不管合并几个, 基本还是要两两合并.

那么首先考虑的方法是能不能利用[21. 合并两个有序链表](/leetcode/easy/21-merge-two-lists)的解法来解答此题. 答案是肯定的, 但是需要修改, 怎么修改呢, 最先想到的就是两两合并, 就是前两个先合并, 合并好了再跟第三个, 然后第四个直到第 k 个. 这样的思路是对的, 但是效率不高, 所以只能换一种思路.

这里就需要用到分治法(Divide and Conquer). 简单来说就是不停的对半划分, 比如 k 个链表先划分为合并两个 `k / 2` 个链表的任务, 再不停的往下划分, 直到划分成只有一个或两个链表的任务, 开始合并. 举个例子来说比如合并 6 个链表, 那么按照分治法, 首先分别合并 0 和 3, 1 和 4, 2 和 5. 这样下一次只需合并 3 个链表, 再合并 1 和 3, 最后和 2 合并就可以了.

代码中的 k 是通过 `(n + 1) / 2` 计算的, 这里为啥要加 1 呢, 这是为了当 n 为奇数的时候, k 能始终从后半段开始, 比如当 n=5 时, 那么此时 k=3, 则 0 和 3 合并, 1 和 4 合并, 最中间的 2 空出来. 当 n 是偶数的时候, 加 1 也不会有影响, 比如当 n=4 时, 此时 k=2, 那么 0 和 2 合并, 1 和 3 合并, 参见代码如下:

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let n = lists.length
  if (n === 0) return null
  while (n > 1) {
    const k = Math.floor((n + 1) / 2)
    for (let i = 0; i < Math.floor(n / 2); ++i) {
      lists[i] = mergeTwoLists(lists[i], lists[i + k])
    }
    n = k
  }
  return lists[0]
}

var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-1)
  let cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1) cur.next = l1
  if (l2) cur.next = l2
  return dummy.next
}
```

注意: `mergeTwoLists` 方法即是 [21. 合并两个有序链表](/leetcode/easy/21-merge-two-lists) 题的迭代版.