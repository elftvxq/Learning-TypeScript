// 與 Java OOP 概念有關：封裝、繼承、多形

// 先做出一個動物的類(class)
// 修飾符：變數或是方法的權限管理，不被自己類別的成員調用或任意改變值，public/private/protected/readonly
class Animal {
	readonly name: string;
	// 靜態方法(類的定義和實例沒有太大關係，可以寫成靜態方法)
	static categories: string[] = ['mammal', 'bird']
	static isAnimal(a) {
		return a instanceof Animal
	}
	constructor(name: string) {
		this.name = name
	}
	run() {
		return `${this.name} is running`
	}
}

const snake = new Animal('Amy')
console.log(snake.run())
// name 為 public，可以任意被訪問並且改寫
// name 在父類中改為 private 會報錯
// protect 可以被子類別訪問，
// snake.name = 'Eric'
// console.log(snake.name)
console.log(Animal.categories)
console.log(Animal.isAnimal(snake)) //true


// 繼承
// 在子類別中自行增加方法
class Dog extends Animal {
	bark() {
		return `${this.name} is barking`
	}
}

const baobao = new Dog('baobao')
console.log(baobao.run())
console.log(baobao.bark())

class Cat extends Animal {
	// 調用父類別的變數，需要使用 super
	constructor(name) {
		super(name)
	}

	// override 貓咪叫的方法
	run() {
		return 'Meow, ' + super.run()
	}
}

const maomao = new Cat('maomao')
console.log(maomao.run())



// interface
// 沒有兩個物品都能夠繼承的父類
interface Radio {
	switchRadio(): void;
}

interface Battery {
	checkBatteryStatus();
}

// 將兩個介面結合
interface RadioWithBattery extends Radio {
	checkBatteryStatus();
}

//可以實作多個介面
class Car implements Radio, Battery {
	switchRadio() {

	}
	checkBatteryStatus() {

	}
}

class CellPhone implements Radio {
	switchRadio() {

	}
}
