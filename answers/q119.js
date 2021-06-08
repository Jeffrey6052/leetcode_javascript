
// 119. 杨辉三角 II
// https://leetcode-cn.com/problems/pascals-triangle-ii/

// 环境准备


// 解题

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {

    let resRow = [1]

    if (rowIndex === 0) return resRow

    for (let i = 1; i <= rowIndex; i++) {

        const nextRow = [1]

        for (let j = 0; j < resRow.length; j++) {
            const num = resRow[j] + (resRow[j + 1] || 0)
            nextRow.push(num)
        }

        resRow = nextRow
    }

    return resRow
};

// 测试

const test1 = function () {
    const res = getRow(5)

    console.log("test1", res)
}

test1()