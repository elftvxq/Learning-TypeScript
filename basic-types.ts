let isDone: boolean = false
let age: number = 20
let binaryNumebr: number = 0b1111

//  ES6中："0b"開頭表示將二進位轉成十進位
//  其他進位表示：
//  八進位: 010(ES5.1); 0o10(ES6)
//  十六進位: 0x10(ES5.1)
//  二進位: 0b10(ES6)

let firstName: string = 'emma'
let message: string = `Hello, ${firstName}, age is ${age}`

// 以下兩個為所有類型的子類型，意思為可以被賦值給其他類型
let u: undefined = undefined
let n: null = null

let num: number = undefined
// undefined 的變量可以賦值給 number

let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

// 屬型和方法也可以被調用
notSure.myName
notSure.getName()

let numberOrString: number | string = 234
numberOrString = 'abc'


// 陣列裡面全部要是數字
let arrOFNumber: number[] = [1, 2, 3, 4]
arrOFNumber.push(5)
arrOFNumber.push('str') //會報錯


// 類陣列
// 類陣列（Array - Like）
// 類陣列是指以數值索引的值所成的群集，它可能是串列但並非真正的陣列，例如：DOM 物件操作後所得到的串列、函式引數所形成的串列（ES6 已棄用）。

// 如果要使用陣列方法比如 map 或是 forEach，要先轉為真正的陣列
// 函式引數所形成的串列

function test() {
	console.log(arguments)
	arguments.length
	arguments[1]
	arguments.forEach //報錯
}


let users: [string, number] = ['emma', 20]
user = ['Andy', 2, true] // true為布林值，會報錯
