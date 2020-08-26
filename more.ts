// type aliases 類型別名
// 常用的情境：聯合多種類型
type PlusType = (x: number, y: number) => number

// 本來的寫法要清楚定義，很麻煩
function sum(x: number, y: number): number {
	return x + y
}

// 原本的寫法(1)
// const sum2: (x: number, y: number) => number = sum

// 定義後寫法(2)
const sum2: PlusType = sum

// 多種類型的狀況
// n 如果是string 返回 string, 結果為函數返回函數
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
	if (typeof n === 'string') {
		return n
	} else {
		return n()
	}
}

// type assertion
// 不確定聯合類型，只訪問共用的其中一個類型
// 斷言不是轉換，不能斷言成其他完全不包括的類型
function getLength(input: string | number): number {
	// as: 編譯器無法判斷，直接告訴編譯器變量類型
	// 注意要斷言使用類 (String)
	// const str = input as String
	// if (str.length) {
	// 	return str.length
	// } else {
	// 	const number = input as Number
	// 	return number.toString().length
	// }

	//更為簡潔的寫法
	if ((<string>input).length) {
		return (<string>input).length
	} else {
		return input.toString().length
	}
}
