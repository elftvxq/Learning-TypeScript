// 常量，執行程序中不會被改變的值，ex: const
// 星期一到星期日、顏色...etc

// 自動被賦予 key
enum Direction {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT'
}

// console.log(Direction.Up)
// console.log(Direction[0])

const value = 'UP'
if (value === Direction.Up) {
	console.log('go up')
}
