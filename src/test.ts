function greeter (person: string): string {
  return `hello, ${person}`
}
const user = 'yushare'
//////////////////////////////////////////////////////////////////
let v1: any
v1 = 12
v1 = 'ysy'
v1[0].name = 12

let v2: unknown
v2 = 22
v2 = [1, 2, 3]
// v2[0] = 'name' // error: 对象的类型为 "unknown"。
//////////////////////////////////////////////////////////////////
let empty_arr: never[] = []
//////////////////////////////////////////////////////////////////
interface Car {
  brand: 'toyota'
}
//////////////////////////////////////////////////////////////////
class Person {
  
}
//////////////////////////////////////////////////////////////////
enum Animal {
  Dog,
  Cat
}
const ss = Animal['Dog']
const enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

const r = Color.Red
const g = Color['Green']

declare let c: Color
c = Color.Blue
// c = Animal.Dog // error: 不能将类型“Animal.Dog”分配给类型“Color”。
//////////////////////////////////////////////////////////////////
interface Say {
  (w: string): string
}
interface User {
  readonly name: string,
  age?: number,
  gender: string,
  [propName: string]: unknown,
  greeter: (w: string) => string,
  say: Say
}
const getUserName = (user: User) => user.name
///////////////////////////////////////////////////////////////
interface Phone {
  [name: string]: string
}
interface Userinfo {
  name: string,
  age?: number,
  readonly gender: string,
  say: (w: string) => string,
  phone: Phone
}
////////////////////////////////////////////////////////////
interface Config {
  width?: number;
}

function CalculateAreas (config: Config): { area: number} {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }
  return {area: square};
}

// let mySquare = CalculateAreas({ widdth: 5 });