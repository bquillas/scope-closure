const helloWorld = () => {
  const hello = "Hello World!";
  console.log(hello);
}

helloWorld();


var scope = "i am a global";

const functionScope = () => {
  var scope = "i am just a local";
  const func = () => {
    return scope;
  }
  console.log(scope);
}
// console.log(scope);
functionScope();
