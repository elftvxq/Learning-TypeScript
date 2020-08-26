// 函數宣告式
// function add(x: number, y: number, z?: number): number {
// 	// 可選參數必須被放在最後一個
// 	if (typeof z === 'number') {
// 		return x + y + z
// 	} else {
// 		return x + y
// 	}

// }

let result = add(2, 3, 5)

//函數表達式
// z = 10，默認 z 為 number 的寫法（ES6)
// add 被定義為函數類型
const add = function (x: number, y: number, z: number = 10): number {
	if (typeof z === 'number') {
		return x + y + z
	} else {
		return x + y
	}
}

//正確寫法
//箭頭為 TS 返回聲明函數的值的方法
const add2: (x: number, y: number, z?: number) => number = add
