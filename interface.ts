// 建議字首大寫表示為 interface
// 注意使用分號
interface Person {
	readonly id: number;
	name: string;
	age?: number;
}

// 不能減少或是增加屬性，或者會報錯
let emma: Person = {
	id: 1234,
	name: 'emma',
	age: 20,
}

