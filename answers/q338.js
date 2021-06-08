
// 338. 比特位计数
// https://leetcode-cn.com/problems/counting-bits/

// 解题

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {

    const result = [0]
    if (n === 0) return result

    for (let num = 1; num <= n; num++) {
        if (num % 2 == 1) {
            // 奇数比前一个数(肯定是偶数)要多一个"1",即最后一位数字从"0"变为了"1"
            const count = result[num - 1] + 1
            result.push(count)
        } else {
            // 偶数的"1"的数量等于自身除以2后获得的数值中的"1"的数量, 相当于二进制右移了一位,
            // 例如 1010 >> 1 = 101, 1的数量是一致的
            const count = result[num >> 1]
            result.push(count)
        }
    }

    return result
}


// 测试
const test1 = function () {
    const res = countBits(10)

    console.log("test1", res)
}

test1()

