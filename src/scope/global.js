var hello = "Hello";
let world = "Hello World"
const helloWorld = "Hello World!"

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
  globalVar = "Im global";
}

helloWorld();
console.log(globalVar);