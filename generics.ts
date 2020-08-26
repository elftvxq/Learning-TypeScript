//泛型：定義函數的參數，接收傳入的參數的時候，不定義特定的類型，使用才指定
// T: 神秘的變量XDD
function echo<T>(arg: T): T {
	return arg
}

// 也可以直接傳入參數，會自動指定類型
const reult = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])
result2[1]

// 約束泛型
function echoWithArg<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}

interface IWithLength {
	length: number
}

// extends: 加入後可以傳入滿足特定約束條件的參數
function echoWithLength<T extends IWithLength>(arg: T): T {
	console.log(arg.length)
	return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])

// 可以在類別加上泛型，確保傳進傳出的值類型相等
class Queue<T> {
	private data = []
	// 替約束創建特定的方法，確保傳進去的值類型正確
	push(item: T) {
		return this.data.push(item)
	}

	pop(): T {
		return this.data.shift()
	}
}

//在實例出來的對象約束類型
// toFixed 是數字的內建函數
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length())

//interface 可動態指定接受的類型，靈活地返回值
interface KeyPair<T, U> {
	key: T,
	value: U
}

let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

// interface 也可用在描述函數的類型
// interface IPlus {
// 	(a: number, b: number): number
// }

//接受泛型更彈性
interface IPlus<T> {
	(a: T, b: T): T
}
function plus(a: number, b: number): number {
	return a + b
}
// const a: IPlus = plus
const a: IPlus<number> = plus

function connect(a: string, b: string): string {
	return a + b
}

const b: IPlus<string> = connect
