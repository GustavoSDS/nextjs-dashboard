import { useState } from 'react';

const persona = {
  nombre: 'Tony',
  edad: 45,
};
type Persona = {
  nombre: string;
  edad: number;
};

function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar(persona.nombre);
//  saludar(persona.edad); ✖️

function saludar2({ nombre, edad }: Persona) {
  console.log(`Hola ${nombre} tienes ${edad} años`);
  return true;
}

saludar2(persona);

const sayHiFunction = (fn: (name: string) => void) => {
  fn('Tony');
};

const sayHello = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiFunction(sayHello);

function operations(
  fn: (a: number, b: number) => number,
  a: number,
  b: number,
) {
  return fn(a, b);
}

console.log(operations((a, b) => a + b, 2, 3));
console.log(operations((a, b) => a - b, 2, 3));
console.log(operations((a, b) => a * b, 2, 3));
console.log(operations((a, b) => a / b, 2, 3));

/* tipado de arrow functions */
const sumar = (a: number, b: number) => a + b;
const restar: (a: number, b: number) => number = (a, b) => a - b;

/* never */
const throwError = (message: string): never => {
  if (message) throw new Error(message);
  throw new Error(message);
};

throwError('Error');

const avengers = ['Ironman', 'Thor', 'Hulk'];

avengers.forEach(function (avenger) {
  console.log(avenger.toUpperCase());
});

/* objetos and types */
type HeroId = `${string}-${string}-${string}-${string}-${string}` | string;
type HeroPowerScale =
  | 'local'
  | 'global'
  | 'planetary'
  | 'galactic'
  | 'universal'
  | 'multiversal';

/* template union types */
type HexadecimalColor = `#${string}`;

//const color1: HexadecimalColor = '0033ff'; // hexadecimal sin #
const color2: HexadecimalColor = '#0033ff'; // hexadecimal con #

/* Intersections types */
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  id?: HeroId;
  powerScale?: HeroPowerScale;
  isActive?: boolean;
};

type Hero = HeroBasicInfo & HeroProperties;

let ironman: Hero = {
  name: 'Tony',
  age: 45,
  powerScale: 'global',
};

function createHero(input: HeroBasicInfo): Hero {
  const { name, age } = input;
  return {
    id: crypto.randomUUID(),
    name: name,
    age: age,
    isActive: true,
    powerScale: Math.random() > 0.5 ? 'local' : 'global',
  };
}

const thor = createHero({
  name: 'Thor',
  age: 45,
});
thor.powerScale = 'local';

console.log(thor.isActive); // true
console.log(thor.id?.toString()); // undefined

/* optionals properties */
type Hero2 = {
  name: string;
  age: number;
  isActive?: boolean;
};

type HeroProperties2 = {
  isActive?: boolean;
  address: {
    street: string;
    city: string;
  };
};

/* type indexing */
const addresHero: HeroProperties2['address'] = {
  street: 'Av. Siempre Viva',
  city: 'Bogota',
};

/* type from value */
const myAddress = {
  street: 'Av. Siempre Viva',
  city: 'Bogota',
};

type Address = typeof myAddress;

/* type from function return */

function createAddress() {
  return {
    street: 'Av. Siempre Viva',
    city: 'Bogota',
    country: 'Colombia',
    zip: '1',
  };
}

type AddressFromFunction = ReturnType<typeof createAddress>;

/* Arrays */
const languages: (string | number)[] = ['Javascript', 'Typescript', 'Python'];

console.log(languages.push('C++'));
languages.push(2);

/* multidimensional arrays

[
  ['X', 'O', 'X'], 
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
]

*/
type CellValue = 'X' | 'O' | '';
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
];

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
];

/* Tuples */
type State = [string, (newName: string) => void];

// const [hero, setHero]: State = useState('Tony');

type RGB = [number, number, number];

const red: RGB = [255, 0, 0];

/* Enums */

