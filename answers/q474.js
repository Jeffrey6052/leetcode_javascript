
// 474. 一和零
// https://leetcode-cn.com/problems/ones-and-zeroes/

// 解题
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {

    // 存储计算的缓存
    const Cache = {}

    let size = strs.length
    if (!size) return 0

    return opt(strs, size, m, n, Cache)
};

const opt = function (strs, size, m, n, Cache) {

    if (size === 0) return 0

    const cacheKey = `${size}_${m}_${n}`
    if (Cache[cacheKey] !== undefined) {
        return Cache[cacheKey]
    }

    const str = strs[size - 1]

    // "拿取"的情况, 求num1
    let _m = m
    let _n = n
    for (i = 0; i < str.length; i++) {
        let char = str[i]
        if (char === "0") {
            _m -= 1
            if (_m < 0) break
        } else if (char === "1") {
            _n -= 1
            if (_n < 0) break
        }
    }

    let num1 = 0

    // 必须满足条件
    if (_m >= 0 && _n >= 0) {
        num1 = 1 + opt(strs, size - 1, _m, _n, Cache)
    }

    // "不拿"的情况, 计算num2
    const num2 = opt(strs, size - 1, m, n, Cache)

    const res = Math.max(num1, num2)

    Cache[cacheKey] = res

    return res
}



// 测试

const test1 = function () {
    const strs = ["10", "0", "1"]
    const m = 1
    const n = 1

    const result = findMaxForm(strs, m, n)

    console.log("test1 result", result)
}

const test2 = function () {
    const strs = ["10", "0001", "111001", "1", "0"]
    const m = 5
    const n = 3

    const result = findMaxForm(strs, m, n)

    console.log("test2 result", result)
}

const test3 = function () {
    const strs = ["11", "11", "0", "0", "10", "1", "1", "0", "11", "1", "0", "111", "11111000", "0", "11", "000", "1", "1", "0", "00", "1", "101", "001", "000", "0", "00", "0011", "0", "10000"]
    const m = 90
    const n = 66

    const result = findMaxForm(strs, m, n)

    console.log("test3 result", result)
}

const test4 = function () {
    const strs = ["0", "0", "1", "1"]
    const m = 2
    const n = 2

    const result = findMaxForm(strs, m, n)

    console.log("test4 result", result)
}

test1()
test2()
test3()
test4()
