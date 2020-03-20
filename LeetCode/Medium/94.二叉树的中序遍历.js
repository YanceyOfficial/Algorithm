/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let treeNode = root
  const stack = []

  const res = []

  while (treeNode !== null || stack.length !== 0) {
    while (treeNode !== null) {
      stack.push(treeNode)
      treeNode = treeNode.left
    }

    if (stack.length !== 0) {
      treeNode = stack.pop()
      res.push(treeNode.val)
      treeNode = treeNode.right
    }
  }

  return res
}

// @lc code=end
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.right.right = new TreeNode(6)

console.log(inorderTraversal(tree))

// var inorderTraversalNode = function(node, cb) {
//   if (node) {
//     inorderTraversalNode(node.left, cb)
//     cb(node.val)
//     inorderTraversalNode(node.right, cb)
//   }
// }

// var inorderTraversal = function(root) {
//   const arr = []

//   function cb(val) {
//     console.log(val)
//     arr.push(val)
//   }

//   inorderTraversalNode(root, cb)

//   return arr
// }
