
// 7. 整数反转
// https://leetcode-cn.com/problems/reverse-integer/

// 环境准备



// 解题

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {

    // 思路 转换为字符串

    const xStr = Math.abs(x).toString()

    const xStrLen = xStr.length

    let res = 0

    for (let i = 0; i < xStrLen; i++) {

        let num = parseInt(xStr[i])

        res += num * 10 ** i
    }

    let limit = 2 ** 31
    if (x > 0) limit -= 1

    if (res > limit) return 0

    const mul = x < 0 ? -1 : 1
    return res * mul
};

// 测试

const test1 = function () {

    const x = -10

    const res = reverse(x)

    console.log("res", res)

}


test1()